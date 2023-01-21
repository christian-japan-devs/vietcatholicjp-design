import Link from 'next/link'

import {GroupsType} from '../../types/group'

type PostPreviewProps = {
    group_preview: GroupsType
}

export default function GroupPreviewCard({group_preview}:PostPreviewProps){
    return (
        <div className="border bg-base-100 shadow-xl rounded-xl shrink-0 first:pl-4 last:pr-4">
            <div className="card w-64 md:w-72">
                
                    <div className="">
                        <Link href={"/cong-doan/?slug="+(group_preview.slug)} legacyBehavior>
                            <a>
                                <figure>
                                    <img className="rounded-t-xl" src={group_preview.image} alt={group_preview.name} />
                                </figure>
                            </a>
                        </Link>
                        <div className="card-body">
                        <Link href={"/cong-doan/?slug="+(group_preview.slug)} legacyBehavior>
                            <a>
                            <h2 className="card-title text-center">
                                {group_preview.name}
                            </h2>
                            </a>
                        </Link>
                            <p className="border border-gray-400 text-center p-1 rounded-full church">{group_preview.province?.name}-{group_preview.province?.kanji}</p> 
                            <div className="flex flex-col space-y-2">
                                <a href={group_preview?.url} target="_blank" className='text-center p-2 border border-gray-400 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600' rel="noopener noreferrer">
                                Facebook
                                </a>
                                <a href={"/church/?id="+group_preview?.church?.id} className="text-center p-2 border border-gray-400 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600">{group_preview.church?.name}</a>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}