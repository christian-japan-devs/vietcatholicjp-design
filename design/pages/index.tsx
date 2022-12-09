import Layout from '../components/layout/Layout'
import Carousel from '../components/home/carousel'
import Hero from '../components/home/hero'
import FirstLetter from '../components/home/letter'
import MassSchedule from '../components/home/mass_schedule'
import VideoPostCast from '../components/home/video_postcast'
import Notice from '../components/home/notice'
import PriorityNotice from '../components/home/priority_notice'
import SecondLetter from '../components/home/letter2'
import RecentPost from '../components/home/recent_post'
import Groups from '@/components/home/groups'
import ContactUs from '../components/home/contactus'
import {MetaProps} from '../components/layout/meta'

const meta_data:MetaProps = {
  title:"Giáo đoàn công giáo Việt Nam tại Nhật",
  description:"Giáo đoàn công giáo Việt Nam tại Nhật",
  ogUrl:"/",
  ogImage:"/vietcatholicjp-bg.jpeg"
}

export default function Home() {
  return (
    <Layout meta_data={meta_data} current_page='home'>
      <Hero/> 
      <FirstLetter/>
      <MassSchedule/>
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
