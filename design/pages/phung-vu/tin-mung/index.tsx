
import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import {MetaProps} from '@/components/layout/meta'
import Link from 'next/link'
import {GospelMeta,GospelType,GospelReflection,CommuintyPrayer} from '@/types/gospel'
import {makeUrl} from '@/lib/backendapi'
import {getDateFromDateByHour} from '@/lib/helper'
import PostLayout from '@/components/layout/PostLayout'
import {TitleSlug} from '@/types/post'

const meta_data:MetaProps = {
  title:'Phụng vụ lời Chúa',
  description:'Các bài đọc và suy niệm Chúa Nhật',
  ogUrl:"",
  ogImage:"/vietcatholicjp-share.jpg"
}

const Index: NextPage = () => {

  const [gospel, setGospel] = useState<GospelType>()
  const [communityPrayer, setCommuintyPrayer] = useState<CommuintyPrayer>()
  const [nextGospel, setNextGospel] = useState<GospelMeta[]>([])
  const [titleSlug, setTitleSlug] = useState<TitleSlug[]>([])
  const [gospelReflection, setGospelReflection] = useState<GospelReflection>()

  useEffect(()=>{
    let headers = {
      'Content-Type': 'application/json',
    };
    let url_string = window.location.href
    let url = new URL(url_string)
    let slug = url.searchParams.get('slug')
    let request_endpoint = makeUrl("/api/gospel/getthisweek/")
    if(slug){
      request_endpoint = makeUrl("/api/gospel/"+slug+"/")
    }
    fetch(request_endpoint,{
      method: 'GET',
      headers: headers
    })
    .then((res) => res.json())
    .then((data) => {
      if(data.status === 'ok'){
        setGospel(data.gospel)
        setTitleSlug(data.gospel.content)
        setCommuintyPrayer(data.community_prayer)
        setGospelReflection(data.reflection)
        setNextGospel(data.next)
      }
    })
    meta_data.title = gospel?.meta_data.title?gospel?.meta_data?.title:''
    meta_data.description = gospel?.meta_data.excerpt?gospel?.meta_data?.excerpt:''
    meta_data.ogImage = gospel?.meta_data.image_url?gospel?.meta_data.image_url:''
  },[])

  return (
    <PostLayout meta_data={meta_data} chapters={titleSlug.concat({title:communityPrayer?.title,slug:communityPrayer?.slug},{title:gospelReflection?.title,slug:gospelReflection?.slug})} current_page='serve'>
      <div className="relative px-2 lg:px-8">
        <div className="mx-auto max-w-5xl pt-4 pb-4 sm:pt-8 sm:pb-8">
          {gospel&&
          <div className="p-4 md:px-8 md:py-4 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <h1 id="title" className="my-4 text-center text-4xl lg:text-4xl font-extrabold tracking-tight text-gray-700 dark:text-white">{gospel.meta_data.title}</h1>
            <h4 className="text-lg mt-4 text-center text-gray-700 dark:text-gray-400">{getDateFromDateByHour(gospel?.meta_data.date,0)}</h4>
            {gospel?.meta_data.audio_link&&
              <div className="mt-8 justify-center items-start h-full max-h-full w-full max-w-full border-gray-200 dark:border-gray-700">
                  <iframe className="w-full h-full" src={gospel.meta_data.audio_link} title="Vietcatholicjp"></iframe>
              </div>
            }
            <div>
                {gospel.content.map((chapter,idx)=>(
                  <div key={idx}>
                    <h2 className="relative group my-4 text-lg md:text-xl font-bold">{chapter.title}
                      <span id={chapter.slug} className="absolute -top-[140px]"></span>
                      <a className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100" href={"#"+chapter.slug} aria-label={"Link to this section: "+chapter.title}>
                        #
                      </a>
                    </h2>
                    <div id="post_content" className="my-4 space-y-2 indent-4 md:indent-8 md:text-md lg:text-lg xl:text-xl" dangerouslySetInnerHTML={{ __html: chapter.content?chapter.content:"" }} />
                  </div>
                ))}
              </div>
          </div>
          }
        </div>
      </div>

      <div className="relative px-2 lg:px-8">
        <div className="mx-auto max-w-5xl pt-8 pb-8 sm:pt-18 sm:pb-18">
        {communityPrayer&&
          <div className="p-4 md:py-8 md:px-8 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <div>
              <h1 className="text-3xl mt-4 font-serif font-bold tracking-tight text-center sm:text-4xl">{communityPrayer.title}
                <span id={communityPrayer.slug} className="absolute -top-[140px]"></span>
                <a className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100" href={"#"+communityPrayer.slug} aria-label="Link to this section: Leading paragraph">
                  #
                </a>
              </h1>
              {communityPrayer.audio_link&&
              <div className="mt-8 justify-center items-start h-full max-h-full w-full max-w-full border-gray-200 dark:border-gray-700">
                  <iframe className="w-full h-full" src={communityPrayer.audio_link} title="Vietcatholicjp"></iframe>
              </div>
              }
              <div id="post_content" className="my-4 space-y-2 indent-4 md:indent-8 md:text-md lg:text-lg xl:text-xl" dangerouslySetInnerHTML={{ __html: communityPrayer.content?communityPrayer.content:"" }} />
            </div>
          </div>
          }
          {gospelReflection&&
          <div className="p-4 md:px-8 md:py-8 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <div>
              <h1 className="text-3xl mt-4 font-serif font-bold tracking-tight text-center sm:text-4xl">{gospelReflection.title}
                <span id={gospelReflection.slug} className="absolute -top-[140px]"></span>
                <a className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100" href={"#"+gospelReflection.slug} aria-label={"Link to this section: "+gospelReflection.title}>
                  #
                </a>
              </h1>
              <h4 className="text-xl my-2 sm:my-4 sm:text-center sm:text-2xl">{getDateFromDateByHour(gospelReflection.created_on?gospelReflection.created_on:"",0)}</h4>
              <div className="mt-2 flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src={gospelReflection.author?.image} alt={gospelReflection.title}/>
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {gospelReflection.author?.full_name}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {gospelReflection.author?.email}
                    </p>
                </div>
              </div>
              {gospelReflection.audio_link&&
              <div className="mt-8 justify-center items-start h-full max-h-full w-full max-w-full border-gray-200 dark:border-gray-700">
                  <iframe className="w-full h-full" src={gospelReflection.audio_link} title="Vietcatholicjp"></iframe>
              </div>
              }
              <div id="post_content" className="my-4 space-y-2 indent-4 md:indent-8 md:text-md lg:text-lg xl:text-xl" dangerouslySetInnerHTML={{ __html: gospelReflection.content?gospelReflection.content:"" }} />
            </div>
          </div>
          }
        </div>
      </div>
      
      <div className="my-12 sm:flex sm:flex-col sm:items-center">
        <div className="sm:justify-center not-prose relative  bg-gradient-to-r from-pink-400 to-blue-400 ms:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl sm:rounded-xl overflow-hidden dark:bg-slate-800/25">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" ></div>
          <h1 className="text-4xl my-4 text-center font-serif tracking-tight sm:text-center sm:text-6xl">
            Bài đọc Chúa Nhật tiếp theo
          </h1>
          <div className="relative rounded-xl overflow-auto">
            <div className="my-4 ms:my-12 relative w-full flex gap-6 snap-x overflow-x-auto pb-8">
              <div className="snap-center shrink-0">
                <div className="shrink-0 w-2 sm:w-24"></div>
              </div>
              {nextGospel.map((gospel,idx)=>(
                <div key={idx} className="snap-center shrink-0 first:pl-8 last:pr-8">
                  <div className="card w-64 md:w-96 bg-base-100 shadow-xl">
                    <Link href={"/phung-vu/tin-mung/?slug="+(gospel.slug)} legacyBehavior>
                      <a>
                        <div className="card-body">
                          <h2 className="card-title text-gray-700 dark:text-gray-100">{gospel.title}</h2>
                          <span className="text-sm mt-2 text-gray-500 dark:text-gray-100">{gospel.date}</span>
                          <p className="text-justify">{gospel.excerpt}</p>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
              <div className="snap-center shrink-0">
                <div className="shrink-0 w-24s sm:w-48"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PostLayout>
  )
}

export default Index
