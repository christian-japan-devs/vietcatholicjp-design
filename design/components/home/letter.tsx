import Link from 'next/link'
import {sample_letter1} from '../../types/sample_data/posts'

export default function FirstLetter(){
    return(
    <div className="relative px-2 lg:px-8">
        <div className="mx-auto max-w-5xl pt-4 pb-4 sm:pt-8 sm:pb-8">
          <div className="p-4 md:px-16 md:py-4 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <div>
              <h1 className="text-3xl font-serif font-bold tracking-tight sm:text-center sm:text-4xl">
                {sample_letter1.title}
              </h1>
              <div className="mt-2 flex items-center space-x-4">
                  <div className="flex-shrink-0">
                      <img className="w-8 h-8 rounded-full" src={sample_letter1.author.image} alt={sample_letter1.title}/>
                  </div>
                  <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          {sample_letter1.author.full_name}
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          {sample_letter1.author.user?.email}
                      </p>
                  </div>
              </div>
              <span className="text-sm mt-2 text-gray-500 dark:text-gray-400">{sample_letter1.date}</span>
              <p className="mt-6 text-sm md:text-md text-justify text-gray-800 dark:text-gray-200 ">
              {sample_letter1.paragraph_1}
              </p>
              <p className="mt-6 text-sm md:text-md text-justify text-gray-800 dark:text-gray-200 ">
              {sample_letter1.paragraph_2}
              </p>
              <div className="mt-8 flex gap-x-4 sm:justify-center">
              <Link href={"/chia-se/chi-tiet/"+(sample_letter1.slug)} legacyBehavior>
                <a
                  className="inline-block rounded-lg px-4 py-1.5 text-sm font-semibold leading-7 text-gray-900 ring-1 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 dark:ring-gray-200 ring-gray-900/10 hover:ring-gray-900/20"
                >
                  Đọc tiếp
                  <span className="text-gray-600 dark:text-gray-200" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
              </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
}