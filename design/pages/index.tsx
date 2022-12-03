import Layout from '../components/layout/Layout'
import {MetaProps} from '../components/layout/meta'
import Link from 'next/link'
import {href_gt_dh,href_pv_gio_le} from '../lib/constants'

import {sample_posts,sample_gospel_video,sample_letter1,sample_letter2} from '../types/sample_data/posts'

const meta_data:MetaProps = {
  title:"Giáo đoàn công giáo Việt Nam tại Nhật",
  description:"Giáo đoàn công giáo Việt Nam tại Nhật",
  ogUrl:"/",
  ogImage:"/vietcatholicjp-bg.jpeg"
}

import {mass_home_schedule} from '../types/sample_data/mass_schedule'

export default function Home() {

  return (
    <Layout meta_data={meta_data}>
      <div className="sm:flex sm:flex-col sm:items-center">
        <div className="sm:justify-center pt-96 mx-2 mt-2 sm:pb-96 sm:pt-2 sm:px-12 lg:mx-12 md:max-w-3xl lg:max-w-6xl item-center bg-hero-index bg-cover bg-center border rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <div className="backdrop-blur-sm py-2 rounded bg-white/10 sm:backdrop-blur-sm sm:bg-white/5 sm:rounded-2xl">
              <h5 className="mb-2 mt-2 px-12 sm:px-24 text-center text-2xl md:text-5xl font-bold text-gray-100 dark:text-white">Giáo đoàn công giáo Việt Nam tại Nhật</h5>
              <h5 className="mb-2 text-xl text-center text-gray-100 sm:text-3xl dark:text-gray-400">在日ヴィエトナム人・カトリック共同体</h5>
            </div>
        </div>
      </div>

      <div className="relative px-2 lg:px-8">
        <div className="mx-auto max-w-5xl pt-4 pb-4 sm:pt-8 sm:pb-8">
          <div className="p-4 md:px-16 md:py-4 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <div>
              <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-center sm:text-6xl">
                {sample_letter1.title}
              </h1>
              <div className="mt-2 flex items-center space-x-4">
                  <div className="flex-shrink-0">
                      <img className="w-8 h-8 rounded-full" src={sample_letter1.author.image} alt={sample_letter1.title}/>
                  </div>
                  <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          {sample_letter1.author.full_name}
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          {sample_letter1.author.user?.email}
                      </p>
                  </div>
              </div>
              <span className="text-sm mt-2 text-gray-500 dark:text-gray-400">{sample_letter1.date}</span>
              <p className="mt-6 text-sm md:text-xl text-justify text-gray-800 dark:text-gray-200 ">
              {sample_letter1.paragraph_1}
              </p>
              <p className="mt-6 text-sm md:text-xl text-justify text-gray-800 dark:text-gray-200 ">
              {sample_letter1.paragraph_2}
              </p>
              <div className="mt-8 flex gap-x-4 sm:justify-center">
              <Link href={"/chia-se/"+(sample_letter1.slug)} legacyBehavior>
                <a
                  className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 dark:ring-gray-200 ring-gray-900/10 hover:ring-gray-900/20"
                >
                  Đọc tiếp
                  <span className="text-gray-400" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
              </Link>
              </div>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
              <svg
                className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                  fillOpacity=".3"
                  d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                  <linearGradient
                    id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                    x1="1155.49"
                    x2="-78.208"
                    y1=".177"
                    y2="474.645"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9089FC" />
                    <stop offset={1} stopColor="#FF80B5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-5xl lg:min-w-5xl bg-white border p-4 border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 md:flex md:flex-col md:items-center my-6 mx-auto px-4">
        <div className="space-y-4 mb-8 justify-center text-center">
            <h1 className="text-2xl font-serif font-bold tracking-tight sm:text-center sm:text-6xl">
              {mass_home_schedule.title}
            </h1>
            <h3 className='text-gray-800 mt-2 text-center text-2xl sm:text-3xl dark:text-gray-200 font-semibold'>Ngày {mass_home_schedule.date}</h3>
        </div>
        <div className="max-w-5xl lg:min-w-5xl md:justify-center">
          <div className="flex flex-col items-center">
            <div className="justify-center">
              <Link href={href_pv_gio_le} legacyBehavior>
                <a className="inline-block rounded-lg px-2 py-1 text-sm leading-7 text-gray-800 dark:text-gray-200 hover:text-gray-600 hover:bg-gray-100 ring-1 ring-gray-200 hover:ring-gray-200">
                  Xem đầy đủ
                  <span className="text-gray-800 dark:text-gray-200" aria-hidden="true">&rarr;</span>
                </a>
              </Link>
          </div>
          </div>
              <div className="overflow-x-auto mt-8 relative dark:bg-slate-900 dark:border rounded shadow-md sm:rounded-lg">
                <table className="w-full min-w-5xl max-w-screen-lg mt-2 text-sm text-left text-gray-700 dark:text-gray-200">
                    <thead className="text-xs text-gray-900 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Giờ lễ
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Cha
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Nhà thờ
                            </th>
                            <th scope="col" className="py-3 px-6">
                              Tỉnh
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                      {mass_home_schedule.time_schedule.map((mass,idx)=>(
                        <tr key={idx} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="py-4 px-6">
                              {mass.time}
                            </td>
                            <td className="py-4 px-6">
                              {mass.father}
                            </td>
                            <td className="py-4 px-6">
                              {mass.church_name}
                            </td>
                            <td className="py-4 px-6">
                              {mass.province}
                            </td>
                        </tr>
                      ))}
                    </tbody>
                </table>
              </div>
        </div>
      </section>

      <div className="my-12 sm:flex sm:flex-col sm:items-center">
        <div className="sm:justify-center not-prose relative bg-gradient-to-r from-teal-400 to-cyan-400 md:max-w-3xl lg:max-w-5xl sm:rounded-xl overflow-hidden dark:bg-slate-800/25">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" ></div>
          <h1 className="text-4xl my-4 text-center font-serif tracking-tight sm:text-center sm:text-6xl">
            Thông báo
          </h1>
          <div className="relative rounded-xl overflow-auto">
            <div className="my-4 ms:my-12 relative w-full flex gap-6 snap-x overflow-x-auto pb-8">
              <div className="snap-center shrink-0">
                <div className="shrink-0 w-2 sm:w-24"></div>
              </div>
              <div className="snap-center shrink-0 first:pl-8 last:pr-8">
                <div className="card w-64 md:w-96 bg-base-100 shadow-xl">
                  <Link href={href_gt_dh} legacyBehavior>
                    <a>
                      <div className="card-body">
                        <h2 className="card-title">Đại hội giới trẻ 2023</h2>
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <img className="w-8 h-8 rounded-full" src="/youth_event/father-01.jpg" alt="Neil image"/>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    P.M Nguyen Huu Hien
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    pmnguyenhuuhien@gmail.com
                                </p>
                            </div>
                        </div>
                        <span className="text-sm mt-2 text-gray-500 dark:text-gray-400">28/11/2022</span>
                        <p>Đại hội giới trẻ công giáo Việt Nam tại Nhật Bản lần thứ II, ngày 4 và 5 tháng 5, 2023.</p>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="snap-center shrink-0 first:pl-8 last:pr-8">
                <div className="card w-64 md:w-96 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">Lịch tháng 1, 2023</h2>
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                            <img className="w-8 h-8 rounded-full" src="/youth_event/missa-01.jpg" alt="Neil image"/>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Micaer Nguyen Minh Lap
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                               mi_nobito@yahoo.com
                            </p>
                        </div>
                    </div>
                    <p>Xin gửi tới quý cộng đoàn giờ Lễ, sinh hoạt của các cộng đoàn tháng 1 năm 2023 ...</p>
                  </div>
                </div>
              </div>
              <div className="snap-center shrink-0 first:pl-8 last:pr-8">
                <div className="card w-64 md:w-96 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">Các lớp học giáo lý</h2>
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                            <img className="w-8 h-8 rounded-full" src="/youth_event/father-01.jpg" alt="Neil image"/>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                P.M Nguyen Huu Hien
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                pmnguyenhuuhien@gmail.com
                            </p>
                        </div>
                    </div>
                    <p>Về việc chuẩn bị để tham dự các lớp giáo lý hôn phối, tân tòng...</p>
                  </div>
                </div>
              </div>
              <div className="snap-center shrink-0">
                <div className="shrink-0 w-24s sm:w-48"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="justify-center pb-72 mt-2 sm:min-w-xl sm:pb-96 sm:pt-2 sm:px-12 lg:mx-12 md:max-w-3xl lg:max-w-5xl item-center bg-hero-youth-event bg-cover bg-center border sm:rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center backdrop-blur-sm py-2 rounded bg-white/10 sm:backdrop-blur-sm sm:bg-white/5 sm:rounded-2xl">
            <div className="justify-center text-center">
              <h1 className="mb-5 text-4xl text-white dark:text-gray-800 sm:text-6xl font-bold">Đại hội giới trẻ</h1>
              <p className="mb-5 px-12 text-white dark:text-gray-800 text-xl sm:text-2xl">Đại hội giới trẻ công giáo Việt Nam tại Nhật Bản lần thứ II, ngày 4 và 5 tháng 5, 2023.</p>
              <Link href={href_gt_dh} legacyBehavior>
                <a
                      className="inline-block rounded-lg px-2 py-1 text-sm leading-7 text-white dark:text-gray-800 hover:text-gray-600 hover:bg-gray-100 ring-1 ring-gray-200 hover:ring-gray-200"
                      >Chi tiết
                        <span className="text-gray-200" aria-hidden="true">
                          &rarr;
                        </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 sm:flex sm:flex-col sm:items-center">
        <div className="sm:justify-center not-prose relative bg-slate-50 md:max-w-3xl lg:max-w-5xl  rounded-xl overflow-hidden dark:bg-slate-800/25">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" ></div>
          <h1 className="text-4xl mt-4 text-center font-serif tracking-tight sm:text-center sm:text-6xl">
            Nghe tin mừng hàng tuần
          </h1>
          <div className="relative rounded-xl overflow-auto">
            <div className="my-4 ms:my-12 relative w-full flex gap-6 snap-x overflow-x-auto pb-8">
              <div className="snap-center shrink-0">
                <div className="shrink-0 w-2 sm:w-48"></div>
              </div>
              {sample_gospel_video.map((video,idx)=>(
                <div key={idx} className="snap-center shrink-0 first:pl-8 last:pr-8">
                  <iframe className="shrink-0 w-80 h-56 md:w-96 md:h-64 rounded-lg shadow-xl bg-white" src={"https://www.youtube.com/embed/"+(video.link_id)+"?start=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
              ))}
              <div className="snap-center shrink-0">
                <div className="shrink-0 w-24s sm:w-48"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative px-2 lg:px-8">
          <div className="mx-auto max-w-5xl pt-8 pb-8 sm:pt-18 sm:pb-18">
            <div className="p-4 md:px-16 md:py-4 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <div>
                <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-center sm:text-6xl">
                {sample_letter2.title}
                </h1>
                <h4 className="text-xl sm:text-center sm:text-3xl">{sample_letter2.date}</h4>
                <div className="mt-2 flex items-center space-x-4">
                  <div className="flex-shrink-0">
                      <img className="w-8 h-8 rounded-full" src={sample_letter2.author.image} alt={sample_letter2.title}/>
                  </div>
                  <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          {sample_letter2.author.full_name}
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          {sample_letter2.author.user?.email}
                      </p>
                  </div>
                </div>
                <p className="mt-6 text-sm md:text-xl text-justify text-gray-800 dark:text-gray-200 ">
                  {sample_letter2.paragraph_1}
                </p>
                <p className="mt-6 text-sm md:text-xl text-justify text-gray-800 dark:text-gray-200 ">
                  {sample_letter2.paragraph_2}
                </p>
                <p className="mt-6 text-sm md:text-xl text-justify text-gray-800 dark:text-gray-200 ">
                  {sample_letter2.paragraph_3}
                </p>
                <p className="mt-6 text-sm md:text-xl text-justify text-gray-800 dark:text-gray-200 ">
                  {sample_letter2.paragraph_4}
                </p>
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC" />
                      <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
      </div>

      <div className="my-12 sm:flex sm:flex-col sm:items-center">
        <div className="sm:justify-center not-prose relative  bg-gradient-to-r from-pink-400 to-blue-400 md:max-w-3xl lg:max-w-5xl sm:rounded-xl overflow-hidden dark:bg-slate-800/25">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" ></div>
          <h1 className="text-4xl my-4 text-center font-serif tracking-tight sm:text-center sm:text-6xl">
            Bài viết gần đây
          </h1>
          <div className="relative rounded-xl overflow-auto">
            <div className="my-4 ms:my-12 relative w-full flex gap-6 snap-x overflow-x-auto pb-8">
              <div className="snap-center shrink-0">
                <div className="shrink-0 w-2 sm:w-24"></div>
              </div>
              {sample_posts.map((post,idx)=>(
                <div key={idx} className="snap-center shrink-0 first:pl-8 last:pr-8">
                  <div className="card w-64 md:w-96 bg-base-100 shadow-xl">
                    <Link href={"/chia-se/"+(post.slug)} legacyBehavior>
                      <a>
                        <div className="card-body">
                          <h2 className="card-title">{post.title}</h2>
                          <div className="flex items-center space-x-4">
                              <div className="flex-shrink-0">
                                  <img className="w-8 h-8 rounded-full" src={post.author.image} alt={post.title}/>
                              </div>
                              <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                      {post.author.full_name}
                                  </p>
                                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                      {post.author.user?.email}
                                  </p>
                              </div>
                          </div>
                          <span className="text-sm mt-2 text-gray-500 dark:text-gray-400">{post.date}</span>
                          <p>{post.excerpt}</p>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
              <div className="snap-center shrink-0">
                <div className="shrink-0 w-24s sm:w-48"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}
