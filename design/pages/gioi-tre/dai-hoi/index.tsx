import { useState } from 'react'
import NavBar from '../../../components/layout/navbar'
import Disclosure from '../../../components/Disclosure'
import Image from 'next/image'

export default function Event() {

  return (
    <div className="isolate bg-white">
        <NavBar/>
        <section className="max-w-screen-xl items-center mt-4 mx-auto px-4 bg-gradient-to-b to-pink-600 from-sky-400">
            <div className="space-y-4 flex flex-col items-center">
                <h2 className="text-gray-100 pt-8 dark:text-gray-200 text-2xl font-semibold">
                    CHƯƠNG TRÌNH ĐẠI HỘI II
                </h2>
                <img className="p-1 w-24 h-24 lg:w-64 lg:h-64 drop-shadow-2xl rounded-full ring-2  ring-gray-300 dark:ring-gray-500" src="/youth_event/youth-logo-2.jpg" alt="Bordered avatar"/>
                <a target="_blank" rel="noreferrer" href="https://goo.gl/maps/C8aaRLZ1MUdTTb127" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white backdrop-blur-md bg-white/20 rounded-lg hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">
                    Địa chỉ
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-2">
                <div className='mt-8'>
                    <h2 className="text-gray-100 mb-4 text-center dark:text-gray-200 text-2xl font-semibold">NGÀY 1, thứ năm 04/05/2023
                    </h2>
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                        <li className="mb-6 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="text-lg font-normal text-gray-100 dark:text-gray-500">09:00 - 10:00</time>
                            <Disclosure className="mt-4" title="Đón tiếp, ghi danh" content="Đón tiếp, ghi danh"/>
                        </li>
                        <li className="mb-6 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="text-md font-normal text-gray-100 dark:text-gray-500">10:00 - 10:45</time>
                            <Disclosure className="mt-4" title="Sinh hoat chung" content="Sinh hoat chung"/>
                        </li>
                        <li className="mb-6 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="text-md font-normal text-gray-100 dark:text-gray-500">11:00 - 12:30</time>
                            <Disclosure className="mt-4" title="Com trưa- Sinh hoạt nhóm" content="Com trua- Sinh hoat nhóm"/>
                        </li>
                        <li className="mb-6 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="text-md font-normal text-gray-100 dark:text-gray-500">12:45 - 13:45</time>
                            <Disclosure className="mt-4" title="Khai mạc Đại Hội" content="Đón tiếp, ghi danh"/>
                        </li>
                        <li className="mb-6 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="text-md font-normal text-gray-100 dark:text-gray-500">14:00 - 15:30</time>
                            <Disclosure className="mt-4" title="Trò chơi, thi đua" content="Đón tiếp, ghi danh"/>
                        </li>
                        <li className="mb-6 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="text-md font-normal text-gray-100 dark:text-gray-500">15:30 - 17:30</time>
                            <Disclosure className="mt-4" title="Thi DOCAT" content="Hướng dẫn thi DOCAT"/>
                        </li>
                        <li className="mb-6 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="text-md font-normal text-gray-100 dark:text-gray-500">17:30 - 18:00</time>
                            <Disclosure className="mt-4" title="Nghỉ ngơi - ăn tối" content="Hướng dẫn lấy đồ ăn tối"/>
                        </li>
                        <li className="mb-6 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="text-md font-normal text-gray-100 dark:text-gray-500">18:30 - 21:30</time>
                            <Disclosure className="mt-4" title="Diễn nguyện - Văn nghệ" content="Diễn nguyện - Văn nghệ"/>
                        </li>
                        <li className="mb-6 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="text-md font-normal text-gray-100 dark:text-gray-500">21:30 - 22:30</time>
                            <Disclosure className="mt-4" title="Tĩnh nguyện" content="Tĩnh nguyện"/>
                        </li>
                        <li className="mb-6 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="text-md font-normal text-gray-100 dark:text-gray-500">22:30 - </time>
                            <Disclosure className="mt-4" title="Nghỉ đêm" content="Hướng dẫn nghỉ đêm"/>
                        </li>
                    </ol>
                </div>
                <div className='mt-8 pb-12'>
                <h2 className="text-gray-100 mb-4 text-center dark:text-gray-200 text-2xl font-semibold">NGÀY 2, thứ sáu 05/05/2023
                    </h2>
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                    <li className="mb-6 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="text-lg font-normal text-gray-100 dark:text-gray-500">05:30 - 07:00</time>
                            <Disclosure className="mt-4" title="Báo thức - Vệ sinh cá nhân" content="Báo thức - Vệ sinh cá nhân"/>
                        </li>
                        <li className="mb-6 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="text-md font-normal text-gray-100 dark:text-gray-500">07:00 - 07:30</time>
                            <Disclosure className="mt-4" title="Tập thể dục" content="Tập thể dục"/>
                        </li>
                        <li className="mb-6 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="text-md font-normal text-gray-100 dark:text-gray-500">08:30 - 10:00</time>
                            <Disclosure className="mt-4" title="Thảo luận chuyên đề" content="Ghi rõ nội dung các chuyên đề."/>
                        </li>
                        <li className="mb-6 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="text-md font-normal text-gray-100 dark:text-gray-500">10:00 - 11:45</time>
                            <Disclosure className="mt-4" title="Trò chơi liên hoàn" content="Trò chơi liên hoàn"/>
                        </li>
                        <li className="mb-6 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="text-md font-normal text-gray-100 dark:text-gray-500">12:00 - 13:00</time>
                            <Disclosure className="mt-4" title="Nghỉ ngơi ăn trưa" content="Nghỉ ngơi ăn trưa"/>
                        </li>
                        <li className="mb-6 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="text-md font-normal text-gray-100 dark:text-gray-500">13:00 - 13:30</time>
                            <Disclosure className="mt-4" title="Tập Hát" content="Hướng dẫn thi DOCAT"/>
                        </li>
                        <li className="mb-6 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="text-md font-normal text-gray-100 dark:text-gray-500">13:30 - 15:30</time>
                            <Disclosure className="mt-4" title="Thánh Lễ bế mạc Đại Hội" content="Thánh Lễ bế mạc Đại Hội"/>
                        </li>
                        <li className="mb-6 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="text-md font-normal text-gray-100 dark:text-gray-500">15:30 - 16:30</time>
                            <Disclosure className="mt-4" title="Dọn vệ sinh chung" content="Dọn vệ sinh chung"/>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    </div>
  )
}