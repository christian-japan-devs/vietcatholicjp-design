import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import Layout from '../components/layout/Layout'
import Hero from '../components/home/hero1'
import LetterView from '../components/home/LetterView'
import MassSchedule from '../components/home/mass_schedule'
import VideoPostCast from '../components/home/video_postcast'
import Notice from '../components/home/notice'
import PriorityNotice from '../components/home/priority_notice'
import PostView from '../components/card/PostView'
import RecentPost from '../components/home/recent_post'
import Groups from '../components/home/groups'
import ContactUs from '../components/home/contactus'
import {MetaProps} from '../components/layout/meta'
import {makeUrl} from '../lib/backendapi'
import {LetterType} from '../types/letter'
import {NoticeType} from '../types/notice'
import PostType, {PostCard} from '../types/post'
import {GroupsType} from '../types/group'
import {VideoPostCastType} from '../types/letter'
import {MassDateSchedule} from '../types/shedule'

const meta_data:MetaProps = {
  title:"Giáo đoàn công giáo Việt Nam tại Nhật",
  description:"Cổng thông tin điện tử chính thức của người công giáo Việt Nam hiện đang sinh sống và làm việc tại Nhật. Chia sẻ giờ Lễ tiếng Việt hàng tuần, lịch giải tội của quý Cha, thông tin liên lạc với quý Cha, các nhóm giới trẻ và cộng đoàn trên toàn nước Nhật.",
  ogUrl:"https://www.vietcatholic.jp",
  ogImage:"/happy-new-year-2023.jpg"
}

interface Props {
  letter: LetterType,
}

const Home: NextPage<Props> = ({}) => {
  const [isOpen, setIsOpen] = useState(false)
  const audio_link = "https://embed.podcasts.apple.com/jp/podcast/ch%C3%BAa-nh%E1%BA%ADt-iii-th%C6%B0%E1%BB%9Dng-ni%C3%AAn/id1663661785?i=1000593022578"
  const [letter, setLetter] = useState<LetterType>({
    title:"Thư mục vụ",
    content:"Đọc tiếp"
  })
  const [announcements, setAnnouncements] = useState<NoticeType[]>([])
  const [videoLinks, setVideoLinks] = useState<VideoPostCastType[]>([])
  const [post, setPost] = useState<PostType>()
  const [posts, setPosts] = useState<PostCard[]>([])
  const [groups, setGroups] = useState<GroupsType[]>([])
  const [massScheduleHome, setMassScheduleHome] = useState<MassDateSchedule>({
    title:"",
    date:"",
    time_schedule:[]
  })

  useEffect(()=>{
    let headers = {
      'Content-Type': 'application/json',
    };
    fetch(makeUrl("/api/letter/?type=home"),{
      method: 'GET',
      headers: headers
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      setLetter(data)
    })
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
      setVideoLinks(data)
    })
    fetch(makeUrl("/api/post/?type=home"),{
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
    fetch(makeUrl("/api/community/"),{
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
    <Layout meta_data={meta_data} current_page='home'>
      <Hero/> 
      <LetterView post={letter}/>
      <MassSchedule schedule={massScheduleHome} gospel_link={massScheduleHome.audio_link}/>
      <Notice announcements={announcements}/>
      <PriorityNotice/>
      <VideoPostCast videoLinks={videoLinks}/>
      <PostView  post={post}/>
      <RecentPost posts={posts}/>
      <Groups groups={groups}/>
      <ContactUs/>
    </Layout>
  )
}

/**
export async function getStaticProps() {
  const data = await getLetterForHome('vi')
  return { props: {letter: data,}}
}*/

export default Home