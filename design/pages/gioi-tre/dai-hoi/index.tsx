import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Disclosure from '../../../components/Disclosure'
import Layout from '../../../components/layout/Layout'
import {youth_day_programs} from '../../../types/sample_data/youthday'
const meta_data = {
    title:"",
    description:"string",
    ogUrl:"",
    ogImage:""
}

export default function Event() {
    const [selected_tab, setSelectedTab] = useState(0)

  return (
    <Layout meta_data={meta_data} current_page='comunity'>
        <section className="max-w-screen-xl items-center sm:flex sm:flex-col pb-4 mx-auto px-4">
            <div className="flex flex-col my-4 shadow-md space-y-4 w-full max-w-3xl rounded-xl items-center py-4 px-2 sm:px-4 bg-gradient-to-b to-sky-400 from-gray-200 bg-gray-700y-400 dark:to-gray-700 dark:from-stone-900">
                <img className="p-1 mt-4 w-48 h-48 lg:w-64 lg:h-64 drop-shadow-xl rounded-full ring-2  ring-gray-300 dark:ring-gray-500" src="/youth_event/youth-logo-2.jpg" alt="Đại hội giới trẻ tại Nhật lần II"/>
                <div className="flex flex-row space-x-2">
                    <button className="text-white bg-pink-500 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-cyan-300  rounded-lg text-sm w-full px-2 py-1 text-center dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:focus:ring-cyan-700">Đăng ký</button>
                    <a target="_blank" rel="noreferrer" href="https://goo.gl/maps/C8aaRLZ1MUdTTb127" className="inline-flex w-full items-center px-2 py-1 text-sm text-center text-white backdrop-blur-md bg-white/10 rounded-lg hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">
                        Google
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
            <div className="relative">
                <div className="mt-8 mb-16 md:px-24 md:my-24 grid grid-flow-col grid-rows-2 grid-cols-2 md:gap-8">
                    <div className="transform scale-110 -rotate-6">
                        <img className='rounded-lg' src="/youth_event/pray-02.jpg" alt="" loading="lazy"/>
                    </div>
                    <div className="transform translate-y-6 md:scale-100 rotate-6">
                        <img className='rounded-lg' src="/youth_event/sinh-hoat.jpg" alt="" loading="lazy"/>
                    </div>
                    <div className="transform translate-y-6 -rotate-6">
                        <img className='rounded-lg' src="/youth_event/youth-dance.jpg" alt="" loading="lazy"/>
                    </div>
                    <div className="row-start-1 col-start-2 rotate-6 transform">
                        <img className='rounded-lg' src="/youth_event/group-04.jpg" alt="" loading="lazy"/>
                    </div>
                </div>
                <div className="w-full max-w-3xl shadow-md rounded-xl items-center py-4 px-2 sm:px-4 bg-gradient-to-b to-pink-600 from-sky-500 bg-gray-700y-400 dark:to-gray-700 dark:from-stone-900">
                    <h2 className="text-gray-100 text-center my-4 dark:text-gray-200 text-2xl lg:text-4xl font-semibold">
                        CHƯƠNG TRÌNH ĐẠI HỘI
                    </h2>
                    <Tab.Group>
                        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                            {youth_day_programs.map((program, idx)=>(
                                <Tab key={idx} onClick={()=>setSelectedTab(idx)} className={"w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 "+(selected_tab===idx?'bg-white shadow':'text-blue-100 hover:bg-white/[0.12] hover:text-white')}>{program.title}</Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels>
                            {youth_day_programs.map((program, idx)=>(
                                <Tab.Panel key={idx}>
                                    <div className='mt-8 py-2 px-4 backdrop-blur-md bg-white/30 rounded-box'>
                                        <h2 className="text-gray-100 mb-4 text-center dark:text-gray-200 text-2xl font-semibold">{program.date}
                                        </h2>
                                        <ol className="relative border-l border-gray-200 dark:border-gray-800">
                                            {program.details.map((detail,idx)=>(
                                                <li key={idx} className="mb-6 ml-4">
                                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-800"></div>
                                                    <time className="text-lg font-normal text-gray-100 dark:text-gray-200">{detail.from_time} - {detail.to_time}</time>
                                                    <Disclosure className="mt-4" title={detail.content.title} content={detail.content.detail}/>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-2">
            </div>
        </section>
    </Layout>
  )
}