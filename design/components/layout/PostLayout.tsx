
import type { NextPage } from 'next'
import React from 'react'
import Layout_Post from './Layout_Post'
import {MetaProps} from './meta'
import Link from 'next/link'
import {TitleSlug} from '../../types/post'
import {phung_vu_nav} from '../../lib/constants'

type Props = {
    children: React.ReactNode,
    chapters?: TitleSlug[],
    meta_data: MetaProps
    current_page: string
}

const PostLayout: NextPage<Props> = ({meta_data, current_page, children, chapters}) => {

  return (
    <Layout_Post meta_data={meta_data} current_page={current_page} page_navigates={chapters}>
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
                {children}
                <div className="flex-none block lg:hidden mb-8 w-72 lg:w-80 pl-4 mr-4 xl:text-sm">
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
                </div>

              </div>
              <div className="flex-none hidden sm:block w-56 lg:w-56 xl:w-72 pl-4 mr-4 xl:text-sm lg:block">
                <div className="flex overflow-y-auto sticky top-28 flex-col justify-between pt-10 pb-6 h-[calc(100vh-5rem)]">
                    <div className="pl-2">
                        <h5 className="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100">Phụ lục</h5>
                        <ul className="text-slate-700 dark:text-slate-100 text-sm leading-6">
                            {chapters?.map((chapter,idx)=>(
                                <li key={idx}><a href={"#"+(chapter.slug)} className="block py-1 hover:text-sky-500 dark:text-slate-200 dark:hover:text-slate-100">{chapter.chapter_title}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Layout_Post>
  )
}

export default PostLayout
