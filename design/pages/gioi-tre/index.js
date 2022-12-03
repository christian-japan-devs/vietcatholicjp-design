
import MyDisclosure from '../../components/Disclosure'
import Image from 'next/image'
import { useState } from 'react'
import Layout from '../../components/layout/Layout'
import {MetaProps} from '../../components/layout/meta'
import Link from 'next/link'

const meta_data = {
  title:"",
  description:"string",
  ogUrl:"",
  ogImage:""
}

export default function Index() {
  const [vday, setVDay] = useState(0)
  const [vhour, setVHour] = useState(0)
  const [vminute, setVMinute] = useState(0)
  const [vsecond, setVSecond] = useState(0)

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
    <Layout meta_data={meta_data}>
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
                    <a
                      href="#"
                      className="inline-block rounded-lg backdrop-blur-md bg-white/30 px-4 py-1.5 md:py-4 text-sm md:text-2xl font-semibold leading-7 text-white shadow-sm ring-1 ring-gray-200 hover:bg-pink-700 hover:ring-pinnk-700"
                    >
                      Đăng ký
                      <span className="ml-2 text-blue-400" aria-hidden="true">
                        &rarr;
                      </span>
                    </a>
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
      <section className="bg-accent-dark mb-8 border-t border-steel-200">
        <div className="space-y-4 flex flex-col items-center">
            <h2 className="text-gray-800 pt-8 dark:text-gray-200 text-2xl font-semibold">
                ĐẠI HỘI GIỚI TRẺ
            </h2>
            <h2 className="text-gray-800 pt-2 dark:text-gray-200 text-2xl font-semibold">
                VIỆT NAM TẠI NHẬT LẦN I
            </h2>
        </div>
        <div className="mt-8 mb-16 md:px-24 md:my-24 grid grid-flow-col grid-rows-2 grid-cols-2 md:gap-8">
          <div className="transform scale-110 -rotate-6">
            <img className='rounded-lg' src="/youth_event/pray-02.jpg" alt="" loading="lazy"/>
          </div>
          <div className="transform md:scale-100 rotate-6">
            <img className='rounded-lg' src="/youth_event/sinh-hoat.jpg" alt="" loading="lazy"/>
          </div>
          <div className="transform translate-y-6 -rotate-6">
            <img className='rounded-lg' src="/youth_event/youth-dance.jpg" alt="" loading="lazy"/>
          </div>
          <div className="row-start-1 col-start-2 rotate-6 transform ">
            <img className='rounded-lg' src="/youth_event/group-04.jpg" alt="" loading="lazy"/>
          </div>
        </div>
      </section>
    </Layout>
  )
}
