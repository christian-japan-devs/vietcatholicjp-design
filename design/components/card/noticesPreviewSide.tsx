import Link from 'next/link'

import {NoticeType} from '../../types/notice'
import {getDateFromDateByHour} from '../../lib/helper'

type PostPreviewProps = {
    posts_preview: NoticeType
}

export default function NoticeSidePreviewCard({ props }: { props: PostPreviewProps }){
    return (
        <div className="w-48 md:w-64 bg-base-100 shadow border rounded-xl">
            <Link href={"/thong-bao/?slug="+(props.posts_preview.slug)} legacyBehavior>
                <a>
                <div className="p-4">
                    <h2 className="card-title text-gray-600 dark:text-gray-200">{props.posts_preview.title}</h2>
                    <div className="flex mt-2 items-center space-x-4">
                        <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src={props.posts_preview.author.image} alt={props.posts_preview.title}/>
                        </div>
                        <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-800 truncate dark:text-white">
                            {props.posts_preview.author.full_name}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {props.posts_preview.author?.email}
                        </p>
                        </div>
                    </div>
                    <span className="text-sm mt-2 text-gray-500 dark:text-gray-400">{getDateFromDateByHour(props.posts_preview.created_on,0)}</span>
                    <p className="text-justify mt-2 text-sm">{props.posts_preview.excerpt}</p>
                </div>
                </a>
            </Link>
        </div>
    )
}