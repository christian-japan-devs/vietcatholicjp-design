import Link from 'next/link'
import React, { useState } from 'react'
import {GospelContent} from '@/types/gospel'
import { Tab } from '@headlessui/react'

type Props = {
    gospel: GospelContent,
    idx: number
}

const GospelCard = ({ gospel , idx}: Props) => {
    const [selected_tab, setSelectedTab] = useState("vietnamese")
    return (
        <div key={idx} className="mt-4 md:px-8 md:py-8 md:bg-white md:border md:border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <h1 className="text-2xl my-4 font-serif font-bold tracking-tight text-center sm:text-3xl">{selected_tab=="vietnamese"?gospel.title:selected_tab=="japanese"?gospel.title_jp:gospel.title_en}
                <span id={gospel.title} className="absolute -top-[140px]"></span>
                <a className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100" href={"#"+gospel.title} aria-label={"Link to this section: "+gospel.title}>
                #
                </a>
            </h1>
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                    <Tab key="vietnamese" onClick={()=>setSelectedTab("vietnamese")} className={"w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 "+(selected_tab==="vietnamese"?'bg-white shadow':'text-blue-300 hover:bg-white/[0.12] hover:text-white')}>Tiếng Việt</Tab>
                    <Tab key="japanese" onClick={()=>setSelectedTab("japanese")} className={"w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 "+(selected_tab==="japanese"?'bg-white shadow':'text-blue-300 hover:bg-white/[0.12] hover:text-white')}>日本語</Tab>
                    <Tab key="english" onClick={()=>setSelectedTab("english")} className={"w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 "+(selected_tab==="english"?'bg-white shadow':'text-blue-300 hover:bg-white/[0.12] hover:text-white')}>English</Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel key="vietnamese">
                        <div id="post_content" className="my-4 space-y-2 indent-4 md:indent-8 md:text-md lg:text-lg xl:text-xl" dangerouslySetInnerHTML={{ __html: gospel.content?gospel.content:"" }} />
                    </Tab.Panel>
                    <Tab.Panel key="japanese">
                        <div id="post_content" className="my-4 space-y-2 indent-4 md:indent-8 md:text-md lg:text-lg xl:text-xl" dangerouslySetInnerHTML={{ __html: gospel.content_jp?gospel.content_jp:"" }} />
                    </Tab.Panel>
                    <Tab.Panel key="english">
                        <div id="post_content" className="my-4 space-y-2 indent-4 md:indent-8 md:text-md lg:text-lg xl:text-xl" dangerouslySetInnerHTML={{ __html: gospel.content_en?gospel.content_en:"" }} />
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export default  GospelCard