import type { NextPage } from 'next'
import Link from 'next/link'
import {LetterType} from '../../types/letter'
import {getDateFromDateByHour} from '../../lib/helper'
import ReadMoreAndLess from '../ReadMoreAndLess'

type Props = {
  post: LetterType | undefined
  readMore?: boolean
}

const LetterView: NextPage<Props> = ({post,readMore}) => {
    if(post == undefined){
      return (<></>)
    }else{
    return(
    <div className="relative px-2 lg:px-8">
      <div className="mx-auto max-w-5xl pt-8 pb-8 sm:pt-18 sm:pb-18">
        <div className="md:px-16 md:py-4 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            {post.image_url?
            <Link href={"/chia-se/thu-muc-vu/"+post.slug} legacyBehavior>
              <a >
                  <img className="rounded-t-lg" src={post.image_url} alt={post.title} />
              </a>
            </Link>:""
            }
            <div className="p-4">
            <h1 className="text-3xl font-serif font-bold tracking-tight sm:text-center sm:text-4xl">
                {post.title}
              </h1>
              
              <div className="mt-2 flex items-center space-x-4">
                  <div className="flex-shrink-0">
                      <img className="w-8 h-8 rounded-full" src={post.author?.image} alt={post.title}/>
                  </div>
                  <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {post.author?.full_name}
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          {post.author?.email}
                      </p>
                  </div>
              </div>
              <span className="text-sm mt-4 text-gray-500 dark:text-gray-400">{getDateFromDateByHour(post.created_on?post.created_on:"",0)}</span>
                <div className="mt-4">
                <ReadMoreAndLess content={post.content} excerpt={post.excerpt}/>
                </div>
            </div>
        </div>
      </div>
    </div>
    )
  }
}

export default LetterView