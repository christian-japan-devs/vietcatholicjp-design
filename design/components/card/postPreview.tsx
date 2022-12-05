import Link from 'next/link'

import {PostCard} from '../../types/post'

type PostPreviewProps = {
    posts_preview: PostCard
}

export default function PostPreviewCard({ props }: { props: PostPreviewProps }){
    return (
        <div className="border bg-base-100 shadow-xl rounded-xl shrink-0 first:pl-4 last:pr-4">
            <div className="card w-64 md:w-72">
                <Link href={"/chia-se/chi-tiet/"+(props.posts_preview.slug)} legacyBehavior>
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
                                {props.posts_preview.author.user?.email}
                            </p>
                            </div>
                        </div>
                        <span className="text-sm mt-2 text-gray-500 dark:text-gray-400">{props.posts_preview.date}</span>
                        <p className="text-justify mt-2 text-sm">{props.posts_preview.excerpt}</p>
                    </div>
                    </a>
                </Link>
            </div>
        </div>
    )
}