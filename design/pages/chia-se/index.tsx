
import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Layout from '@/components/layout/Layout'
import PostSidePreviewCard from '@/components/card/postPreviewSide'
import {MetaProps} from '@/components/layout/meta'
import {makeUrl} from '@/lib/backendapi'
import {getDateFromDateByHour} from '@/lib/helper'
import PostType,{PostCard} from '@/types/post'
import {sample_posts, share_detail} from '@/types/sample_data/posts'
import {chia_se_nav} from '@/lib/constants'

const meta_data:MetaProps = {
  title: 'Các bài viết chia sẻ',
  description: 'Tổng hợp các bài viết chia sẻ người công giáo Việt Nam tại Nhật',
  ogUrl:"",
  ogImage:"/vietcatholicjp-share.jpg"
}

const Index: NextPage = () => {

  const [post, setPost] = useState<PostType>()
  const [posts, setPosts] = useState<PostCard[]>([])

  useEffect(()=>{
    let headers = {
      'Content-Type': 'application/json',
    };
    let url_string = window.location.href
    let url = new URL(url_string)
    let slug = url.searchParams.get('slug')
    let request_endpoint = makeUrl("/api/post/?type=home")
    if(slug){
      request_endpoint = makeUrl("/api/post/"+slug+"/")
    }
    fetch(request_endpoint,{
      method: 'GET',
      headers: headers
    })
    .then((res) => res.json())
    .then((data) => {
      if(data.status === 'ok'){
        setPost(data.post)
        setPosts(data.recent_posts)
      }
    })
  },[])

  return (
    <Layout meta_data={meta_data} current_page='share'>
      <div className="w-full bg-white dark:bg-gray-900/60">
        <div className="lg:flex xl:px-8 mx-auto max-w-screen-2xl">
          <aside className="fixed inset-0 z-20 flex-none h-full lg:w-48 xl:w-72 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:block hidden">
            <div className="overflow-y-auto z-20 h-full scrolling-touch max-w-2xs lg:h-[calc(100vh-3rem)] lg:block lg:sticky top:24 lg:top-28 lg:mr-0">
              <nav className="pt-16 px-1 pl-3 lg:pl-0 lg:pt-2 font-normal text-base lg:text-sm pb-10 lg:pb-20 sticky?lg:h-(screen-18)">
                <ul className="mb-0 mt-8 list-unstyled">
                    <h5 className="mb-2 text-xl font-semibold tracking-wide text-gray-900 uppercase lg:text-xl dark:text-white">
                      Chủ đề
                    </h5>
                    {chia_se_nav.sub_navi.map((nav,idx)=>(
                      <li key={idx} className="border-b border-gray-200 mt-2 pl-4 hover:bg-sky-100 dark:hover:bg-sky-600 rounded-md">
                        <Link href={nav.href} legacyBehavior>
                        <a className="py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white ">{nav.name}</a>
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
              <div className="flex-auto max-w-4xl min-w-0 pt-6 lg:px-2 xl:px-8 lg:pt-8 pb:12 xl:pb-24 lg:pb-16">
                
                <div className="relative px-2 lg:px-8">
                {post?
                  <div className="mx-auto max-w-5xl pt-4 pb-4 sm:pt-8 sm:pb-8">
                    <div className=" md:px-16 md:py-4 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                      {post?.meta_data?.image_url?
                        <Link href={"/chia-se/?slug="+post.meta_data?.slug} legacyBehavior>
                          <a >
                              <img className="rounded-t-lg" src={post.meta_data?.image_url} alt={post.meta_data?.title} />
                          </a>
                        </Link>:""
                        }
                      <div className='p-4'>
                        <h1 className="text-2xl my-4 font-serif font-bold tracking-tight sm:text-center sm:text-4xl">
                          {post?.meta_data.title}
                        </h1>
                        <div className="mt-2 flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <img className="w-8 h-8 rounded-full" src={post?.meta_data.author.image} alt={post?.meta_data.title}/>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    {post?.meta_data.author.full_name}
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    {post?.meta_data.author.email}
                                </p>
                            </div>
                        </div>
                        <span className="text-sm mt-2 text-gray-500 dark:text-gray-400">{getDateFromDateByHour(post?.meta_data.created_on?post?.meta_data.created_on:"",0)}</span>
                        {post?.meta_data?.audio_link?
                            <div className="mt-8 justify-center items-start h-full max-h-full w-full max-w-full border-gray-200 dark:border-gray-700">
                                <iframe className="w-full h-full" src={post.meta_data?.audio_link} title="Vietcatholicjp"></iframe>
                            </div>:""
                        }
                        {post?.content.map((chapter,idx)=>(
                          <div key={idx}>
                              <h2 className="relative group my-4 text-lg md:text-xl font-bold">{chapter.title}
                                <span id={chapter.slug} className="absolute -top-[140px]"></span>
                                <a className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100" href={"#"+chapter.slug} aria-label={"Link to this section: "+chapter.title}>
                                  #
                                </a>
                              </h2>
                              <div id="post_content" className="my-4 space-y-2 indent-4 md:indent-8 md:text-md lg:text-lg xl:text-xl" dangerouslySetInnerHTML={{ __html: chapter.content?chapter.content:"" }} />
                            </div>
                        ))}
                      </div>
                    </div>
                  </div>:<></>}
                </div>
                <div className="my-12 sm:flex sm:flex-col sm:items-center lg:hidden">
                  <div className="sm:justify-center not-prose relative  bg-gradient-to-r from-pink-400 to-blue-400 md:max-w-2xl lg:max-w-4xl sm:rounded-xl overflow-hidden dark:bg-slate-800/25">
                    <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" ></div>
                    <h1 className="text-4xl my-4 text-center font-serif tracking-tight sm:text-center sm:text-6xl">
                      Bài viết gần đây
                    </h1>
                    <div className="relative rounded-xl overflow-auto">
                      <div className="my-4 ms:my-12 relative w-full flex gap-6 snap-x overflow-x-auto pb-8">
                        <div className="snap-center shrink-0">
                          <div className="shrink-0 w-2 sm:w-24"></div>
                        </div>
                        {posts.map((post,idx)=>(
                          <div key={idx} className="snap-center shrink-0 first:pl-8 last:pr-8">
                            <div className="card w-64 md:w-96 bg-base-100 shadow-xl">
                              <Link href={"/chia-se/?slug="+(post?.slug)} legacyBehavior>
                                <a>
                                  <div className="card-body">
                                    <h2 className="card-title text-gray-700 dark:text-gray-200">{post?.title}</h2>
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <img className="w-8 h-8 rounded-full" src={post?.author.image} alt={post?.title}/>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                {post?.author.full_name}
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                {post?.author.email}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="text-sm mt-2 text-gray-500 dark:text-gray-400">{post?.created_on}</span>
                                    <p>{post?.excerpt}</p>
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
              <div className="flex-none hidden lg:w-80 xl:w-80 lg:mr-2 xl:mr-8 xl:text-sm lg:block">
                <div className="flex overflow-y-auto sticky top-28 flex-col justify-between pt-10 pb-6 h-[calc(100vh-5rem)]">
                  <div className="lg:px-2 xl:px-4">
                    <h5 className="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100">Gần đây</h5>
                    <ul className="text-slate-700 dark:text-white text-sm leading-6">
                      {posts.map((post,idx)=>(
                        <li key={idx} className="mt-4">
                          <PostSidePreviewCard props={{posts_preview:post}}/>
                        </li>
                      ))}
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

export default Index