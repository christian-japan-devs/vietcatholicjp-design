import Link from 'next/link'

import {GroupsType} from '../../types/group'

type PostPreviewProps = {
    group_preview: GroupsType
}

export default function GroupPreviewCard({group_preview}:PostPreviewProps){
    return (
        <div className="border bg-base-100 shadow-xl rounded-xl shrink-0 first:pl-4 last:pr-4">
            <div className="card w-64 md:w-72">
                <Link href={"/cong-doan/chi-tiet/"+(group_preview.slug)} legacyBehavior>
                    <a>
                    <div className="">
                        <figure><img className="rounded-t-xl" src={group_preview.image} alt={group_preview.name} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {group_preview.name}
                            </h2>
                            <div className="card-actions justify-end">
                            <div className="badge badge-outline">{group_preview.province?.name}</div> 
                            <div className="badge badge-outline">{group_preview.church?.name}</div>
                            </div>
                        </div>
                    </div>
                    </a>
                </Link>
            </div>
        </div>
    )
}