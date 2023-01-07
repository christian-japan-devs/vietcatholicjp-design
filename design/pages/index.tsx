import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import Layout from '../components/layout/Layout'
import Hero from '../components/home/hero'
import FirstLetter from '../components/home/letter'
import MassSchedule from '../components/home/mass_schedule'
import VideoPostCast from '../components/home/video_postcast'
import Notice from '../components/home/notice'
import PriorityNotice from '../components/home/priority_notice'
import SecondLetter from '../components/home/letter2'
import RecentPost from '../components/home/recent_post'
import Groups from '../components/home/groups'
import ContactUs from '../components/home/contactus'
import {MetaProps} from '../components/layout/meta'
import {makeUrl} from '../lib/backendapi'
import {LetterType} from '../types/letter'
import {MassDateSchedule} from '../types/shedule'
import {getLetterForHome} from '../lib/backendapi'

const meta_data:MetaProps = {
  title:"Giáo đoàn công giáo Việt Nam tại Nhật",
  description:"Giáo đoàn công giáo Việt Nam tại Nhật",
  ogUrl:"/",
  ogImage:"/vietcatholicjp-bg.jpeg"
}

interface Props {
  letter: LetterType,
}

const Home: NextPage<Props> = ({ letter }) => {

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
        console.log(data)
        if(data.status=='ok'){
          console.log(data)
          setMassScheduleHome(data.mass_schedules)
          }
    })
  },[])

  return (
    <Layout meta_data={meta_data} current_page='home'>
      <Hero/> 
      <FirstLetter letter={letter}/>
      <MassSchedule schedule={massScheduleHome}/>
      <Notice/>
      <PriorityNotice/>
      <VideoPostCast/>
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