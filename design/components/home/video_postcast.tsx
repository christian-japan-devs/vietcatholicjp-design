import type { NextPage } from 'next'
import React, { useEffect,useState } from 'react'
import {VideoPostCastType} from '../../types/letter'
import {makeUrl} from '../../lib/backendapi'

const VideoPostCast: NextPage = () => {
    const [videoLinks, setVideoLinks] = useState<VideoPostCastType[]>([])
    useEffect(()=>{
      let headers = {
        'Content-Type': 'application/json',
      };
      fetch(makeUrl("/api/videoLinks/?type=home"),{
          method: 'GET',
          headers: headers
        })
        .then((res) => res.json())
        .then((data) => {
          if(data.status=='ok'){
            setVideoLinks(data.video_links)
          }
      })
    },[])
    return (
    <div className="mt-12 sm:flex sm:flex-col sm:items-center">
        <div className="sm:justify-center not-prose relative bg-slate-50 md:max-w-3xl lg:max-w-5xl  rounded-xl overflow-hidden dark:bg-slate-800/25">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" ></div>
          <h1 className="text-3xl mt-4 text-center font-serif tracking-tight sm:text-center sm:text-5xl">
            Chia sẻ Tin Mừng
          </h1>
          <div className="relative rounded-xl overflow-auto">
            <div className="my-4 ms:my-12 relative w-full flex gap-6 snap-x overflow-x-auto pb-8">
              <div className="snap-center shrink-0">
                <div className="shrink-0 w-2 sm:w-48"></div>
              </div>
              {videoLinks.map((video,idx)=>(
                <div key={idx} className="snap-center shrink-0 first:pl-8 last:pr-8">
                  <iframe className="shrink-0 w-80 h-56 md:w-96 md:h-64 rounded-lg shadow-xl bg-white" src={"https://www.youtube.com/embed/"+(video.youtube_url)+"?start=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
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

export default VideoPostCast;