
import React, { Fragment,useState, useEffect } from 'react'
import Layout from '@/components/layout/Layout'
import { Dialog, Transition } from '@headlessui/react'
import SelectPrefectures from '@/components/select/prefectures'
import SelectRegions from '@/components/select/regions'
import {MetaProps} from '@/components/layout/meta'
import {RegionType} from '@/types/church'
import {ContactFather} from '@/types/contact'
import {makeUrl} from '@/lib/backendapi'

const meta_data:MetaProps = {
  title:"Thông tin liên lạc",
  description:"Thông tin địa chỉ về các cộng đoàn, nhóm giới trẻ tại Nhật",
  ogUrl:"",
  ogImage:""
}

export default function Index() {
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [isOpen, setIsOpen] = useState(false)
  const [selectedFather, setSelectedFather] = useState<ContactFather>()
  const [fatherRegions, setFatherRegions] = useState<RegionType[]>([])

  function closeModal() {
    setIsOpen(false)
  }
  function openModal(father:ContactFather) {
    setSelectedFather(father)
    setIsOpen(true)
  }

  useEffect(()=>{
    let headers = {
      'Content-Type': 'application/json',
    };
    let request_endpoint = makeUrl("/api/father/?type=all")
    fetch(request_endpoint,{
      method: 'GET',
      headers: headers
    })
    .then((res) => res.json())
    .then((data) => {
      if(data.status === 'ok'){
        setFatherRegions(data.regions)
      }
    })
  },[])

  const selectRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedRegion(value);
  }

  return (
    <Layout meta_data={meta_data} current_page='contact'>
      <section className="max-w-screen-xl md:flex md:flex-col md:items-center my-6 mx-auto px-4">
        <div className="space-y-4 mb-8 text-center">
            <h2 className="text-gray-900  dark:text-gray-200 text-2xl md:text-4xl font-semibold">
              Địa chỉ các nhà Dòng tại Nhật.
            </h2>
            <h3 className="text-gray-600 mb-4 dark:text-gray-200 text-md">
             Bấm chọn để xem thông tin chi tiết.
            </h3>
        </div>
        <div className="max-w-4xl md:justify-centerr">
          <div className="flex gap-2">
            <div className="form-control w-full min-w-sm">
                <SelectRegions onChange={selectRegionChange}/>
            </div>
          </div>
          {fatherRegions?.map((region,idx)=>(
            <div key={idx} className="overflow-x-auto mt-8 relative dark:bg-slate-900 dark:border rounded shadow-md sm:rounded-lg">
            <h3 className='text-gray-800 my-2 text-center text-2xl dark:text-gray-200 font-semibold'>Vùng {region.name}-{region.kanji}</h3>
            <div className="border-b border-gray-300"></div>
            {region.region_province?.map((province,idx1)=>(
              province.father_province?.length==0?<></>:
              <div key={idx1}>
                <h4 className='text-gray-800 my-2 text-center text-xl dark:text-gray-200 font-semibold'>{province.name}-{province.kanji}</h4>
                <table className="w-full mt-2 text-sm text-left text-gray-800 dark:text-gray-200">
                  <thead className="text-xs text-gray-900 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                          <th scope="col" className="py-2 px-3 sm:py-4 sm:px-6">
                              ******
                          </th>
                          <th scope="col" className="py-2 px-3 sm:py-4 sm:px-6">
                              Cha
                          </th>
                          <th scope="col" className="py-2 px-3 sm:py-4 sm:px-6">
                              Phone
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                    {province.father_province?.map((father,idx)=>(
                      <tr key={idx} onClick={()=>openModal(father)} className="py-bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td className="py-2 px-3 sm:py-4 sm:px-6">
                            <div className="flex-shrink-0">
                              <img className="w-8 h-8 rounded-full" src={father.user.image} alt={father.user.full_name}/>
                            </div>
                          </td>
                          <td className="py-2 px-3 sm:py-4 sm:px-6">
                              {father.user.full_name}
                          </td>
                          <td className="py-2 px-3 sm:py-4 sm:px-6">
                            {father.phone_number}
                          </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
          ))}
        </div>
      </section>
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
                        
                        <div className="flex flex-col items-center">
                          <div className="">
                            <img className="p-1 mt-4 w-48 h-48 lg:w-64 lg:h-64 drop-shadow-xl rounded-full ring-2  ring-gray-300 dark:ring-gray-500" src={selectedFather?.user.image} alt={selectedFather?.user.full_name}/>
                          </div>
                          <h2 className="text-center mt-4">
                          {selectedFather?.user.full_name}</h2>
                          <div className="mt-4 flex space-x-2">
                            <a className="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href={"mailto:"+selectedFather?.user.email}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-8 w-8">
                                <path d="M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z"></path><path d="m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z"></path>
                              </svg>
                            </a>
                            <a href={selectedFather?.facebook} target="_blank" rel="noopener noreferrer">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400">
                              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                              </svg>
                            </a>
                          </div>
                          <a href={"tel:"+selectedFather?.phone_number} className="flex flex-row space-x-2">
                              <span>{selectedFather?.phone_number}</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.01192 5.6023C1.83312 3.50023 3.61574 2 5.51161 2H7.88594C9.01915 2 10.0411 2.68182 10.4762 3.72819L11.6459 6.54152C12.0464 7.50457 11.8795 8.61027 11.2126 9.41219L9.96021 10.9182C10.7683 12.1458 11.7862 13.2527 12.9455 14.169L14.5827 12.8019C15.386 12.1311 16.4959 11.9632 17.4616 12.3664L20.2638 13.5364C21.3081 13.9725 21.9881 14.9933 21.9881 16.125C21.9881 16.5154 21.9911 16.906 21.9941 17.3009L21.9941 17.3025C21.997 17.6956 22 18.093 22 18.4913C22 20.387 20.4999 22.1699 18.3975 21.9904C9.85772 21.2613 2.74005 14.1628 2.01192 5.6023ZM5.51161 4C4.56806 4 3.94287 4.70566 4.00472 5.43279C4.65016 13.0211 10.9966 19.3513 18.5676 19.9977C19.2944 20.0597 20 19.4349 20 18.4913C20 18.1013 19.9971 17.7109 19.9941 17.316L19.9941 17.3135C19.9911 16.9206 19.9881 16.5234 19.9881 16.125C19.9881 15.8002 19.7929 15.5072 19.4932 15.382L16.691 14.212C16.4138 14.0963 16.0952 14.1444 15.8646 14.337L13.0326 16.7019L12.4051 16.2603C10.5707 14.9694 8.9987 13.2704 7.86741 11.3384L7.51296 10.733L9.67483 8.13339C9.86626 7.90321 9.91417 7.58583 9.79923 7.30939L8.62943 4.49606C8.50455 4.19571 8.21122 4 7.88594 4H5.51161Z"/>
                              </svg>
                            </a>
                          <div className="text-sm my-2 text-gray-900 text-center dark:text-white">{selectedFather?.address}</div>
                        </div>
                        <button
                            type="button"
                            className="rounded-md border border-rose-500 px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 hover:bg-rose-500"
                            onClick={closeModal}
                            >
                            Đóng
                        </button>
                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
                </Dialog>
            </Transition>
    </Layout>
  )
}
