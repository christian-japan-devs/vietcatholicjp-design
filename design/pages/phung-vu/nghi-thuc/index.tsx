
import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import {MetaProps} from '@/components/layout/meta'
import Link from 'next/link'
import {CeremonyType} from '@/types/prayer'
import {makeUrl} from '@/lib/backendapi'
import Layout from '@/components/layout/Layout'
import {phung_vu_nav} from '@/lib/constants'
import PrayerCard from '@/components/card/prayerCard'

const meta_data:MetaProps = {
  title:'Nghi thức công giáo',
  description:'Các nghi thức công giáo song ngữ Việt-Nhật',
  ogUrl:"",
  ogImage:"/vietcatholicjp-share.jpg"
}

const Index: NextPage = () => {
  const [ceremonyTypes, setCeremonyTypes] = useState<CeremonyType[]>([])

  useEffect(()=>{
    let headers = {
      'Content-Type': 'application/json',
    };
    let url_string = window.location.href
    let url = new URL(url_string)
    let slug = url.searchParams.get('slug')
    let request_endpoint = makeUrl("/api/ceremony/")
    if(slug){
      request_endpoint = makeUrl("/api/ceremony/"+slug+"/")
    }
    fetch(request_endpoint,{
      method: 'GET',
      headers: headers
    })
    .then((res) => res.json())
    .then((data) => {
      if(data.status === 'ok'){
        setCeremonyTypes(data.ceremony_types)
      }
    })
  },[])

  return (
    <Layout meta_data={meta_data} current_page='serve'>
      <div className="w-full bg-white dark:bg-gray-900/60">
        <div className="lg:flex lg:px-8 mx-auto max-w-screen-2xl">
          <aside className="fixed inset-0 z-20 flex-none h-full w-48 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-48 lg:block hidden">
            <div className="overflow-y-auto z-20 h-full scrolling-touch max-w-2xs lg:h-[calc(100vh-3rem)] lg:block lg:sticky top:24 lg:top-28 lg:mr-0">
              <nav className="pt-16 px-1 pl-3 lg:pl-0 lg:pt-2 font-normal text-base lg:text-sm pb-10 lg:pb-20 sticky?lg:h-(screen-18)">
                <ul className="mb-0 mt-8 list-unstyled">
                    <h5 className="mb-2 text-xl font-semibold tracking-wide text-gray-900 uppercase lg:text-xl dark:text-white">
                      Menu
                    </h5>
                    {phung_vu_nav.sub_navi.map((nav,idx)=>(
                      <li key={idx} className="border-b border-gray-200 mt-2 pl-4 hover:bg-sky-100 dark:hover:bg-sky-600 rounded-md">
                        <Link href={nav.href} legacyBehavior>
                          <a className="py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-200 dark:hover:text-white ">{nav.name}</a>
                        </Link>
                      </li>
                    ))}
                </ul>
              </nav>
            </div>
          </aside>
          <div className="fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/60 hidden" id="sidebarBackdrop"></div>
          <main className="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible">
            <div className="flex w-full">
              <div className="mx-auto flex-auto max-w-4xl min-w-0 pt-6 lg:px-4 lg:pt-8 pb:12 xl:pb-24 lg:pb-16">
                <div className="relative px-2 lg:px-8">
                  <div className="mx-auto max-w-5xl pt-8 pb-8 sm:pt-18 sm:pb-18">
                  {ceremonyTypes?.map((prayer_type,idx)=>(
                    <div className="space-y-4" key={idx}>
                      <h1 className="text-3xl md:text-4xl mt-y font-serif font-bold tracking-tight text-center">{prayer_type.name}
                        <span id={prayer_type.name} className="absolute -top-[140px]"></span>
                        <a className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100" href={"#"+prayer_type.name} aria-label={"Link to this section: "+prayer_type.name}>
                          #
                        </a>
                      </h1>
                      {prayer_type.ceremonies?.map((prayer,idx)=>(
                        <PrayerCard idx={idx} prayer={prayer}/>
                      ))}
                    </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex-none hidden sm:block w-56 lg:w-56 xl:w-72 pl-4 mr-4 xl:text-sm lg:block">
                <div className="flex overflow-y-auto sticky top-28 flex-col justify-between pt-10 pb-6 h-[calc(100vh-5rem)]">
                  <div className="pl-2">
                    <h5 className="text-slate-900 font-semibold mb-4 text-md leading-6 dark:text-slate-100">Phụ lục</h5>
                    <ul className="text-slate-700 dark:text-slate-100 text-sm leading-6">
                      {ceremonyTypes?.map((prayer_type,idx)=>(
                        <li key={idx}>
                          <h5 className="text-slate-900 mb-4 text-sm leading-6 dark:text-slate-100">{prayer_type.name}</h5>
                          <ul>
                            {prayer_type.ceremonies?.map((prayer,idx)=>(
                              <li key={idx}><a href={"#"+(prayer.name)} className="block py-1 hover:text-sky-500 dark:text-slate-200 dark:hover:text-slate-100">{prayer.name}</a></li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  )
}

export default Index
