
import Layout from '../../components/layout/Layout'
import React, { useState, useEffect } from 'react'
import {MetaProps} from '../../components/layout/meta'
import Groups from '../../components/home/groups'
import {GroupsType} from '../../types/group'

const meta_data:MetaProps = {
  title:"Giáo đoàn công giáo Việt Nam tại Nhật",
  description:"Giới thiệu về giáo đoàn công giáo Việt Nam tại Nhật",
  ogUrl:"/cong-doan",
  ogImage:"/vietcatholicjp-share.jpg"
}

export default function Index() {
  const [groups, setGroups] = useState<GroupsType[]>([])
  return (
    <Layout meta_data={meta_data} current_page='comunity'>
      <section className="max-w-6xl mt-6 mx-auto px-4 bg-accent-dark">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Giới thiệu</h1>
          </div>
          <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
            <div className="flex flex-col items-center pt-8">
              <span>
                <img className="justify-center" alt="" aria-hidden="true" src="/viet-catholicjp-312.svg"/>
              </span>
              <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">VietCatholicJapan</h3>
              <div className="text-gray-800 text-xl dark:text-gray-400">Giáo đoàn công giáo Việt Nam tại Nhật</div>
              <div className="text-gray-800 text-xl dark:text-gray-400">在日ヴィエトナム人・カトリック共同体</div>
              <div className="flex space-x-3 pt-6">
                <a className="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href="mailto:vietcatholicjp@gmail.com">
                  <span className="sr-only">Email</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-8 w-8">
                    <path d="M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z"></path><path d="m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z"></path>
                  </svg>
                </a>
                <a className="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href="https://facebook.com">
                  <span className="sr-only">Facebook</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-8 w-8">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
                <a className="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href="https://twitter.com/Twitter">
                  <span className="sr-only">twitter</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-8 w-8">
                    <path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z">
                    </path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="prose max-w-none text-md text-justify pt-8 pb-8 dark:prose-dark xl:col-span-2">
              <p>Ở châu Á, Việt Nam là nước đón nhận Tin Mừng khá sớm. Theo sử sách thì vào năm 1533 đã có những nhà truyền giáo đầu tiên tới Việt Nam, và những địa danh đầu tiên đón nhận Tin Mừng: Trà Lũ (giáo xứ Phú Nhai ngày nay), Quần Anh (sau kị húy đổi thành Quần Phương), và Ninh Cường đều là những miền đất thuộc giáo phận Bùi Chu. Từ thế kỷ 17, các thừa sai Dòng Tên, Hội Thừa sai Paris, Dòng Âu Tinh Chân đất, và nhất là Dòng Đa Minh truyền giáo tại đây.

Giáo phận Bùi Chu ngày nay chỉ thuộc địa bàn của sáu huyện và một phần thành phố, ở về phía đông nam giáp biển của tỉnh Nam Định, thuộc đồng bằng Bắc Bộ. Tuy nhiên, trước khi được hình thành như ngày hôm nay, giáo phận Bùi Chu thuộc Địa phận Đàng Ngoài (được thành lập năm 1659). Sau đó, giáo phận Bùi Chu thuộc Địa phận Đông Đàng Ngoài (được tách ra từ địa phận Đàng Ngoài vào năm 1679) rồi Địa phận Trung Đàng Ngoài (được tách ra từ địa phận Đông Đàng Ngoài vào năm 1848).

Vào năm 1936, Tòa Thánh đã tách phần đất tả ngạn sông Hồng của Địa phận Trung để thành lập Giáo phận Thái Bình, phần còn lại của Địa phận Trung là Giáo phận Bùi Chu ngày nay.</p>
            </div>
          </div>
        </div>
      </section>
      <Groups groups={groups}/>
    </Layout>
  )
}
