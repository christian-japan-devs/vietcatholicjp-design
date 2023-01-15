
import React, { useState, useEffect } from 'react'
import Layout from '../../../components/layout/Layout'
import {MetaProps} from '../../../components/layout/meta'
import {makeUrl} from '../../../lib/backendapi'
import {MassDateSchedule} from '../../../types/shedule'
import MassSchedule from '../../../components/home/mass_schedule'

const meta_data:MetaProps = {
  title:"Giờ Lễ tiếng Việt tại Nhật",
  description:"Tổng hợp các giờ Lễ Chúa Nhật hàng tuần tại Nhật Bản.",
  ogUrl:"",
  ogImage:"/vietcatholicjp-share.jpg"
}

export default function Index() {
  const [massScheduleHome, setMassScheduleHome] = useState<MassDateSchedule[]>([])

  useEffect(()=>{
      let headers = {
        'Content-Type': 'application/json',
      };
      fetch(makeUrl("/api/massschedule/"),{
          method: 'GET',
          headers: headers
        })
        .then((res) => res.json())
        .then((data) => {
          if(data.status=='ok'){
            setMassScheduleHome(data.mass_schedules)
            console.log(data.mass_schedules)
          }
      })
  },[])

  return (
    <Layout meta_data={meta_data} current_page='serve'>
      <section className="max-w-screen-4xl md:flex md:flex-col mb-32 md:items-center my-6 mx-auto px-4">
        <div className="space-y-4 mb-8 justify-center text-center">
          <h2 className="text-gray-900  dark:text-gray-200 text-2xl md:text-6xl font-semibold">
            Lịch giờ các Thánh Lễ tiếng Việt
          </h2>
          <h3 className="text-gray-600 mb-4 dark:text-gray-200 text-xl font-semibold">
            Giờ lễ Tiếng Việt tại Nhật.
          </h3>
        </div>
        {massScheduleHome?<MassSchedule schedules={massScheduleHome} is_home={false}/>
        :<div className="mb-32">
        Hiện tại chưa có lịch mới xin vui lòng quay lại sau.
        </div>}
      </section>
    </Layout>
  )
}
