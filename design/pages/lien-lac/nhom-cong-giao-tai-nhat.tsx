
import React, { Fragment,useState, useEffect } from 'react'
import Layout from '@/components/layout/Layout'
import { Dialog, Transition } from '@headlessui/react'
import SelectPrefectures from '@/components/select/prefectures'
import SelectRegions from '@/components/select/regions'
import {MetaProps} from '@/components/layout/meta'
import {RegionType} from '@/types/church'
import {GroupsType} from '@/types/group'
import {makeUrl} from '@/lib/backendapi'
import GroupPreviewCard from '@/components/card/groupPreview'

const meta_data:MetaProps = {
  title:"Thông tin liên lạc",
  description:"Thông tin địa chỉ về các cộng đoàn, nhóm giới trẻ tại Nhật",
  ogUrl:"",
  ogImage:""
}

export default function Index() {
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [isOpen, setIsOpen] = useState(false)
  const [selectedGroup, setSelectedGroup] = useState<GroupsType>()
  const [communiyRegions, setCommunityRegions] = useState<RegionType[]>([])
  const [selectedPerfecture, setSelectedPerfecture] = useState('all')

  function closeModal() {
    setIsOpen(false)
  }
  function openModal(group:GroupsType) {
    setSelectedGroup(group)
    setIsOpen(true)
  }

  useEffect(()=>{
    let headers = {
      'Content-Type': 'application/json',
    };
    let request_endpoint = makeUrl("/api/community/?type=all")
    fetch(request_endpoint,{
      method: 'GET',
      headers: headers
    })
    .then((res) => res.json())
    .then((data) => {
      if(data.status === 'ok'){
        setCommunityRegions(data.communities)
      }
    })
  },[])

  const selectRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedRegion(value);
  }

  const selectPerfectureChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedPerfecture(value);
  };

  return (
    <Layout meta_data={meta_data} current_page='contact'>
      <section className="max-w-screen-xl md:flex md:flex-col md:items-center my-6 mx-auto px-4">
        <div className="space-y-4 mb-8 text-center">
            <h2 className="text-gray-900  dark:text-gray-200 text-2xl md:text-4xl font-semibold">
              Địa chỉ các nhóm cộng đoàn đang sinh hoạt tại Nhật.
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
          {communiyRegions?.map((region,idx)=>(
            <div key={idx} className="overflow-x-auto mt-8 relative dark:bg-slate-900 dark:border rounded shadow-md sm:rounded-lg">
              <div className="my-12 sm:flex sm:flex-col sm:items-center">
                <div className="sm:justify-center not-prose relative bg-gradient-to-r from-teal-400 to-cyan-400 md:max-w-3xl lg:max-w-5xl sm:rounded-xl overflow-hidden dark:bg-slate-800/25">
                <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" ></div>
                <h1 className="text-3xl my-4 text-center font-serif tracking-tight sm:text-center sm:text-5xl">
                    {region.name+"-"+region.kanji}
                </h1>
                <div className="relative rounded-xl overflow-auto">
                    <div className="flex gap-2 mx-4 md:mx-12 lg:mx-24">
                        <div className="form-control w-full min-w-xs">
                            <SelectPrefectures selectedRegion={selectedRegion} onChange={selectPerfectureChange}/>
                        </div>
                    </div>
                    <div className="my-4 ms:my-12 relative w-full flex gap-6 snap-x overflow-x-auto pb-8">
                        <div className="snap-center shrink-0">
                            <div className="shrink-0 w-2 sm:w-24"></div>
                        </div>
                        {region.region_province?.map((province,idx1)=>(
                          province.community_province?.length==0?<></>:
                          province.community_province?.map((group,idx)=>(
                            <GroupPreviewCard key={idx} group_preview={group} />
                          ))
                        ))}
                        <div className="snap-center shrink-0">
                            <div className="shrink-0 w-24s sm:w-48"></div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
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
                            <img className="p-1 mt-4 w-48 h-48 lg:w-64 lg:h-64 drop-shadow-xl rounded-md ring-2  ring-gray-300 dark:ring-gray-500" src={selectedGroup?.image} alt={selectedGroup?.name}/>
                          </div>
                          <h2 className="text-center mt-4">
                          {selectedGroup?.name}</h2>
                          <div className="mt-4 flex space-x-2">
                            <a className="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href={"mailto:"+selectedGroup?.email}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-8 w-8">
                                <path d="M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z"></path><path d="m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z"></path>
                              </svg>
                            </a>
                            <a href={selectedGroup?.url} target="_blank" rel="noopener noreferrer">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400">
                              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                              </svg>
                            </a>
                          </div>
                          <div className="text-sm my-2 text-gray-900 text-center dark:text-white">{selectedGroup?.address}</div>
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
