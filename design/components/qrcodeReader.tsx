import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { OnResultFunction,QrReader } from 'react-qr-reader'
import {makeUrl} from '@/lib/backendapi'
import CustomModal from '@/components/ModalN'


type Props = {
    type: string
}

const QRcodeReader: NextPage<Props> = ({type})  => {

    const { data: session, status } = useSession()
    const [isRequesting, setIsRequesting] = useState(false)
    const [modalMessage, setModalMessage] = useState('')
    const [modaltitle, setModalTitle] = useState('')
    const [modalType, setModalType] = useState('state')
    const [isOpen, setIsOpen] = useState(false)
    const [scanedData, setScanedData] = useState('noresult')

    function closeModal() {
        setIsOpen(false)
        setIsRequesting(false)
        setModalType('state')
    }
    
    function openModal() {
        setIsOpen(true)
    }

    function handleResult(result:any, error:any) {
        if (!!result) {
          const resultCode = result?.text
          //console.log(results)
          //console.log((scanedData==resultCode))
          //let sameData = false;
          setScanedData((state) => {
            if(state == resultCode){
                //console.log(state);
                if(modalType == 'state') {
                    //setModalType('error')
                    //setModalTitle('Không thể check mã.')
                    //setModalMessage('Mã này đã được quét, vui lòng quét một mã khác.')
                    //openModal()
                }
                //console.log('scanded the same data');
                //sameData = true;
            }else{
                console.log(state)
                setScanedData(resultCode)
                const pattern = /(\?|\&)([^=]+)\=([^&]+)/g;
                const results = resultCode.match(resultCode);
                console.log(results);
                let headers = {
                    'Content-Type': 'application/json',
                    //Authorization: `Bearer ${session?.accessToken}`,
                };
                if(!isRequesting){
                    console.log(isRequesting)
                    setIsRequesting(true);
                    fetch('https://service.vietcatholic.jp/api/event/youthday/checkin-ticket?type='+type+'&hardcode=admintration04292022&'+results,{
                        method: 'GET',
                        headers: headers
                    })
                    .then((res) => res.json())
                    .then((data) =>{
                        if (data.status=='ok') {
                            setModalTitle('Check mã thành công.')
                            setModalType('ok')
                            setModalMessage("Check mã thành công")
                            openModal()
                        } else {
                            if(modalType != 'ok') {
                                if(data.status=='P') {
                                    setModalType('warning')
                                    setModalTitle('Mã đã duyệt.')
                                    //console.log(data)
                                    setModalMessage(data.data.message)
                                    openModal()
                                }else{
                                    setModalType('error')
                                    setModalTitle('Không thể check mã.')
                                    //console.log(data)
                                    setModalMessage(data.message)
                                    openModal()
                                }
                            }
                        }
                    })
                    .catch((error)=>{
                        console.log(error)
                        setModalType('error')
                        setScanedData('noresult')
                        setModalTitle('Không thể check mã.')
                        setModalMessage(error.message)
                        openModal()
                        console.log(error)
                    })
                }
            }
            return state;
          });
          //console.log(scanedData)
        }

        if (!!error) {
          //console.info(error);
        }
    }

    return (
        <div className='rounded-xl'>
            <QrReader
                constraints={ {facingMode: 'environment' }}
                scanDelay={500}
                className='w-80 h-80 rounded-xl'
                onResult={handleResult}
            />
            <CustomModal isOpen={isOpen} type={modalType} title={modaltitle} message={modalMessage} onClose={closeModal}/>
        </div>
    )
}

export default QRcodeReader