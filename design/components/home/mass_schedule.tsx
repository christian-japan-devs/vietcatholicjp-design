import type { NextPage } from 'next';
import Link from 'next/link'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import {href_pv_gio_le} from '../../lib/constants'
import {formatDate} from '../../lib/helper'
import {MassDateSchedule,MassTimeSchedule} from '../../types/shedule'


type Props = {
  schedule: MassDateSchedule
}

const MassSchedule: NextPage<Props> = ({schedule}) => {

  let [isOpen, setIsOpen] = useState(false)
  const [massTime, setMassTime] = useState<MassTimeSchedule>()

  function closeModal() {
    setIsOpen(false)
  }
  function openModal(mass:MassTimeSchedule) {
    setMassTime(mass)
    setIsOpen(true)
  }

  return(
    <div className="relative px-2 lg:px-8">
    <div className="max-w-5xl lg:min-w-5xl bg-white border p-4 border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 md:flex md:flex-col md:items-center my-6 mx-auto px-4">
      <div className="space-y-4 mb-8 justify-center text-center">
          <h1 className="text-2xl font-serif font-bold tracking-tight sm:text-center sm:text-4xl">
            {schedule.title}
          </h1>
          <h3 className='text-gray-800 mt-2 text-center text-2xl sm:text-3xl dark:text-gray-200 font-semibold'>Ngày {formatDate(new Date(schedule.date),0,"dd-mm-yyyy")}</h3>
      </div>
      <div className="max-w-5xl lg:min-w-5xl md:justify-center">
        <div className="flex flex-col items-center">
          <div className="justify-center">
            <Link href={href_pv_gio_le} legacyBehavior>
              <a className="inline-block rounded-lg px-2 py-1 text-sm leading-7 text-gray-800 dark:text-gray-200 hover:text-gray-600 hover:bg-gray-100 ring-1 ring-gray-200 hover:ring-gray-200">
                Xem đầy đủ
                <span className="text-gray-800 dark:text-gray-200" aria-hidden="true">&rarr;</span>
              </a>
            </Link>
        </div>
        </div>
            <div className="overflow-x-auto mt-8 relative dark:bg-slate-900 dark:border rounded shadow-md sm:rounded-lg">
              <table className="w-full min-w-5xl max-w-screen-lg mt-2 text-sm text-left text-gray-700 dark:text-gray-200">
                  <thead className="text-xs text-gray-900 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                          <th scope="col" className="py-3 px-6">
                              Giờ lễ
                          </th>
                          <th scope="col" className="py-3 px-6">
                              Cha
                          </th>
                          <th scope="col" className="py-3 px-6">
                              Nhà thờ
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Tỉnh
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                    {schedule.time_schedule.map((mass,idx)=>(
                      <tr key={idx} onClick={()=>openModal(mass)} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td className="py-4 px-6">
                            {mass.time}
                          </td>
                          <td className="py-4 px-6">
                            {mass.father.user.full_name}
                          </td>
                          <td className="py-4 px-6">
                          <a href={mass.church.google_map_link} className="hover:text-gray-500" target="_blank">{mass.church.name}</a>
                          </td>
                          <td className="py-4 px-6">
                            {mass.province.name}
                          </td>
                      </tr>
                    ))}
                  </tbody>
              </table>
            </div>
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
                      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-700 p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                          as="h3"
                          className="text-lg sm:text-xl font-medium text-center leading-6 text-gray-900 dark:text-gray-200"
                      >
                        {schedule.title}
                      </Dialog.Title>
                      <div className="mt-2">
                        <div className="text-gray-800 mt-2 text-center text-md sm:text-lg dark:text-gray-200">Ngày {formatDate(new Date(schedule.date),0,"dd-mm-yyyy")}</div>
                        <div className="text-gray-800 dark:text-gray-200 text-md sm:text-lg font-semibold text-center">{massTime?.time}</div>
                        <div className="mt-2 flex items-center space-x-4">
                          <div className="flex-shrink-0">
                              <img className="w-8 h-8 rounded-full" src={massTime?.father.user.image} alt={massTime?.father.user.full_name}/>
                          </div>
                          <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                              Cha {massTime?.father.user.saint_name} {massTime?.father.user.full_name}
                              </p>
                          </div>
                        </div>
                        <div className="mt-4 flex space-x-2">
                          <a href={massTime?.church.google_map_link} target="_blank"><div className="badge badge-secondary">Nhà thờ {massTime?.church.name}</div></a>
                          <div className="badge badge-primary">Tỉnh {massTime?.province.name}</div>
                        </div>
                        <div className="text-sm my-2 text-gray-900 dark:text-white">{massTime?.church.address}</div>
                      </div>

                      <div className="mt-4 flex space-x-2">
                          <a
                          href={massTime?.church.google_map_link}
                          target="_blank"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200"
                          >
                          Chỉ đường
                          </a>
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
    </div>
  )
}

export default MassSchedule