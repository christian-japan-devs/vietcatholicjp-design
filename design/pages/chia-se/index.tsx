
import Link from 'next/link'
import Layout from '../../components/layout/Layout'
import PostPreviewCard from '../../components/card/postPreview'
import {MetaProps} from '../../components/layout/meta'
import {sample_posts,post_detail, sample_letter1} from '../../types/sample_data/posts'

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
        <div className="lg:flex px-4 lg:px-8 mx-auto max-w-screen-2xl">
          <aside className="fixed inset-0 z-20 flex-none h-full w-72 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-72 lg:block hidden">
            <div className="overflow-y-auto z-20 h-full bg-white scrolling-touch max-w-2xs lg:h-[calc(100vh-3rem)] lg:block lg:sticky top:24 lg:top-28 dark:bg-gray-900 lg:mr-0">
              <nav className="pt-16 px-1 pl-3 lg:pl-0 lg:pt-2 font-normal text-base lg:text-sm pb-10 lg:pb-20 sticky?lg:h-(screen-18)">
                <ul className="mb-0 list-unstyled">
                  <li className="mt-8">
                    <h5 className="mb-2 text-xl font-semibold tracking-wide text-gray-900 uppercase lg:text-xl dark:text-white">
                      Chủ đề
                    </h5>
                    <li>
                      <Link href="/chia-se/tong-thu/" legacyBehavior>
                      <a data-sidebar-item="" className="py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white ">Tông thư</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/chia-se/suy-niem/" legacyBehavior>
                      <a data-sidebar-item="" className="py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white ">Suy niệm</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/chia-se/cong-doan/" legacyBehavior>
                      <a data-sidebar-item="" className="py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white ">Cộng đoàn</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/chia-se/gioi-tre/" legacyBehavior>
                      <a data-sidebar-item="" className="py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white ">Giới trẻ</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/chia-se/nhat-ban/" legacyBehavior>
                      <a data-sidebar-item="" className="py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white ">Nhật Bản</a>
                      </Link>
                    </li>
                  </li>
                </ul>
                <ul className="mb-0 list-unstyled">
                  <li className="mt-8">
                    <h5 className="mb-2 text-xl font-semibold tracking-wide text-gray-700 lg:text-xl dark:text-white">
                      Gần đây
                    </h5>
                  </li>
                  {sample_posts.map((post,idx)=>(
                    <li key={idx} className="mt-4">
                      <PostPreviewCard props={{posts_preview:post}}/>
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
                    <ul className="text-slate-700 text-sm leading-6">
                      <li><a href="#title" className="block py-2 text-lg text-gray-900 hover:text-sky-500 dark:text-slate-400 dark:hover:text-slate-300">{post_detail.title}</a></li>
                      {post_detail.content.map((chapter,idx)=>(
                        <li key={idx}><a href={"#"+(chapter.slug)} className="block py-1 hover:text-sky-500 dark:text-slate-400 dark:hover:text-slate-300">{chapter.chapter_title}</a></li>
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
