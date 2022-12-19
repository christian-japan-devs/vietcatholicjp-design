import type { NextPage } from "next"
import React, { Fragment, useState,useEffect } from "react"
import Router from "next/router"
import Layout from "../../components/layout/Layout"
import { fetchResetPassword } from "../../lib/backendapi"
import { Dialog, Transition } from '@headlessui/react'

const meta_data = {
  title:"VietCatholicJp-Profile",
  description:"Thông tin cá nhân",
  ogUrl:"/account/my-account",
  ogImage:"/vietcatholicjp-bg.jpeg"
}

const ResetPassword: NextPage = () => {
    const [username, setUsername] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirm_password, setConfirmPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState<string>("")
    let [isOpen, setIsOpen] = useState(false)
    let [register_res, setRegisterRes] = useState('')
    let [register_status, setRegisterStatus] = useState('')

    function closeModal() {
      setIsOpen(false)
      if(register_status=="ok"){
        setPassword("")
        setConfirmPassword("")
        setEmail("")
        Router.push('/account/signin')
      }
      else if(register_status=="warning"){
        Router.push('/')
      }else if (register_status=="rerequest"){
        Router.push('/account/reset-account')
      }
    }
  
    function openModal() {
        setIsOpen(true)
    }

    useEffect(() => {
        let url_string = window.location.href
        let url = new URL(url_string)
        let timestamp = url.searchParams.get('utc')
        let secretCode = url.searchParams.get('code')
        let uid = url.searchParams.get('uid')
        if (timestamp && secretCode && uid){
          var now = new Date();
          var reqTime = new Date(timestamp)
          var req_timestamp = Date.UTC(reqTime.getUTCFullYear(),reqTime.getUTCMonth(), reqTime.getUTCDate() , 
          reqTime.getUTCHours(), reqTime.getUTCMinutes(), reqTime.getUTCSeconds(),reqTime.getUTCMilliseconds());
          var utc_timestamp = Date.UTC(now.getUTCFullYear(),now.getUTCMonth(), now.getUTCDate() , 
                now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(),now.getUTCMilliseconds());
          //console.log(req_timestamp)
          //console.log(utc_timestamp)
          let differentInminute = Math.round((utc_timestamp - req_timestamp)/60000)
          //console.log(differentInminute)
          if (differentInminute < 30 ){
            console.log("valid")
          }else{
            setRegisterStatus('rerequest')
            setRegisterRes('Thời hạn đổi mật khẩu đã hết trong vòng 30 phút, vui lòng yêu cầu lại.')
            openModal()
          }
        }else{
          setRegisterStatus('warning')
          setRegisterRes('Truy cập không hợp lệ.')
          openModal()
        }
    },)

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
      ): Promise<void> => {
        event.preventDefault()
        try {
          setRegisterRes("")
          setRegisterStatus("")
          let check_input = false
          if (password == confirm_password){
            let passw=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
            if (password.match(passw)){
              check_input = true
            }else{
              setRegisterStatus("warning")
              setRegisterRes("Mật khẩu phải dài từ 8 đến 15 ký tự, bao gồm ít nhất một số, chữ thường, chữ hoa và ký tự đặc biệt.")
              openModal()
              setPassword("")
              setConfirmPassword("")
            }
            
          }else{
            check_input = false
            setRegisterStatus("warning")
            setRegisterRes("Xác nhận mật khẩu không trùng nhau")
            openModal()
            setConfirmPassword("")
          }
          if(check_input) {
            let url_string = window.location.href
            let url = new URL(url_string)
            let secretCode = url.searchParams.get('code')
            let uid = url.searchParams.get('uid')
            if( uid && secretCode ){
              //const url = makeUrl("/api/account/reset-password")
              //console.log(url);
              const resp = await fetchResetPassword(uid?uid:"", secretCode?secretCode:"", password)
              console.log(resp)
              if(resp.status === 200 || resp.status === 202){
                const json = await resp.json()
                console.log(json)
                setRegisterStatus(json['status'])
                setRegisterRes(json['message'])
                openModal()
              } else {
                const json = await resp.json()
                console.log(json)
                if(json['message'].hasOwnProperty("password")){
                  setRegisterRes('Mật khẩu không hợp lệ, vui lòng đặt lại mật khẩu khác.')
                } else if(json['message'].hasOwnProperty("system")){
                  setRegisterRes(json['message']['system'])
                }
                setRegisterStatus("error")
                openModal()
              }
            }else{
              Router.push('/')
            }
          }
        } catch (error) {
          console.error(error)
          // TODO: actually parse api 400 error messages
          setRegisterStatus('error')
          setRegisterRes('Có lỗi xảy ra, xin thử lại sau')
          openModal()
        }
      }
  return (
    <>
      <Layout meta_data={meta_data} current_page='account'>
      <div className="relative -mt-[10.75rem] overflow-hidden pt-[5.75rem] pb-16">
        <img src="/beams-home@95.jpg" alt="" className="absolute -top-[1rem] left-1/2 -ml-[40rem] w-[163.125rem] max-w-none sm:-ml-[67.5rem]"/>
        <div className="flex items-center justify-center relative mx-auto mt-16 w-full max-w-container grid-cols-1 sm:mt-20 sm:px-6 lg:px-8 xl:mt-32">
          <div className="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div>
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                  Đổi mật khẩu mới
                </h2>
            </div>
            <form className="space-y-6 mt-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mật khẩu mới</label>
                    <input type="password" name="password" id="password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                </div>
                <div>
                    <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Xác nhận mật khẩu</label>
                    <input type="password" name="confirm_password" id="confirm_password" value={confirm_password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                </div>
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Đổi mật khẩu</button>
            </form>
          </div>
        </div>
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
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900"
                        >
                            { register_status=='ok'?'Đổi mật khẩu thành công':'Đổi mật khẩu không thành công'}
                        </Dialog.Title>
                        <div className="mt-2">
                            <p className="text-sm text-gray-500">
                            {register_res}
                            </p>
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
        </div>
      </Layout>
    </>
  )
}
export default ResetPassword
