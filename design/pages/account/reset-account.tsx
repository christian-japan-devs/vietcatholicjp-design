import type { NextPage } from 'next'
import React, { useState, Fragment } from 'react'
import Router from 'next/router'
import Layout from '../../components/layout/Layout'
import { resetAccount } from '../../lib/backendapi'
import { Dialog, Transition } from '@headlessui/react'
import {MetaProps} from '../../components/layout/meta'

const meta_data:MetaProps = {
  title:"Giáo đoàn công giáo Việt Nam tại Nhật",
  description:"Thông tin cá nhân",
  ogUrl:"/account/my-account",
  ogImage:"/vietcatholicjp-bg.jpeg"
}

const ResetAccount: NextPage = ({}) => {
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState('')
  let [isOpen, setIsOpen] = useState(false)
  let [request_status, setRequestStatus] = useState('')

  function closeModal() {
    setIsOpen(false)
    if(request_status=='ok'){
      Router.push('/')
    }
  }

  function openModal() {
      setIsOpen(true)
  }

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault()
    const resp = await resetAccount(email)
    if(resp.status === 200 || resp.status === 202){
        const json = await resp.json()
        setRequestStatus(json['status'])
        setMessage(json['message'])
        openModal()
    } else {
        const json = await resp.json()
        //console.log(json)
        setRequestStatus('error')
        setMessage(json['message'])
        openModal()
    }
  }

  return (
    <>
        <Layout meta_data={meta_data} current_page='account'>
        <div className='relative -mt-[10.75rem] overflow-hidden pt-[5.75rem] pb-16'>
            <img src='/beams-home@95.jpg' alt='' className='absolute -top-[1rem] left-1/2 -ml-[40rem] w-[163.125rem] max-w-none sm:-ml-[67.5rem]'/>
            <div className='flex items-center justify-center relative mx-auto mt-16 w-full max-w-container grid-cols-1 sm:mt-20 sm:px-6 lg:px-8 xl:mt-32'>
            <div className='p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
                <div>
                    <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
                    Đổi mật khẩu
                    </h2>
                </div>
                <form className='space-y-6 mt-4' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Địa chỉ email được dùng để đăng ký</label>
                        <input type='email' name='email' id='email' value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white' placeholder='name@gmail.com' required/>
                    </div>
                    <button type='submit' className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Gửi yêu cầu</button>
                </form>
            </div>
            </div>
        </div>
        <div>
          <Transition appear show={isOpen} as={Fragment}>
                <Dialog as='div' className='relative z-10' onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0 scale-95'
                        enterTo='opacity-100 scale-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100 scale-100'
                        leaveTo='opacity-0 scale-95'
                    >
                        <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                        <Dialog.Title
                            as='h3'
                            className='text-lg font-medium leading-6 text-gray-900'
                        >
                            { request_status=='ok'?'Yêu cầu thành công':'Yêu cầu không thành công'}
                        </Dialog.Title>
                        <div className='mt-2'>
                            <p className='text-sm text-gray-500'>
                            {message}
                            </p>
                        </div>

                        <div className='mt-4'>
                            <button
                            type='button'
                            className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                            onClick={closeModal}
                            >
                            OK
                            </button>
                        </div>
                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
                </Dialog>
            </Transition>
          </div>
        </Layout>
      </>
  )
}

export default ResetAccount