
import Layout from '../../components/layout/Layout'
import {MetaProps} from '../../components/layout/meta'
import PostSidePreviewCard from '../../components/card/postPreviewSide'
import Link from 'next/link'
import {sample_posts,post_detail,sample_letter1,sample_letter2} from '../../types/sample_data/posts'

const meta_data:MetaProps = {
  title:post_detail.title,
  description:post_detail.excerpt,
  ogUrl:"",
  ogImage:""
}

export default function Index() {

  return (
    <Layout meta_data={meta_data}>
      <div className="w-full bg-white">
        <div className="lg:flex pl-4 lg:px-8 mx-auto max-w-screen-2xl">
          <aside className="fixed inset-0 z-20 flex-none h-full w-48 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-48 lg:block hidden">
            <div className="overflow-y-auto z-20 h-full scrolling-touch max-w-2xs lg:h-[calc(100vh-3rem)] lg:block lg:sticky top:24 lg:top-28 lg:mr-0">
              <nav className="pt-16 px-1 pl-3 lg:pl-0 lg:pt-2 font-normal text-base lg:text-sm pb-10 lg:pb-20 sticky?lg:h-(screen-18)">
                <ul className="mb-0 list-unstyled">
                  <li className="mt-8">
                    <h5 className="mb-2 text-xl font-semibold tracking-wide text-gray-900 uppercase lg:text-xl dark:text-white">
                      Menu
                    </h5>
                    <li className="border-b border-gray-200 mt-2 pl-4 hover:bg-sky-100 dark:hover:bg-sky-600 rounded-md">
                      <Link href="/phung-vu/thanh-le" legacyBehavior>
                        <a className="py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-900 dark:hover:text-white ">Thánh lễ</a>
                      </Link>
                    </li>
                    <li className="border-b border-gray-200 mt-2 pl-4 hover:bg-sky-100 dark:hover:bg-sky-600 rounded-md">
                      <Link href="/phung-vu/tin-mung" legacyBehavior>
                      <a className="py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-900 dark:hover:text-white ">Tin mừng</a>
                      </Link>
                    </li>
                    <li className="border-b border-gray-200 mt-2 pl-4 hover:bg-sky-100 dark:hover:bg-sky-600 rounded-md">
                      <Link href="/phung-vu/giao-ly/" legacyBehavior>
                      <a  className="py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-900 dark:hover:text-white ">Giáo lý</a>
                      </Link>
                    </li >
                    <li className="border-b border-gray-200 mt-2 pl-4 hover:bg-sky-100 dark:hover:bg-sky-600 rounded-md">
                      <Link href="/phung-vu/kinh-cau/" legacyBehavior>
                      <a  className="py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-900 dark:hover:text-white ">Kinh cầu</a>
                      </Link>
                    </li>
                    <li className="border-b border-gray-200 mt-2 pl-4 hover:bg-sky-100 dark:hover:bg-sky-600 rounded-md">
                      <Link href="/phung-vu/nghi-thuc/" legacyBehavior>
                      <a className="py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-900 dark:hover:text-white ">Nghi thức</a>
                      </Link>
                    </li>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>
          <div className="fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/60 hidden" id="sidebarBackdrop"></div>
          <main className="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible">
            <div className="flex w-full">

              <div className="flex-auto max-w-4xl min-w-0 pt-6 lg:px-4 lg:pt-8 pb:12 xl:pb-24 lg:pb-16">

                <div className="relative px-2 lg:px-8">
                  <div className="mx-auto max-w-5xl pt-4 pb-4 sm:pt-8 sm:pb-8">
                    <div className="p-4 md:px-16 md:py-4 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                      <div>
                        <h1 className="text-3xl font-serif font-bold tracking-tight sm:text-center sm:text-4xl">
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
                        <p className="mt-6 text-sm md:text-md text-justify text-gray-800 dark:text-gray-200 ">
                        {sample_letter1.paragraph_1}
                        </p>
                        <p className="mt-6 text-sm md:text-md text-justify text-gray-800 dark:text-gray-200 ">
                        {sample_letter1.paragraph_2}
                        </p>
                        <div className="mt-8 flex gap-x-4 sm:justify-center">
                        <Link href={"/chia-se/chi-tiet/"+(sample_letter1.slug)} legacyBehavior>
                          <a
                            className="inline-block rounded-lg px-4 py-1.5 text-sm font-semibold leading-7 text-gray-900 ring-1 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 dark:ring-gray-200 ring-gray-900/10 hover:ring-gray-900/20"
                          >
                            Đọc tiếp
                            <span className="text-gray-500 dark:text-gray-200" aria-hidden="true">
                              &rarr;
                            </span>
                          </a>
                        </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative px-2 lg:px-8">
                  <div className="mx-auto max-w-5xl pt-8 pb-8 sm:pt-18 sm:pb-18">
                    <div className="p-4 md:px-16 md:py-4 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                      <div>
                        <h1 className="text-3xl font-serif font-bold tracking-tight sm:text-center sm:text-4xl">
                        {sample_letter2.title}
                        </h1>
                        <h4 className="text-xl my-2 sm:my-4 sm:text-center sm:text-2xl">{sample_letter2.date}</h4>
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
                        <p className="mt-6 text-sm md:text-md text-justify text-gray-800 dark:text-gray-200 ">
                          {sample_letter2.paragraph_1}
                        </p>
                        <p className="mt-6 text-sm md:text-md text-justify text-gray-800 dark:text-gray-200 ">
                          {sample_letter2.paragraph_2}
                        </p>
                        <p className="mt-6 text-sm md:text-md text-justify text-gray-800 dark:text-gray-200 ">
                          {sample_letter2.paragraph_3}
                        </p>
                        <p className="mt-6 text-sm md:text-md text-justify text-gray-800 dark:text-gray-200 ">
                          {sample_letter2.paragraph_4}
                        </p>
                      </div>
                    </div>
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
                        {sample_posts.map((post,idx)=>(
                          <div key={idx} className="snap-center shrink-0 first:pl-8 last:pr-8">
                            <div className="card w-64 md:w-96 bg-base-100 shadow-xl">
                              <Link href={"/chia-se/chi-tiet/"+(post.slug)} legacyBehavior>
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
                                                {post.author.user?.email}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="text-sm mt-2 text-gray-500 dark:text-gray-400">{post.date}</span>
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
                    <ul className="mb-0 list-unstyled">
                      <li className="mt-8">
                        <h5 className="mb-2 text-xl font-semibold tracking-wide text-gray-700 lg:text-xl dark:text-gray-900">
                          Gần đây
                        </h5>
                      </li>
                      {sample_posts.map((post,idx)=>(
                        <li key={idx} className="mt-4">
                          <PostSidePreviewCard props={{posts_preview: post}} />
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
