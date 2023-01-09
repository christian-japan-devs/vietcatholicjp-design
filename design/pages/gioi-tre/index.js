
import MyDisclosure from '../../components/Disclosure'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import RecentPost from '../../components/home/recent_post'
import {notice_detail} from '../../types/sample_data/posts'
import Groups from '../../components/home/groups'
import {GroupsType} from '../../types/group'
import {MetaProps} from '../../components/layout/meta'
import Link from 'next/link'

const meta_data = {
  title:notice_detail.title,
  description:notice_detail.excerpt,
  ogUrl:"",
  ogImage:"/vietcatholicjp-share.jpg"
}

export default function Index() {
  const [vday, setVDay] = useState(0)
  const [vhour, setVHour] = useState(0)
  const [vminute, setVMinute] = useState(0)
  const [vsecond, setVSecond] = useState(0)
  //const [groups, setGroups] = useState<GroupsType[]>([])

  var countDownDate = new Date("May 4, 2023 06:00:00").getTime();
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    setVDay(Math.floor(distance / (1000 * 60 * 60 * 24)))
    setVHour(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
    setVMinute(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
    setVSecond(Math.floor((distance % (1000 * 60)) / 1000))

  }, 1000);

  return (
    <Layout meta_data={meta_data} current_page='youth'>
      <section className="bg-accent-dark mb-8">
          <div className="relative px-2 lg:px-8">
            <div className="mx-auto lg:mx-16 max-w-8xl bg-cover bg-hero-youth-event md:pb-48 lg:pb-48 sm:pb-48">
                <div className="pt-8 pb-8">
                  <div className="flex flex-col  items-center ">
                    <img className="mt-4 p-1 w-36 h-36 md:w-48 md:h-48 lg:w-64 lg:h-64 drop-shadow-2xl rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/youth_event/youth-logo-2.jpg" alt="DH-GT-VN"/>
                  </div>
                  <div className="justify-center mt-4 grid grid-flow-col gap-5 text-center auto-cols-max">
                    <div className="flex flex-col mt-4 p-2 backdrop-blur-md bg-white/30 rounded-box text-neutral-content">
                        <span className="countdown font-mono text-2xl md:text-5xl">
                          {vday<100?<span style={{"--value":vday}}></span>:<>
                          <span style={{"--value":Math.floor(vday/100)}}></span>
                          <span style={{"--value":(vday-100*Math.floor(vday/100))}}></span></>
                          }
                        </span>
                        Ngày
                    </div> 
                    <div className="flex flex-col mt-4 p-2 backdrop-blur-md bg-white/30 rounded-box text-neutral-content">
                        <span className="countdown font-mono text-2xl md:text-5xl">
                        <span style={{"--value":vhour}}></span>
                        </span>
                        giờ
                    </div> 
                    <div className="flex flex-col mt-4  p-2 backdrop-blur-md bg-white/30 rounded-box text-neutral-content">
                        <span className="countdown font-mono text-2xl md:text-5xl">
                        <span style={{"--value":vminute}}></span>
                        </span>
                        phút
                    </div> 
                    <div className="flex flex-col mt-4  p-2 backdrop-blur-md bg-white/30 rounded-box text-neutral-content">
                        <span className="countdown font-mono text-2xl md:text-5xl">
                        <span style={{"--value":vsecond}}></span>
                        </span>
                        giây
                    </div>
                  </div>
                  <div className="mt-8 mb-12 flex gap-x-4 justify-center">
                    <Link  href="/gioi-tre/dai-hoi/dang-ky" legacyBehavior>
                      <a
                        className="inline-block rounded-lg backdrop-blur-md bg-white/30 px-4 py-1.5 md:py-4 text-sm md:text-2xl font-semibold leading-7 text-white shadow-sm ring-1 ring-gray-200 hover:bg-pink-700 hover:ring-pinnk-700"
                      >
                        Đăng ký
                        <span className="ml-2 text-blue-400" aria-hidden="true">
                          &rarr;
                        </span>
                      </a>
                    </Link>
                    <Link  href="/gioi-tre/dai-hoi" legacyBehavior>
                      <a
                        className="inline-block rounded-lg backdrop-blur-md bg-white/30 px-4 py-1.5 md:py-4 text-sm md:text-2xl font-semibold leading-7 text-white shadow-sm ring-1 ring-gray-200 hover:bg-pink-700 hover:ring-pinnk-700"
                      >
                        Chương trình
                        <span className="ml-2 text-blue-400" aria-hidden="true">
                          &rarr;
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>
            </div>
            </div>
      </section>
      <div className="relative px-2 lg:px-8">
        <div className="mx-auto max-w-5xl pt-4 pb-4 sm:pt-8 sm:pb-8">
          <div className="p-4 md:px-16 md:py-4 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <div>
              <h1 className="text-2xl my-4 font-serif font-bold tracking-tight sm:text-center sm:text-4xl">
                {notice_detail.title}
              </h1>
              <div className="mt-2 flex items-center space-x-4">
                  <div className="flex-shrink-0">
                      <img className="w-8 h-8 rounded-full" src={notice_detail.author.image} alt={notice_detail.title}/>
                  </div>
                  <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          {notice_detail.author.full_name}
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          {notice_detail.author.user?.email}
                      </p>
                  </div>
              </div>
              <span className="text-sm mt-2 text-gray-500 dark:text-gray-400">{notice_detail.date}</span>
              {notice_detail.content.map((paragraph,idx)=>(
                <p key={idx} className="mt-6 text-sm md:text-md text-justify text-gray-800 dark:text-gray-200 ">
                {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <RecentPost/>
    </Layout>
  )
}
