import type { NextPage } from 'next'
import React, { useState, useEffect,Fragment } from 'react'
import Layout from '../../components/layout/Layout'
import { Dialog, Transition } from '@headlessui/react'
import Router from "next/router"
import {makeUrl} from '../../lib/backendapi'
import {MetaProps} from '../../components/layout/meta'

const meta_data:MetaProps = {
  title:"VietCatholicJp-Confirm account",
  description:"Xác thực tài khoản",
  ogUrl:"/account/confirm",
  ogImage:"/vietcatholicjp-bg.jpeg"
}

const Welcomeuser: NextPage = ({}) => {
  const [username, setUsername] = useState('')
  const [message, setMessage] = useState('')
  let [isOpen, setIsOpen] = useState(false)
  let [confirm_status, setConfirmStatus] = useState('')

  function closeModal() {
    setIsOpen(false)
    if(confirm_status=="ok"){
      Router.push('/account/signin')
    }else{
      Router.push('/')
    }
  }

  function openModal() {
      setIsOpen(true)
  }

  useEffect(()=>{
    let headers = {
      'Content-Type': 'application/json',
    }
    let url_string = window.location.href
    let url = new URL(url_string)
    let secretCode = url.searchParams.get('code')
    let uid = url.searchParams.get('uid')
    fetch(makeUrl("/api/account/confirm"),{
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
          uid: uid,
          code: secretCode
      }),})
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if(data.status=='ok'){
          setUsername('Chào mừng '+data.data.username)
          setMessage(data.message)
          setConfirmStatus('ok')
          openModal()
        }else{
          setUsername('Không thể xác nhận tài khoản')
          setMessage('Không thể xác nhận tài khoản với email của bạn, vui lòng liên hệ quản trị viên qua email trungtamanviet@gmail.com.')
        }
    })
  },[])

  return (
    <>
        <Layout meta_data={meta_data} current_page='home'>
          <div>
            <Transition appear show={isOpen} as={Fragment}>
                  <Dialog as="div" className="relative z-10" onClose={closeModal}>
                  <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                  >
                      <div className="fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <div className="fixed inset-0 overflow-y-auto">
                      <div className="flex min-h-full items-center justify-center p-4 text-center">
                      <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                      >
                          <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                          <Dialog.Title
                              as="h2"
                              className={"text-lg font-medium leading-6 "+(confirm_status=='ok'?'text-blue-800':'text-red-600')}
                          >
                              { confirm_status=='ok'?'Xác nhận thành công':'Xác nhận không thành công'}
                          </Dialog.Title>
                          <div className="mt-2">
                            <div className="text-center px-8 my-8">
                              <h3 className="font-cal text-xl md:text-2xl font-bold tracking-wide truncate">{username}</h3>
                              <span className="text-md text-gray-600 dark:text-gray-400">{message}</span>
                            </div>
                          </div>

                          <div className="mt-4">
                              <button
                              type="button"
                              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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

/*
Welcomeuser.getInitialProps = async ({query}) => {
    const {uid,code} = query
    console.log(uid)
    console.log(code)
    if (uid != null && code != null){
    console.log("send request to backend")
    const res = await requestConfirm(uid, code)
        return {
            username: res.data.username,
            token: res.data.token,
            message:res.message
        }
    }
    return {
        username: "",
        token: "",
        message: ""
    }
}*/

export default Welcomeuser