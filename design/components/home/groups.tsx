import type { NextPage } from 'next'
import React, { useState } from 'react'
import GroupPreviewCard from '../card/groupPreview'
import {GroupsType} from '../../types/group'
import SelectPrefectures from '../select/prefectures'
import SelectRegions from '../select/regions'

type Props = {
    groups: GroupsType[] | undefined
    title: string
}

const Groups: NextPage<Props> = ({title, groups}) => {

    const [selectedRegion, setSelectedRegion] = useState('all')
    const [selectedPerfecture, setSelectedPerfecture] = useState('all')

    const selectRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedRegion(value);
    };

    const selectPerfectureChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedPerfecture(value);
    };

    if(groups == undefined){
    return (<></>)
    }else{
        return(
            <div className="my-12 sm:flex sm:flex-col sm:items-center">
                <div className="sm:justify-center not-prose relative bg-gradient-to-r from-teal-400 to-cyan-400 md:max-w-3xl lg:max-w-5xl sm:rounded-xl overflow-hidden dark:bg-slate-800/25">
                <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" ></div>
                <h1 className="text-3xl my-4 text-center font-serif tracking-tight sm:text-center sm:text-5xl">
                    {title}
                </h1>
                <div className="relative rounded-xl overflow-auto">
                    <div className="flex gap-2 mx-4 md:mx-12 lg:mx-24">
                        <div className="form-control w-full min-w-sm">
                            <SelectRegions onChange={selectRegionChange}/>
                        </div>
                        <div className="form-control w-full min-w-xs">
                            <SelectPrefectures selectedRegion={selectedRegion} onChange={selectPerfectureChange}/>
                        </div>
                    </div>
                    <div className="my-4 ms:my-12 relative w-full flex gap-6 snap-x overflow-x-auto pb-8">
                        <div className="snap-center shrink-0">
                            <div className="shrink-0 w-2 sm:w-24"></div>
                        </div>
                        {groups.map((group,idx)=>(
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
}
export default Groups