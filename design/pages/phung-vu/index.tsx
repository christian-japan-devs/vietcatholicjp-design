
import { useState } from 'react'
import Layout from '../../components/layout/Layout'
import {MetaProps} from '../../components/layout/meta'
import Link from 'next/link'
import {phung_vu_nav} from '../../lib/constants'
import {gospel,gospel_reflect,gospel_previews} from '../../types/sample_data/posts'

const meta_data:MetaProps = {
  title:gospel.title,
  description:gospel.excerpt,
  ogUrl:"",
  ogImage:""
}

export default function Index() {

  const [isPlay,setIsPlay] = useState(false)

  return (
    <Layout meta_data={meta_data} current_page='serve'>
      <div className="w-full bg-white dark:bg-gray-900/60">
        <div className="lg:flex lg:px-8 mx-auto max-w-screen-2xl">
          <aside className="fixed inset-0 z-20 flex-none h-full w-48 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-48 lg:block hidden">
            <div className="overflow-y-auto z-20 h-full scrolling-touch max-w-2xs lg:h-[calc(100vh-3rem)] lg:block lg:sticky top:24 lg:top-28 lg:mr-0">
              <nav className="pt-16 px-1 pl-3 lg:pl-0 lg:pt-2 font-normal text-base lg:text-sm pb-10 lg:pb-20 sticky?lg:h-(screen-18)">
                <ul className="mb-0 mt-8 list-unstyled">
                    <h5 className="mb-2 text-xl font-semibold tracking-wide text-gray-900 uppercase lg:text-xl dark:text-white">
                      Menu
                    </h5>
                    {phung_vu_nav.sub_navi.map((nav,idx)=>(
                      <li key={idx} className="border-b border-gray-200 mt-2 pl-4 hover:bg-sky-100 dark:hover:bg-sky-600 rounded-md">
                        <Link href={nav.href} legacyBehavior>
                          <a className="py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-200 dark:hover:text-white ">{nav.name}</a>
                        </Link>
                      </li>
                    ))}
                </ul>
              </nav>
            </div>
          </aside>
          <div className="fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/60 hidden" id="sidebarBackdrop"></div>
          <main className="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible">
            <div className="flex w-full">
              <div className="mx-auto flex-auto max-w-4xl min-w-0 pt-6 lg:px-4 lg:pt-8 pb:12 xl:pb-24 lg:pb-16">
                <div className="relative px-2 lg:px-8">
                  <div className="mx-auto max-w-5xl pt-4 pb-4 sm:pt-8 sm:pb-8">
                    <div className="p-4 md:px-16 md:py-4 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                      <h1 id="title" className="my-4 text-center text-4xl lg:text-4xl font-extrabold tracking-tight text-gray-700 dark:text-white">{gospel.title}</h1>
                      <h4 className="text-lg mt-4 text-center text-gray-700 dark:text-gray-400">{gospel.date}</h4>
                      <div className="space-y-2 mt-4">
                        <div className="relative">
                          <div className="bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div className="bg-cyan-500 dark:bg-cyan-400 w-1/2 h-2" role="progressbar" aria-label="music progress" aria-valuenow={2240} aria-valuemin={0} aria-valuemax={4550}></div>
                          </div>
                          <div className="ring-cyan-500 dark:ring-cyan-400 ring-2 absolute left-1/2 top-1/2 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center bg-white rounded-full shadow">
                            <div className="w-1.5 h-1.5 bg-cyan-500 dark:bg-cyan-400 rounded-full ring-1 ring-inset ring-slate-900/5"></div>
                          </div>
                        </div>
                        <div className="flex justify-between text-sm leading-6 font-medium tabular-nums">
                          <div className="text-cyan-500 dark:text-slate-100">05:00</div>
                          <div className="text-slate-500 dark:text-slate-400">10:50</div>
                        </div>
                      </div>
                      <div className="mb-8 bg-slate-50 text-slate-500 dark:bg-slate-600 dark:text-slate-200 rounded-xl flex items-center">
                        <div className="flex-auto flex items-center justify-evenly">
                          <button type="button" aria-label="Add to favorites">
                            <svg width="24" height="24">
                              <path d="M7 6.931C7 5.865 7.853 5 8.905 5h6.19C16.147 5 17 5.865 17 6.931V19l-5-4-5 4V6.931Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </button>
                          <button type="button" className="hidden sm:block lg:hidden xl:block" aria-label="Previous">
                            <svg width="24" height="24" fill="none">
                              <path d="m10 12 8-6v12l-8-6Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M6 6v12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </button>
                          <button type="button" aria-label="Rewind 10 seconds">
                            <svg width="24" height="24" fill="none">
                              <path d="M6.492 16.95c2.861 2.733 7.5 2.733 10.362 0 2.861-2.734 2.861-7.166 0-9.9-2.862-2.733-7.501-2.733-10.362 0A7.096 7.096 0 0 0 5.5 8.226" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M5 5v3.111c0 .491.398.889.889.889H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </button>
                        </div>
                        <button onClick={()=>setIsPlay(!isPlay)} type="button" className="bg-white text-slate-900 dark:bg-slate-100 dark:text-slate-700 flex-none -my-2 mx-auto w-14 h-14 sm:w-20 sm:h-20 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center" aria-label="Pause">
                          {isPlay?<svg className="hidden sm:block" width="30" height="32" fill="currentColor">
                            <rect x="6" y="4" width="4" height="24" rx="2" />
                            <rect x="20" y="4" width="4" height="24" rx="2" />
                          </svg>:<svg className="hidden sm:block" width="30" height="32" fill="currentColor">
                            <rect x="10" y="4" width="3" height="27" rx="1" />
                            <rect className="-rotate-45" x="3" y="11" width="3" height="20" rx="1"/>
                            <rect className="rotate-45" x="29" y="-6" width="3" height="20" rx="1"/>
                          </svg>
                          }
                          {isPlay?<svg className="flex sm:hidden" width="30" height="32" fill="currentColor">
                            <rect x="9" y="8" width="2" height="18" rx="1" />
                            <rect x="19" y="8" width="2" height="18" rx="1" />
                          </svg>:<svg className="flex sm:hidden" width="30" height="32" fill="currentColor">
                            <rect x="10" y="7" width="2" height="20" rx="1" />
                            <rect className="-rotate-45" x="2" y="12" width="2" height="16" rx="1"/>
                            <rect className="rotate-45" x="26" y="-4" width="2" height="16" rx="1"/>
                          </svg>
                          }
                        </button>
                        <div className="flex-auto flex items-center justify-evenly">
                          <button type="button" aria-label="Skip 10 seconds">
                            <svg width="24" height="24" fill="none">
                              <path d="M17.509 16.95c-2.862 2.733-7.501 2.733-10.363 0-2.861-2.734-2.861-7.166 0-9.9 2.862-2.733 7.501-2.733 10.363 0 .38.365.711.759.991 1.176" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M19 5v3.111c0 .491-.398.889-.889.889H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </button>
                          <button type="button" className="hidden sm:block lg:hidden xl:block" aria-label="Next">
                            <svg width="24" height="24" fill="none">
                              <path d="M14 12 6 6v12l8-6Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M18 6v12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </button>
                          <button type="button" className="rounded-lg text-xs leading-6 font-semibold px-2 ring-2 ring-inset ring-slate-500 text-slate-500 dark:text-slate-100 dark:ring-0 dark:bg-slate-500">
                            1x
                          </button>
                        </div>
                      </div>
                      <div>
                          {gospel.content.map((chapter,idx)=>(
                            <div key={idx}>
                              <h2 className="relative group my-4 text-lg md:text-xl font-bold">{chapter.chapter_title}
                                <span id={chapter.slug} className="absolute -top-[140px]"></span>
                                <a className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100" href="#leading-paragraph" aria-label="Link to this section: Leading paragraph">
                                  #
                                </a>
                              </h2>
                              {chapter.paragraphs.map((paragraph,idx)=>(
                                <p key={idx} className="mt-6 text-sm md:text-md text-justify text-gray-800 dark:text-gray-200">{paragraph}</p>
                              ))}
                            </div>
                          ))}
                        </div>
                    </div>
                  </div>
                </div>

                <div className="relative px-2 lg:px-8">
                  <div className="mx-auto max-w-5xl pt-8 pb-8 sm:pt-18 sm:pb-18">
                    <div className="p-4 md:px-16 md:py-4 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                      <div>
                      <h1 className="text-3xl mt-4 font-serif font-bold tracking-tight text-center sm:text-4xl">{gospel_reflect.title}
                          <span id={gospel_reflect.slug} className="absolute -top-[140px]"></span>
                          <a className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100" href="#leading-paragraph" aria-label="Link to this section: Leading paragraph">
                            #
                          </a>
                        </h1>
                        <h4 className="text-xl my-2 sm:my-4 sm:text-center sm:text-2xl">{gospel_reflect.date}</h4>
                        <div className="mt-2 flex items-center space-x-4">
                          <div className="flex-shrink-0">
                              <img className="w-8 h-8 rounded-full" src={gospel_reflect.author.image} alt={gospel_reflect.title}/>
                          </div>
                          <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                  {gospel_reflect.author.full_name}
                              </p>
                              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                  {gospel_reflect.author.user?.email}
                              </p>
                          </div>
                        </div>
                        {gospel_reflect.content.map((reflect,idx)=>(
                          <p key={idx} className="mt-6 text-sm md:text-md text-justify text-gray-800 dark:text-gray-200 ">
                          {reflect}
                        </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="my-12 sm:flex sm:flex-col sm:items-center">
                  <div className="sm:justify-center not-prose relative  bg-gradient-to-r from-pink-400 to-blue-400 md:max-w-3xl lg:max-w-4xl sm:rounded-xl overflow-hidden dark:bg-slate-800/25">
                    <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" ></div>
                    <h1 className="text-4xl my-4 text-center font-serif tracking-tight sm:text-center sm:text-6xl">
                      Các bài đọc Chúa Nhật tiếp theo
                    </h1>
                    <div className="relative rounded-xl overflow-auto">
                      <div className="my-4 ms:my-12 relative w-full flex gap-6 snap-x overflow-x-auto pb-8">
                        <div className="snap-center shrink-0">
                          <div className="shrink-0 w-2 sm:w-24"></div>
                        </div>
                        {gospel_previews.map((post,idx)=>(
                          <div key={idx} className="snap-center shrink-0 first:pl-8 last:pr-8">
                            <div className="card w-64 md:w-96 bg-base-100 shadow-xl">
                              <Link href={"/phung-vu/loi-chua/"+(post.slug)} legacyBehavior>
                                <a>
                                  <div className="card-body">
                                    <h2 className="card-title text-gray-700 dark:text-gray-100">{post.title}</h2>
                                    <span className="text-sm mt-2 text-gray-500 dark:text-gray-100">{post.date}</span>
                                    <p className="text-justify">{post.excerpt}</p>
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
              </div>

              <div className="flex-none hidden w-72 lg:w-80 pl-4 mr-4 xl:text-sm lg:block">
                <div className="flex overflow-y-auto sticky top-28 flex-col justify-between pt-10 pb-6 h-[calc(100vh-5rem)]">
                  <div className="pl-2">
                  <h5 className="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100">Phụ lục</h5>
                    <ul className="text-slate-700 dark:text-slate-100 text-sm leading-6">
                      <li><a href="#title" className="block py-2 text-lg text-gray-900 hover:text-sky-500 dark:text-slate-200 dark:hover:text-slate-100">{gospel.title}</a></li>
                      {gospel.content.map((chapter,idx)=>(
                        <li key={idx}><a href={"#"+(chapter.slug)} className="block py-1 hover:text-sky-500 dark:text-slate-200 dark:hover:text-slate-100">{chapter.chapter_title}</a></li>
                      ))}
                      <li><a href={"#"+(gospel_reflect.slug)} className="block py-2 text-lg text-gray-900 hover:text-sky-500 dark:text-slate-200 dark:hover:text-slate-100">{gospel_reflect.title}</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              
            </div>
          </main>
        </div>
      </div>
    </Layout>
  )
}
