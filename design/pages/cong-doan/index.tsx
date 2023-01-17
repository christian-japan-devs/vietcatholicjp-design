
import React, { useState, useEffect } from 'react'
import Layout from '@/components/layout/Layout'
import {MetaProps} from '@/components/layout/meta'
import Groups from '@/components/home/groups'
import {GroupsType} from '@/types/group'
import {makeUrl} from '@/lib/backendapi'
import { AboutType } from '@/types/about'

const meta_data:MetaProps = {
  title:"Giáo đoàn công giáo Việt Nam tại Nhật",
  description:"Giới thiệu về giáo đoàn công giáo Việt Nam tại Nhật",
  ogUrl:"/cong-doan",
  ogImage:"/vietcatholicjp-share.jpg"
}

export default function Index() {

  const [groups, setGroups] = useState<GroupsType[]>([])
  const [aboutus, setAboutus] = useState<AboutType>()

  useEffect(()=>{
    let headers = {
      'Content-Type': 'application/json',
    }
    fetch(makeUrl("/api/about-us/?type=index"),{
        method: 'GET',
        headers: headers
      })
      .then((res) => res.json())
      .then((data) => {
        if(data.status=='ok'){
          setAboutus(data.about_us)
        }
    })

    fetch(makeUrl("/api/community/?type=community"),{
      method: 'GET',
      headers: headers
    })
    .then((res) => res.json())
    .then((data) => {
      if(data.status=='ok'){
        setGroups(data.communities)
      }
    })
  },[])

  return (
    <Layout meta_data={meta_data} current_page='comunity'>
      <section className="max-w-6xl mt-6 mx-auto px-4 bg-accent-dark">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Giới thiệu</h1>
          </div>
          {aboutus&&
          <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
            <div className="flex flex-col items-center pt-8">
              <span>
                <img className="justify-center" alt="" aria-hidden="true" src="/viet-catholicjp-312.svg"/>
              </span>
              <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">VietCatholicJapan</h3>
              <div className="text-gray-800 text-xl dark:text-gray-400">{aboutus.title}</div>
              <div className="text-gray-800 text-xl dark:text-gray-400">{aboutus.title_jp}</div>
              <div className="flex space-x-3 pt-6">
                <a className="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href="mailto:vietcatholicjp@gmail.com">
                  <span className="sr-only">Email</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-8 w-8">
                    <path d="M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z"></path><path d="m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z"></path>
                  </svg>
                </a>
                <a className="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href="https://facebook.com/conggiaovietnamtainhatban">
                  <span className="sr-only">Facebook</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-8 w-8">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="prose max-w-none text-md text-justify pt-8 pb-8 dark:prose-dark xl:col-span-2">
            <div id="aboutus_content" className="my-4 space-y-2 indent-4 md:indent-8 md:text-md lg:text-lg xl:text-xl" dangerouslySetInnerHTML={{ __html: aboutus.content?aboutus.content:"" }} />
            </div>
          </div>
          }
        </div>
      </section>
      <Groups groups={groups}/>
    </Layout>
  )
}
