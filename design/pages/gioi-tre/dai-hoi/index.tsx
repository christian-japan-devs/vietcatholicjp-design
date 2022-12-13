import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Disclosure from '../../../components/Disclosure'
import Layout from '../../../components/layout/Layout'

const meta_data = {
    title:"",
    description:"string",
    ogUrl:"",
    ogImage:""
}

export default function Event() {

  return (
    <Layout meta_data={meta_data} current_page='comunity'>
        <section className="max-w-screen-xl items-center sm:flex sm:flex-col pb-4 mx-auto px-4">
            <div className="flex my-4 shadow-md flex-col space-y-4 w-full max-w-3xl rounded-xl items-center py-4 px-2 sm:px-4 bg-gradient-to-b to-pink-500 from-sky-500 bg-gray-700y-400 dark:to-gray-700 dark:from-stone-900">
                <img className="p-1 mt-4 w-48 h-48 lg:w-64 lg:h-64 drop-shadow-xl rounded-full ring-2  ring-gray-300 dark:ring-gray-500" src="/youth_event/youth-logo-2.jpg" alt="Đại hội giới trẻ tại Nhật lần II"/>
                <div className="flex flex-row space-x-2">
                    <button className="text-white bg-cyan-600 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300  rounded-lg text-sm w-full sm:w-auto px-2 py-2 text-center dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:focus:ring-cyan-700">Đăng ký</button>
                    <a target="_blank" rel="noreferrer" href="https://goo.gl/maps/C8aaRLZ1MUdTTb127" className="inline-flex w-full items-center px-2 py-2 text-sm text-center text-white bg-slate-400 backdrop-blur-md bg-white/20 rounded-lg hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">
                        Địa chỉ
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
            <div className="w-full max-w-3xl shadow-md rounded-xl items-center py-4 px-2 sm:px-4 bg-gradient-to-b to-pink-600 from-sky-500 bg-gray-700y-400 dark:to-gray-700 dark:from-stone-900">
                <h2 className="text-gray-100 text-center my-4 dark:text-gray-200 text-2xl lg:text-4xl font-semibold">
                        CHƯƠNG TRÌNH ĐẠI HỘI
                </h2>
                <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                        <Tab className="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 bg-white shadow">NGÀY 1</Tab>
                        <Tab className="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 hover:bg-white/[0.12] hover:text-white">NGÀY 2</Tab>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel>
                            <div className='mt-8 pt-4 px-4 backdrop-blur-md bg-white/30 rounded-box'>
                                <h2 className="text-gray-100 mb-4 text-center dark:text-gray-200 text-2xl font-semibold">thứ năm 04-05-2023
                                </h2>
                                <ol className="relative border-l border-gray-200 dark:border-gray-800">                  
                                    <li className="mb-6 ml-4">
                                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-800"></div>
                                        <time className="text-lg font-normal text-gray-100 dark:text-gray-200">09:00 - 10:00</time>
                                        <Disclosure className="mt-4" title="Đón tiếp, ghi danh" content="Đón tiếp, ghi danh"/>
                                    </li>
                                    <li className="mb-6 ml-4">
                                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-800"></div>
                                        <time className="text-md font-normal text-gray-100 dark:text-gray-200">10:00 - 10:45</time>
                                        <Disclosure className="mt-4" title="Sinh hoat chung" content="Sinh hoat chung"/>
                                    </li>
                                    <li className="mb-6 ml-4">
                                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-800"></div>
                                        <time className="text-md font-normal text-gray-100 dark:text-gray-200">11:00 - 12:30</time>
                                        <Disclosure className="mt-4" title="Com trưa- Sinh hoạt nhóm" content="Com trua- Sinh hoat nhóm"/>
                                    </li>
                                    <li className="mb-6 ml-4">
                                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-800"></div>
                                        <time className="text-md font-normal text-gray-100 dark:text-gray-200">12:45 - 13:45</time>
                                        <Disclosure className="mt-4" title="Khai mạc Đại Hội" content="Đón tiếp, ghi danh"/>
                                    </li>
                                    <li className="mb-6 ml-4">
                                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-800"></div>
                                        <time className="text-md font-normal text-gray-100 dark:text-gray-200">14:00 - 15:30</time>
                                        <Disclosure className="mt-4" title="Trò chơi, thi đua" content="Đón tiếp, ghi danh"/>
                                    </li>
                                    <li className="mb-6 ml-4">
                                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-800"></div>
                                        <time className="text-md font-normal text-gray-100 dark:text-gray-200">15:30 - 17:30</time>
                                        <Disclosure className="mt-4" title="Thi DOCAT" content="Hướng dẫn thi DOCAT"/>
                                    </li>
                                    <li className="mb-6 ml-4">
                                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-800"></div>
                                        <time className="text-md font-normal text-gray-100 dark:text-gray-200">17:30 - 18:00</time>
                                        <Disclosure className="mt-4" title="Nghỉ ngơi - ăn tối" content="Hướng dẫn lấy đồ ăn tối"/>
                                    </li>
                                    <li className="mb-6 ml-4">
                                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-800"></div>
                                        <time className="text-md font-normal text-gray-100 dark:text-gray-200">18:30 - 21:30</time>
                                        <Disclosure className="mt-4" title="Diễn nguyện - Văn nghệ" content="Diễn nguyện - Văn nghệ"/>
                                    </li>
                                    <li className="mb-6 ml-4">
                                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-800"></div>
                                        <time className="text-md font-normal text-gray-100 dark:text-gray-200">21:30 - 22:30</time>
                                        <Disclosure className="mt-4" title="Tĩnh nguyện" content="Tĩnh nguyện"/>
                                    </li>
                                    <li className="mb-6 ml-4">
                                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-800"></div>
                                        <time className="text-md font-normal text-gray-100 dark:text-gray-200">22:30 - </time>
                                        <Disclosure className="mt-4" title="Nghỉ đêm" content="Hướng dẫn nghỉ đêm"/>
                                    </li>
                                </ol>
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div className='mt-8 mb-8 pb-12 pt-4 px-4 backdrop-blur-md bg-white/30 rounded-box'>
                                <h2 className="text-gray-100 mb-4 text-center dark:text-gray-200 text-2xl font-semibold">thứ sáu 05-05-2023
                                </h2>
                                <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                                <li className="mb-6 ml-4">
                                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-800"></div>
                                        <time className="text-lg font-normal text-gray-100 dark:text-gray-200">05:30 - 07:00</time>
                                        <Disclosure className="mt-4" title="Báo thức - Vệ sinh cá nhân" content="Báo thức - Vệ sinh cá nhân"/>
                                    </li>
                                    <li className="mb-6 ml-4">
                                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-800"></div>
                                        <time className="text-md font-normal text-gray-100 dark:text-gray-200">07:00 - 07:30</time>
                                        <Disclosure className="mt-4" title="Tập thể dục" content="Tập thể dục"/>
                                    </li>
                                    <li className="mb-6 ml-4">
                                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-800"></div>
                                        <time className="text-md font-normal text-gray-100 dark:text-gray-200">08:30 - 10:00</time>
                                        <Disclosure className="mt-4" title="Thảo luận chuyên đề" content="Ghi rõ nội dung các chuyên đề."/>
                                    </li>
                                    <li className="mb-6 ml-4">
                                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-800"></div>
                                        <time className="text-md font-normal text-gray-100 dark:text-gray-200">10:00 - 11:45</time>
                                        <Disclosure className="mt-4" title="Trò chơi liên hoàn" content="Trò chơi liên hoàn"/>
                                    </li>
                                    <li className="mb-6 ml-4">
                                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-800"></div>
                                        <time className="text-md font-normal text-gray-100 dark:text-gray-200">12:00 - 13:00</time>
                                        <Disclosure className="mt-4" title="Nghỉ ngơi ăn trưa" content="Nghỉ ngơi ăn trưa"/>
                                    </li>
                                    <li className="mb-6 ml-4">
                                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-800"></div>
                                        <time className="text-md font-normal text-gray-100 dark:text-gray-200">13:00 - 13:30</time>
                                        <Disclosure className="mt-4" title="Tập Hát" content="Hướng dẫn thi DOCAT"/>
                                    </li>
                                    <li className="mb-6 ml-4">
                                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-800"></div>
                                        <time className="text-md font-normal text-gray-100 dark:text-gray-200">13:30 - 15:30</time>
                                        <Disclosure className="mt-4" title="Thánh Lễ bế mạc Đại Hội" content="Thánh Lễ bế mạc Đại Hội"/>
                                    </li>
                                    <li className="mb-6 ml-4">
                                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-800"></div>
                                        <time className="text-md font-normal text-gray-100 dark:text-gray-200">15:30 - 16:30</time>
                                        <Disclosure className="mt-4" title="Dọn vệ sinh chung" content="Dọn vệ sinh chung"/>
                                    </li>
                                </ol>
                            </div>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-2">
            </div>
        </section>
    </Layout>
  )
}