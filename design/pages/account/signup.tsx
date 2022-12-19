import type { NextPage } from 'next'
import React, { Fragment, useState } from 'react'
import Router from 'next/router'
import Layout from '../../components/layout/Layout'
import { fetchNewUser } from '../../lib/backendapi'
import { Dialog, Transition } from '@headlessui/react'

const meta_data = {
  title:"VietCatholicJp-Signup",
  description:"Đăng ký tài khoản mới",
  ogUrl:"/account/my-account",
  ogImage:"/vietcatholicjp-bg.jpeg"
}

const SignUp: NextPage = () => {
    let [username, setUsername] = useState<string>('')
    let [email, setEmail] = useState<string>('')
    let [password, setPassword] = useState<string>('')
    let [confirm_password, setConfirmPassword] = useState<string>('')
    let [errorMessage, setErrorMessage] = useState<string>('')
    let [isOpen, setIsOpen] = useState(false)
    let [register_res, setRegisterRes] = useState('')
    let [register_status, setRegisterStatus] = useState('')

    function closeModal() {
      setIsOpen(false)
      if(register_status=='ok'){
        setPassword('')
        setConfirmPassword('')
        setEmail('')
        Router.push('/account/signin')
      }
    }
  
    function openModal() {
        setIsOpen(true)
    }

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
      ): Promise<void> => {
        event.preventDefault()
        try {
          setRegisterRes('')
          setRegisterStatus('')
          var check_input = false
          if (username.length > 5){
            if (username.includes(' ')){
              setRegisterStatus('warning')
              setRegisterRes('Tên đăng phải viết liền không có khoảng trắng.')
              openModal()
            }else{
              if (password == confirm_password){
                var passw=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
                if (password.match(passw)){
                  if (password.toLowerCase().includes(username.toLocaleLowerCase())){
                    setRegisterStatus('warning')
                    setRegisterRes('Mật khẩu không được chứa tên đăng nhập bên trong.')
                    openModal()
                    setPassword('')
                    setConfirmPassword('')
                  }else{
                    check_input = true
                  }
                }else{
                  setRegisterStatus('warning')
                  setRegisterRes('Mật khẩu phải dài từ 8 đến 15 ký tự, bao gồm ít nhất một số, chữ thường, chữ hoa và ký tự đặc biệt.')
                  openModal()
                  setPassword('')
                  setConfirmPassword('')
                }
              }else{
                check_input = false
                setRegisterStatus('warning')
                setRegisterRes('Xác nhận mật khẩu không trùng nhau')
                openModal()
                setConfirmPassword('')
              }
            }
          }else{
            setRegisterStatus('warning')
            setRegisterRes('Tên đăng nhập quá ngắn, cần phải dài hơn 5 ký tự.')
            openModal()
          }
          if(check_input) {
            const resp = await fetchNewUser(username, email.toLowerCase(), password)
            if(resp.status === 200 || resp.status === 202){
              const json = await resp.json()
              setRegisterStatus(json['status'])
              setRegisterRes(json['message'])
              openModal()
            } else {
              const json = await resp.json()
              console.log(json)
              if(json['message'].hasOwnProperty('username')){
                setRegisterRes('Tên đăng nhập này đã được đăng ký, vui lòng chọn tên khác.')
              } else if(json['message'].hasOwnProperty('email')){
                setRegisterRes('Email này đã được đăng ký, vui lòng chọn quên mật khẩu để đặt lại mật khẩu đăng nhập.')
              } else if(json['message'].hasOwnProperty('password')){
                setRegisterRes('Mật khẩu không hợp lệ, vui lòng đặt lại mật khẩu khác.')
              } else if(json['message'].hasOwnProperty('system')){
                setRegisterRes(json['message']['system'])
              }
              setRegisterStatus('error')
              openModal()
            }
          }
        } catch (error) {
          console.error(error)
          // TODO: actually parse api 400 error messages

        }
      }
  return (
    <>
      <Layout meta_data={meta_data} current_page='account'>
        <div className='relative mt-8 overflow-hidden pt-4 pb-12'>
          <img src='/viet-catholicjp-312.svg' alt='' className='absolute -top-[1rem] left-1/2 -ml-[60rem] w-[163.125rem] max-w-none sm:-ml-[67.5rem]'/>
          <div className='flex items-center justify-center relative mx-auto mt-16 w-full max-w-container grid-cols-1 sm:mt-20 sm:px-6 lg:px-8 xl:mt-32'>
            <div className='p-4 w-full max-w-sm shadow-2xl bg-white rounded-lg border border-gray-200 sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
              <div>
                  <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
                    Tạo tài khoản mới
                  </h2>
              </div>
              <form className='space-y-6 mt-4' onSubmit={handleSubmit}>
                  <div>
                      <label htmlFor='username' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Tên tài khoản đăng nhập</label>
                      <input type='text' name='username' id='username' value={username} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white' placeholder='Viết liền không khoản trắng' required/>
                  </div>
                  <div>
                      <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Địa chỉ email</label>
                      <input type='email' name='email' id='email' value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white' placeholder='name@gmail.com' required/>
                  </div>
                  <div>
                      <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Mật khẩu</label>
                      <input type='password' name='password' id='password' value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} placeholder='••••••••' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white' required/>
                  </div>
                  <div>
                      <label htmlFor='confirm_password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Xác nhận mật khẩu</label>
                      <input type='password' name='confirm_password' id='confirm_password' value={confirm_password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)} placeholder='••••••••' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white' required/>
                  </div>
                  <button type='submit' className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Tạo tài khoản</button>
              </form>
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
                            { register_status=='ok'?'Đăng ký thành công':'Đăng ký không thành công'}
                        </Dialog.Title>
                        <div className='mt-2'>
                            <p className='text-sm text-gray-500'>
                            {register_res}
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
        </div>
      </Layout>
    </>
  )
}
export default SignUp
