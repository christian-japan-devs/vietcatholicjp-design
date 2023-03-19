import type { NextPage } from 'next'
import React, { Fragment, useState } from 'react'
import Router from 'next/router'
import Layout from '@/components/layout/Layout'
import { getMyTicket } from '@/lib/backendapi'
import { Dialog, Transition } from '@headlessui/react'
import TicketCard from '@/components/card/ticket'
import {Ticket} from '@/types/event'

const meta_data = {
  title:"Đại hội giới trẻ lần II tại Nhật",
  description:"Lấy vé tham dự Đại Hội",
  ogUrl:"/gioi-tre/dai-hoi",
  ogImage:"/vietcatholicjp-bg.jpeg"
}

const SignUp: NextPage = () => {
    let [my_code, setMyCode] = useState<string>('')
    let [payment_code, setPaymentCode] = useState<string>('')
    let [email, setEmail] = useState<string>('')
    let [tickets, setTickets] = useState<Ticket[]>([])
    let [errorMessage, setErrorMessage] = useState<string>('')
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
        setIsOpen(true)
    }

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
      ): Promise<void> => {
        event.preventDefault()
        try {
          if (payment_code.length > 5 || payment_code.length < 5 || payment_code.includes(' ')){
              setErrorMessage('Mã thanh phải gồm đúng 5 ký tự.')
              openModal()
          }else{
            const resp = await getMyTicket(payment_code.toUpperCase(), email.toLowerCase())
            if(resp.status === 200 || resp.status === 202){
              const json = await resp.json()
              if (json.status === 'error'){
                setEmail("")
                setErrorMessage("Mã hoặc email không đúng, vui lòng nhập lại")
                openModal()
              }else{
                let tickets = json.tickets
                if (tickets[0].status === 'NP'){
                  setErrorMessage("Mã này chưa thực hiện chuyển khoản hoặc chưa được xác nhận chuyển khoản thành công, vui lòng liên hệ trực tiếp tới nhóm giới trẻ.")
                  openModal()
                }else{
                  setErrorMessage("Cảm ơn bạn, xin bạn vui lòng chụp màn hình lại vé của bạn để có thẻ checkin vào đại hội.")
                  openModal()
                  setTickets(tickets)
                }
                setPaymentCode("")
                setEmail("")
              }
            } else {
              const json = await resp.json()
              console.log(json)
              setErrorMessage(json.message)
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
          <div className='flex items-center justify-center relative mx-auto mt-4 w-full max-w-container grid-cols-1 sm:mt-12 sm:px-6 lg:px-8 xl:mt-24'>
            <div className='p-4 mx-2 w-fuil max-w-sm shadow-2xl bg-white rounded-lg border border-gray-200 sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
              <div className="flex items-center">
                  <img src="/LogoFor_Short.png" className="mr-3 h-24 sm:h-32" alt="Viet Catholic Japan" />
                  <h2 className='text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200'>
                    Lấy vé tham dự
                  </h2>
              </div>
              <form className='space-y-6 mt-4' onSubmit={handleSubmit}>
                  <div>
                      <label htmlFor='username' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Mã thanh toán</label>
                      <input type='text' name='username' id='username' value={payment_code} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPaymentCode(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white' placeholder='Mã người đại diện thanh toán' required/>
                  </div>
                  <div>
                      <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Email của người thanh toán</label>
                      <input type='email' name='email' id='email' value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white' placeholder='abc@gmail.com' required/>
                  </div>
                  <button type='submit' className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Lấy vé</button>
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
                        <div className='mt-2'>
                            <p className='text-sm text-gray-500'>
                            {errorMessage}
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
        <section className="max-w-screen-xl items-center sm:flex sm:flex-col pb-4 mx-auto px-4">
          <div className='items-center space-y-4'>
            { tickets.length == 0 ? <></>:
            tickets.map((ticket)=>(
              <TicketCard ticket={ticket}/>
            ))}
          </div>
        </section>
      </Layout>
    </>
  )
}
export default SignUp
