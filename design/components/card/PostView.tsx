import type { NextPage } from 'next'
import {useState,useEffect} from 'react'
import Link from 'next/link'
import PostType from '../../types/post'
import {getDateFromDateByHour} from '../../lib/helper'

type Props = {
  post: PostType | undefined
  readMore?: boolean
}

const PostView: NextPage<Props> = ({post,readMore}) => {
  const [isReadMoreShown, setReadMoreShown] = useState(false)
  const toggleBtn = () => {
    setReadMoreShown(prevState => !prevState)
  }
  if(post == undefined){
    return (<></>)
  }else{
    return(
    <div className="relative px-2 lg:px-8">
      <div className="mx-auto max-w-5xl pt-8 pb-8 sm:pt-18 sm:pb-18">
        <div className="md:px-16 md:py-4 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            {post.meta_data?.image_url?
            <Link href={"/chia-se/?slug="+post.meta_data?.slug} legacyBehavior>
              <a >
                  <img className="rounded-t-lg" src={post.meta_data?.image_url} alt={post.meta_data?.title} />
              </a>
            </Link>:""
            }
            <div className="p-4">
            <h1 className="text-3xl font-serif font-bold tracking-tight sm:text-center sm:text-4xl">
                {post.meta_data?.title}
              </h1>
              
              <div className="mt-2 flex items-center space-x-4">
                  <div className="flex-shrink-0">
                      <img className="w-8 h-8 rounded-full" src={post.meta_data?.author.image} alt={post.meta_data?.title}/>
                  </div>
                  <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {post.meta_data?.author.saint_name} {post.meta_data?.author.full_name}
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          {post.meta_data?.author.email}
                      </p>
                  </div>
              </div>
              <span className="text-sm mt-4 text-gray-500 dark:text-gray-400">{getDateFromDateByHour(post.meta_data?.created_on,0)}</span>
              {post.meta_data?.audio_link?
                  <div className="mt-8 justify-center items-start h-full max-h-full w-full max-w-full border-gray-200 dark:border-gray-700">
                      <iframe className="w-full h-full" src={post.meta_data?.audio_link} title="Vietcatholicjp"></iframe>
                  </div>:""
              }
              <div className="my-2">
                  {
                  isReadMoreShown?  
                  post.content.map((chapter,idx)=>(
                    <div key={idx}>
                      <h2 className="relative group my-4 text-lg md:text-xl font-bold">{chapter.title}
                        <span id={chapter.slug} className="absolute -top-[140px]"></span>
                        <a className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100" href="#leading-paragraph" aria-label="Link to this section: Leading paragraph">
                          #
                        </a>
                      </h2>
                      {chapter.image_url&&
                        <Link href={"/chia-se/?slug="+post.meta_data?.slug} legacyBehavior>
                          <a >
                              <img className="rounded-lg" src={chapter?.image_url} alt={chapter?.title} />
                          </a>
                        </Link>
                      }
                      <div className="space-y-2 text-md md:text-lg mt-4" dangerouslySetInnerHTML={{ __html: chapter.content?chapter.content:"" }} />
                    </div>
                  )):<div>
                  <h2 className="relative group my-4 text-lg md:text-xl font-bold">{post.content[0].title}
                    <span id={post.content[0].slug} className="absolute -top-[140px]"></span>
                    <a className="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100" href="#leading-paragraph" aria-label="Link to this section: Leading paragraph">
                      #
                    </a>
                  </h2>
                  <div className="space-y-2" dangerouslySetInnerHTML={{ __html: post.content[0].content?post.content[0].content:"" }} />
                </div>
                }
              </div>
              <button id="continue"
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={toggleBtn}
                >
                {isReadMoreShown?'Thu nhỏ':'Đọc tiếp'}
              </button>
            </div>
        </div>
      </div>
    </div>
    )
  }
}

export default PostView