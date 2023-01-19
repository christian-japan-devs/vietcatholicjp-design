import type { NextPage } from 'next'
import Link from 'next/link'
import React, { useState, useEffect,Fragment } from 'react'
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
import { Dialog, Transition } from '@headlessui/react'
import {GospelWord} from '@/types/gospel'

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
  const [word, setWord] = useState<GospelWord>()
  const [posts, setPosts] = useState<PostCard[]>([])
  const [groups, setGroups] = useState<GroupsType[]>([])
  const [massScheduleHome, setMassScheduleHome] = useState<MassDateSchedule[]>([])
  const [responseMessage, setResponseMessage] = useState<string>("")
  const [onLoading, setOnLoading] = useState(false)

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
    fetch(makeUrl("/api/community/?type=home"),{
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

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function onGetWord() {
    setOnLoading(true)
    let headers = {
      'Content-Type': 'application/json',
    };
    fetch(makeUrl("/api/gospel-random/?type=home"),{
      method: 'GET',
      headers: headers
    })
    .then((res) => res.json())
    .then((data) => {
      if(data.status === 'ok'){
        setWord(data.gospel_random)
        setOnLoading(false)
      }else{
        onMessage("Xin lỗi đã có lỗi xảy ra, vui lòng thử lại sau.")
        openModal()
      }
    })
  }

  const onMessage = (message: string) => {
    setResponseMessage(message)
    openModal()
  };

  return (
    <Layout meta_data={meta_data} current_page='home'>
      <Hero/> 
      <div className="flex md:my-4 justify-center">
          <div className="items-center block p-4 max-w-lg mx-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
              <p className="font-serif text-center text-lg my-4 text-gray-600 dark:text-gray-200">{word?.word?word.word:"Bấm vào nút phía dưới để nhận câu Lời Chúa cho năm 2023 của bạn."}</p>
              <div className="flex items-center">
              {word?.image_vertical?<div className="flex items-center space-x-4">
                <a href={word?.image_vertical} target="_blank" className="text-gray-200 bg-red-500 dark:bg-red-700 p-2 rounded shadow-sm hover:bg-red-800 dark:text-gray-200">Tải ảnh nền phone</a>
                <a href={word?.image_horizontal} target="_blank" className="text-gray-200 bg-cyan-500 dark:bg-cyan-700 p-2 rounded shadow-sm hover:bg-cyan-800 dark:text-gray-200">Ảnh cover Fb</a>
                </div>
                :<button type="button" onClick={onGetWord} disabled={onLoading} className={"text-gray-200 p-2 rounded shadow-sm hover:bg-red-800 dark:text-gray-200 "+(onLoading?"bg-gray-500 dark:bg-gray-800":"bg-red-500 dark:bg-red-700")}>{onLoading?"Đang tải...":"Nhận lời Chúa"}</button>
              }
              </div>
          </div>
      </div>
      <LetterView post={letter}/>
      <MassSchedule schedules={massScheduleHome}/>
      <Notice announcements={announcements}/>
      <PriorityNotice/>
      <VideoPostCast videoLinks={videoLinks}/>
      <PostView  post={post}/>
      <RecentPost posts={posts}/>
      <Groups groups={groups}/>
      <ContactUs onMessage={onMessage}/>
      <Transition appear show={isOpen} as={Fragment}>
              <Dialog as='div' className='relative z-10' onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0 scale-95'
                        enterTo='opacity-100 scale-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100 scale-100'
                        leaveTo='opacity-0 scale-95'
                    >
                        <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                        <Dialog.Title
                            as='h3'
                            className='text-lg font-medium leading-6 text-gray-900'
                        >
                        </Dialog.Title>
                        <div className='mt-2'>
                            <p className='text-sm text-gray-500'>
                            {responseMessage}
                            </p>
                        </div>

                        <div className='mt-4'>
                            <button
                            type='button'
                            className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                            onClick={closeModal}
                            >
                            OK
                            </button>
                        </div>
                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
              </Dialog>
            </Transition>
    </Layout>
  )
}

/**
export async function getStaticProps() {
  const data = await getLetterForHome('vi')
  return { props: {letter: data,}}
}*/

export default Home