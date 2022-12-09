import GroupPreviewCard from '../card/groupPreview'
import {sample_notices} from '../../types/sample_data/posts'
import {GroupsType} from '../../types/group'
import SelectPrefectures from '../select/prefectures'
import SelectRegions from '../select/regions'

export const group_sample:GroupsType[]= [
    {
        name:'Cộng đoàn Tokyo',
        slug:'cong-doan-tokyo',
        image:'/vietcatholicjp-bg.jpeg',
        area:'Kanto',
        province:'Tokyo'
    },{
    name:'Cộng đoàn Osaka',
    slug:'cong-doan-osaka',
    image:'/youth_event/group-04.jpg',
    area:'Kansai',
    province:'Osaka'
},]

export default function Groups()
{
    return(
        <div className="my-12 sm:flex sm:flex-col sm:items-center">
            <div className="sm:justify-center not-prose relative bg-gradient-to-r from-teal-400 to-cyan-400 md:max-w-3xl lg:max-w-5xl sm:rounded-xl overflow-hidden dark:bg-slate-800/25">
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" ></div>
            <h1 className="text-3xl my-4 text-center font-serif tracking-tight sm:text-center sm:text-5xl">
                Cộng đoàn
            </h1>
            <div className="relative rounded-xl overflow-auto">
            <div className="flex gap-2 mx-4 md:mx-12 lg:mx-24">
                <div className="form-control w-full min-w-sm">
                    <SelectRegions/>
                    </div>
                    <div className="form-control w-full min-w-xs">
                    <SelectPrefectures/>
                    </div>
                </div>
                <div className="my-4 ms:my-12 relative w-full flex gap-6 snap-x overflow-x-auto pb-8">
                    <div className="snap-center shrink-0">
                        <div className="shrink-0 w-2 sm:w-24"></div>
                    </div>
                    {group_sample.map((group,idx)=>(
                        <GroupPreviewCard key={idx} group_preview={group} />
                    ))}
                    <div className="snap-center shrink-0">
                        <div className="shrink-0 w-24s sm:w-48"></div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}