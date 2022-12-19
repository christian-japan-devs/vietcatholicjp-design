import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

import Layout from '../../../components/layout/Layout'
import {Event} from '../../../types/event'
import EventCard from '../../../components/card/event'
import Modal from '../../../components/modal'
import {events_samp} from '../../../types/sample_data/event'
const meta_data = {
    title:"",
    description:"",
    ogUrl:"",
    ogImage:""
}

const Mass: NextPage = () => {
    const router = useRouter()
    const { data: session, status } = useSession()
    const [events, setEvents] = useState<Event[]>(events_samp)
    const [errorMessage, setErrorMessage] = useState('')
    const [selectedEvent, setSelectedEvent] = useState('')
    const [modalTitle, setModalTitle] = useState('')
    const [modalContent, setModalContent] = useState('')
    let [isOpen, setIsOpen] = useState(false)
    let [register_res, setRegisterRes] = useState('')
    let [register_status, setRegisterStatus] = useState('')

    // Fetch content from protected route
    useEffect(()=>{
        /*fetch('/event/youth-event')
        .then((res) => res.json())
        .then((data) => {
            //setEvents(data)
        })*/

    },[])

    function closeModal() {
        setIsOpen(false)
        if(register_status=='ok'){
            router.push('/register/my-registration')
        }
        else if(register_status=='warning'){
            router.push('/account/my-account')
        }
    }
    
    function openModal() {
        setIsOpen(true)
    }

    const handleOnSubmitRegister = (event:string) => {
        if (!session) {
            signIn()
        }else{
            setSelectedEvent(event)
            const fetchData = async () => {
                let headers = {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session?.accessToken}`,
                };
                const res = await fetch('/', {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify({
                        event_id: event
                    }),
                })
                if (res.ok){
                    // if registration is successful then redirect to user's registration history and show tiket.
                    let data = await res.json()
                    setRegisterStatus('ok')
                    setRegisterRes(data.content)
                    openModal()
                    //else
                }else{
                    let data = await res.json()
                    setRegisterStatus(data.status)
                    setRegisterRes(data.content)
                    openModal()
                }
            }
            fetchData();
        }
    }

    return (
        <>
            <Layout meta_data={meta_data} current_page='register'>
                <section className='md:max-w-4xl items-center mt-12 mx-auto px-4'>
                    <div className='space-y-4 text-center'>
                        <h2 className='text-gray-800 dark:text-gray-200 text-3xl font-semibold'>
                            Đăng ký
                        </h2>
                    </div>
                    
                        {errorMessage?<h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">{errorMessage}</h2>:<></>}
                    <div className="mt-8 justify-center items-center flex flex-col md:flex-row">
                        {events.length == 0 ? 
                        <div className="mt-4"><p className="text-center mb-2 text-xl text-gray-900 dark:text-gray-400">Hiện tại không có sự kiện nào.</p></div>
                        :
                            events.map((event)=>(
                            <EventCard event={event} key={event.id} onSubmit={handleOnSubmitRegister}/>
                        ))}
                    </div>
                    <div className="flex my-4 justify-center">
                        <div className="items-center block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <p className="font-normal text-gray-400 dark:text-gray-400">Xin lưu ý, bạn cần có tài khoản cá nhân để đăng ký.</p>
                        </div>
                    </div>
                </section>
                <Modal title={modalTitle} content={modalContent} isOpen={isOpen} closeModal={closeModal}/>
            </Layout>
        </>
    )
}

export default Mass