import type { NextPage } from 'next'
import React, { Fragment,useState, useEffect } from 'react'
import Layout from '../components/layout/Layout'
import Hero from '../components/home/hero1'
import FirstLetter from '../components/home/letter'
import MassSchedule from '../components/home/mass_schedule'
import VideoPostCast from '../components/home/video_postcast'
import Notice from '../components/home/notice'
import PriorityNotice from '../components/home/priority_notice'
import SecondLetter from '../components/home/letter2'
import RecentPost from '../components/home/recent_post'
import Groups from '../components/home/groups'
import ContactUs from '../components/home/contactus'
import { Dialog, Transition } from '@headlessui/react'
import {MetaProps} from '../components/layout/meta'
import {makeUrl} from '../lib/backendapi'
import {LetterType} from '../types/letter'
import {NoticeType} from '../types/notice'
import {VideoPostCastType} from '../types/letter'
import {MassDateSchedule} from '../types/shedule'
import {getLetterForHome} from '../lib/backendapi'

const meta_data:MetaProps = {
  title:"Giáo đoàn công giáo Việt Nam tại Nhật",
  description:"Cổng thông tin điện tử chính thức của người công giáo Việt Nam hiện đang sinh sống và làm việc tại Nhật. Chia sẻ giờ Lễ tiếng Việt hàng tuần, lịch giải tội của quý Cha, thông tin liên lạc với quý Cha, các nhóm giới trẻ và cộng đoàn trên toàn nước Nhật.",
  ogUrl:"https://www.vietcatholic.jp",
  ogImage:"/happy-new-year-2023.jpg"
}

interface Props {
  letter: LetterType,
}

const Home: NextPage<Props> = ({ letter }) => {
  const [isOpen, setIsOpen] = useState(false)
  const audio_link = "https://embed.podcasts.apple.com/jp/podcast/ch%C3%BAa-nh%E1%BA%ADt-iii-th%C6%B0%E1%BB%9Dng-ni%C3%AAn/id1663661785?i=1000593022578"
  const [announcements, setAnnouncements] = useState<NoticeType[]>([])
  const [videoLinks, setVideoLinks] = useState<VideoPostCastType[]>([])
  const [massScheduleHome, setMassScheduleHome] = useState<MassDateSchedule>({
    title:"",
    date:"",
    time_schedule:[]
  })

  useEffect(()=>{
    let headers = {
      'Content-Type': 'application/json',
    };
    fetch(makeUrl("/api/massschedule/?type=home"),{
        method: 'GET',
        headers: headers
      })
      .then((res) => res.json())
      .then((data) => {
        if(data.status=='ok'){
          setMassScheduleHome(data.mass_schedules)
        }
    })
    fetch(makeUrl("/api/announcement/?type=short"),{
      method: 'GET',
      headers: headers
    })
    .then((res) => res.json())
    .then((data) => {
      setAnnouncements(data)
    })
    fetch(makeUrl("/api/videolinks/?type=slug"),{
      method: 'GET',
      headers: headers
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      setVideoLinks(data)
    })
  },[])

  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }

  return (
    <Layout meta_data={meta_data} current_page='home'>
      <Hero/> 
      <FirstLetter readMore={openModal} letter={letter}/>
      <MassSchedule schedule={massScheduleHome} gospel_link={audio_link}/>
      <Notice announcements={announcements}/>
      <PriorityNotice/>
      <VideoPostCast videoLinks={videoLinks}/>
      <SecondLetter/>
      <RecentPost/>
      <Groups/>
      <ContactUs/>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await getLetterForHome('vi')
  return { props: {letter: data,}}
}

export default Home