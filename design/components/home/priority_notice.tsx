
import Link from 'next/link'
import {href_gt_dh} from '../../lib/constants'
import {sample_letter1} from '../../types/sample_data/posts'

export default function PriorityNotice()
{
    return(
    <div className="flex flex-col items-center">
        <div className="justify-center pb-72 mt-2 sm:min-w-xl sm:pb-96 sm:pt-2 sm:px-12 lg:mx-12 md:max-w-3xl lg:max-w-5xl item-center bg-hero-youth-event bg-cover bg-center border sm:rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center backdrop-blur-sm py-2 rounded bg-white/10 sm:backdrop-blur-sm sm:bg-white/5 sm:rounded-2xl">
            <div className="justify-center text-center">
              <h1 className="mb-5 text-3xl text-white dark:text-gray-800 sm:text-4xl font-bold">Đại hội giới trẻ</h1>
              <p className="mb-5 px-12 text-white dark:text-gray-800 text-xl sm:text-2xl">Đại hội giới trẻ công giáo Việt Nam tại Nhật Bản lần thứ II, ngày 4 và 5 tháng 5, 2023.</p>
              <Link href={href_gt_dh} legacyBehavior>
                <a
                      className="inline-block rounded-lg px-2 py-1 text-sm leading-7 text-white dark:text-gray-800 hover:text-gray-600 hover:bg-gray-100 ring-1 ring-gray-200 hover:ring-gray-200"
                      >Chi tiết
                      <span className="text-gray-200" aria-hidden="true">
                        &rarr;
                      </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
    </div>
    )
}