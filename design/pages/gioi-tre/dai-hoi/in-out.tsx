import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '@/components/layout/Layout'
import React, { useState, useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'
import Router from 'next/router'
import QRcodeReader from '@/components/qrcodeReader'
import CustomModal from '@/components/ModalN'
import {makeUrl} from '@/lib/backendapi'

const meta_data = {
    title:"",
    description:"",
    ogUrl:"",
    ogImage:""
}

const Checkin : NextPage = () => {
    //const { data: session, status } = useSession()
    const [isLoading, setLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    //const [isRequesting, setIsRequesting] = useState(false)
    const [modalMessage, setModalMessage] = useState('')
    const [modaltitle, setModalTitle] = useState('')
    const [modalType, setModalType] = useState('')
    //const [scanedData, setScanedData] = useState('noresult')
    const [startScanning, setStartScanning] = useState(false)

    function closeModal() {
        setIsOpen(false)
        //setIsRequesting(false)
        setModalType('')
    }
    
    function openModal() {
        setIsOpen(true)
    }

    /*
    useEffect(() => {
        //console.log(status)
        if (status=='loading') {
            setLoading(true)
        }
        if (status=='authenticated') {
            let headers = {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${session?.accessToken}`,
            }
            fetch(makeUrl('/api/account/profile'),{
                method: 'GET',
                headers: headers
                })
                .then((res) => res.json())
                .then((data) => {
                    if(data['status']=='ok'){
                        setProfile(data.data.profile)
                        if (!data.data.profile.profile_user.is_staff){
                            Router.push('/account/signin')
                        }
                        //console.log(profile)
                    }else{
                        setModalTitle('Không thể truy cập')
                        setModalType('error')
                        setModalMessage(data['message'])
                        openModal()
                    }
                })
                .catch((error) => {
                    //console.log(profile_full_name)
                    //console.error('Error:', error);
                });
            setLoading(false)
        }
    }, [session])
    */
    /*
    function handleResult(result:any, error:any) {
        if (!!result) {
          const resultCode = result?.text
          //console.log(results)
          //console.log((scanedData==resultCode))
          //let sameData = false;
          setScanedData((state) => {
            if(state == resultCode){
                //console.log(state);
                if(modalType == '') {
                    setModalType('error')
                    setModalTitle('Không thể check mã.')
                    setModalMessage('Mã này đã được quét, vui lòng quét một mã khác.')
                    openModal()
                }
                console.log('scanded the same data');
                //sameData = true;
            }else{
                console.log(state)
                setScanedData(resultCode)
                const pattern = /(\?|\&)([^=]+)\=([^&]+)/g;
                const results = resultCode.match(pattern);
                console.log('New request');
                let headers = {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session?.accessToken}`,
                };
                if(!isRequesting){
                    console.log(isRequesting)
                    setIsRequesting(true);
                    fetch(resultCode,{
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
                        } else{
                            if(modalType == '') {
                                if(data.status=='P') {
                                    setModalType('warning')
                                    setModalTitle('Mã đã duyệt.')
                                    console.log(data)
                                    setModalMessage(data.data.message)
                                    openModal()
                                }else{
                                    setModalType('error')
                                    setModalTitle('Không thể check mã.')
                                    console.log(data)
                                    setModalMessage(data.data.message)
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
    */
  return (
    <>
         <Layout meta_data={meta_data} current_page='register'>
            <section className="max-w-3xl mt-24 mx-auto px-4">
                <div className="space-y-4 text-center">
                    <h2 className="text-gray-900 text-3xl font-semibold">
                        Kiểm tra người ra vào ĐH.
                    </h2>
                    <h3 className="text-gray-600 text-xl font-semibold">
                        ĐẠI HỘI GIỚI TRẺ CÔNG GIÁO VIỆT NAM TẠI NHẬT LẦN II
                    </h3>
                </div>
                <div className="flex flex-col mb-48 my-8 items-center">
                    <div className=" max-h-80 max-w-full rounded-xl ">
                        <div className="flex flex-col py-2 pinout-full item-center sm:mt-2 bg-gradient-to-r border-gray-100 from-cyan-500 to-blue-500 rounded-xl shadow-lg">
                            {startScanning?<QRcodeReader type={'inout'} />:<></>}
                            <button
                                type='button'
                                className={'justify-center min-w-48 max-w-48 rounded-md border my-2 border-transparent px-4 py-2 text-sm font-medium text-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 '+(startScanning?'bg-red-500 hover:bg-blue-800':'bg-cyan-600 hover:bg-cyan-400')}
                                onClick={()=> setStartScanning(!startScanning)}
                                >
                            {startScanning?'Dừng quét':'Quét mã'}
                            </button>
                    </div>
                    </div>
                </div>
                <div>
                <CustomModal isOpen={isOpen} type={modalType} title={modaltitle} message={modalMessage} onClose={closeModal}/>
                </div>
            </section>
        </Layout>
    </>
  )
}

export default Checkin