
import type { NextPage } from 'next'
import Layout from '../../../components/layout/Layout'
import {MetaProps} from '../../../components/layout/meta'
import Link from 'next/link'
import {chia_se_nav} from '../../../lib/constants'
import {LetterType} from '../../../types/letter'
import {getAllLetterWithSlug,getLetterAndMores} from '../../../lib/backendapi'
import {getDateFromDateByHour} from '../../../lib/helper'

const meta_data:MetaProps = {
  title:"",
  description:"",
  ogUrl:"",
  ogImage:""
}

interface Props { 
    letter: LetterType
    recentlyPostedLetter: LetterType[]
}

type Params = {
    params: {
      slug: string
    }
}

export async function getStaticProps({ params }: Params) {
    const data = await getLetterAndMores(params.slug)
    return {
        props: {
            letter: data.letter,
            recentlyPostedLetter: data.recentlyPostedLetter
        },
    }
}

export async function getStaticPaths(){
    const letters: LetterType[] = await getAllLetterWithSlug()
    return {
        paths: letters.map(({ slug }) => ({ 
            params: { slug },
        })),
        fallback: false,
    }
}

const letters: NextPage<Props> = ({ letter, recentlyPostedLetter }) => {
    meta_data.title = letter.title
    meta_data.description = letter.excerpt
    meta_data.ogImage = letter.image
  return (
    <Layout meta_data={meta_data} current_page='share'>
      <div className="w-full bg-white">
        <div className="lg:flex px-4 lg:px-8 mx-auto max-w-screen-2xl">
          <aside className="fixed inset-0 z-20 flex-none h-full w-72 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-72 lg:block hidden">
            <div className="overflow-y-auto z-20 h-full bg-white scrolling-touch max-w-2xs lg:h-[calc(100vh-3rem)] lg:block lg:sticky top:24 lg:top-28 dark:bg-gray-900 lg:mr-0">
              <nav className="pt-16 px-1 pl-3 lg:pl-0 lg:pt-2 font-normal text-base lg:text-sm pb-10 lg:pb-20 sticky?lg:h-(screen-18)">
                <ul className="mb-0 list-unstyled">
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
                <ul className="mb-0 list-unstyled">
                  <li className="mt-8">
                    <h5 className="mb-2 text-xl font-semibold tracking-wide text-gray-700 lg:text-xl dark:text-white">
                      Gần đây
                    </h5>
                  </li>
                  {recentlyPostedLetter&&recentlyPostedLetter.map((post,idx)=>(
                    <li key={idx} className="mt-4">
                      <div className="w-48 md:w-64 bg-base-100 shadow border rounded-xl">
                        <Link href={"/chia-se/"+(post.slug)} legacyBehavior>
                          <a>
                            <div className="p-4">
                              <h2 className="card-title text-gray-600 dark:text-gray-200">{post.title}</h2>
                              <div className="flex items-center space-x-4">
                                  <div className="flex-shrink-0">
                                      <img className="w-8 h-8 rounded-full" src={post.author.image} alt={post.title}/>
                                  </div>
                                  <div className="flex-1 min-w-0">
                                      <p className="text-sm font-medium text-gray-600 truncate dark:text-white">
                                          {post.author.full_name}
                                      </p>
                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                          {post.author.email}
                                      </p>
                                  </div>
                              </div>
                              <span className="text-sm mt-2 text-gray-500 dark:text-gray-400">{post.created_on}</span>
                              <p>{post.excerpt}</p>
                            </div>
                          </a>
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>
          <div className="fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/60 hidden" id="sidebarBackdrop"></div>
          <main className="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible">
            <div className="flex w-full">
              <div className="flex-auto max-w-4xl min-w-0 pt-6 lg:px-8 lg:pt-8 pb:12 xl:pb-24 lg:pb-16">
                <div className="relative px-2 lg:px-8">
                    <div className="pb-4 mb-8 border-b border-gray-200 dark:border-gray-800">
                    <h1 id="title" className="mb-4 md:text-center text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-700 dark:text-white">{letter.title}</h1>
                    <div className="mt-2 flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <img className="w-8 h-8 rounded-full" src={letter.author.image} alt={letter.title}/>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                {letter.author.saint_name} {letter.author.full_name}
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    {letter.author.email}
                                </p>
                            </div>
                        </div>
                    <span className="text-sm mt-4 ml-12 text-gray-500 dark:text-gray-400">{getDateFromDateByHour(letter.created_on,0)}</span>
                    </div>
                    <div id="phan-gioi-thieu">
                        <div className="space-y-2" dangerouslySetInnerHTML={{ __html: letter.content?letter.content:"" }} />
                    </div>
                </div>
                <div className="my-12 sm:flex sm:flex-col sm:items-center lg:hidden">
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
                        {recentlyPostedLetter&&recentlyPostedLetter.map((post,idx)=>(
                          <div key={idx} className="snap-center shrink-0 first:pl-8 last:pr-8">
                            <div className="card w-64 md:w-96 bg-base-100 shadow-xl">
                              <Link href={"/chia-se/"+(post.slug)} legacyBehavior>
                                <a>
                                  <div className="card-body">
                                    <h2 className="card-title text-gray-700 dark:text-gray-200">{post.title}</h2>
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <img className="w-8 h-8 rounded-full" src={post.author.image} alt={post.title}/>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                {post.author.full_name}
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                {post.author.email}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="text-sm mt-2 text-gray-500 dark:text-gray-400">{post.created_on}</span>
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
              </div>
              <div className="flex-none hidden w-64 pl-8 mr-8 xl:text-sm lg:block">
                <div className="flex overflow-y-auto sticky top-28 flex-col justify-between pt-10 pb-6 h-[calc(100vh-5rem)]">
                  <div className="px-8">
                    <h5 className="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100">Phụ lục</h5>
                    
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
  
export default letters
