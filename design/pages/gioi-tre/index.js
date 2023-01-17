
import MyDisclosure from '../../components/Disclosure'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import PostView from '../../components/card/PostView'
import RecentPost from '../../components/home/recent_post'
import {notice_detail} from '../../types/sample_data/posts'
import Groups from '../../components/home/groups'
import {GroupsType} from '../../types/group'
import {MetaProps} from '../../components/layout/meta'
import {makeUrl} from '../../lib/backendapi'
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
  const [groups, setGroups] = useState([])
  const [post, setPost] = useState()
  const [posts, setPosts] = useState([])
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

  useEffect(()=>{
    let headers = {
      'Content-Type': 'application/json',
    }
    fetch(makeUrl("/api/community/?type=youth"),{
      method: 'GET',
      headers: headers
    })
    .then((res) => res.json())
    .then((data) => {
      if(data.status=='ok'){
        setGroups(data.communities)
      }
    })
    fetch(makeUrl("/api/post/?type=home&post_type=gioi-tre"),{
      method: 'GET',
      headers: headers
    })
    .then((res) => res.json())
    .then((data) => {
      if(data.status=='ok'){
        setPost(data.post)
        setPosts(data.recent_posts)
      }
    })
  },[])

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
      <PostView  post={post}/>
      <Groups groups={groups}/>
      <RecentPost posts={posts}/>
    </Layout>
  )
}
