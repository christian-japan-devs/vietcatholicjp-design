import Link from 'next/link'
import {sample_letter2} from '../../types/sample_data/posts'

export default function SecondLetter(){
    return(
    <div className="relative px-2 lg:px-8">
      <div className="mx-auto max-w-5xl pt-8 pb-8 sm:pt-18 sm:pb-18">
        <div className="p-4 md:px-16 md:py-4 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <div>
            <h1 className="text-3xl font-serif font-bold tracking-tight sm:text-center sm:text-4xl">
            {sample_letter2.title}
            </h1>
            <h4 className="text-xl my-2 sm:my-4 sm:text-center sm:text-2xl">{sample_letter2.date}</h4>
            <div className="mt-2 flex items-center space-x-4">
              <div className="flex-shrink-0">
                  <img className="w-8 h-8 rounded-full" src={sample_letter2.author.image} alt={sample_letter2.title}/>
              </div>
              <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {sample_letter2.author.full_name}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {sample_letter2.author.user?.email}
                  </p>
              </div>
            </div>
            <p className="mt-6 text-sm md:text-md text-justify text-gray-800 dark:text-gray-200 ">
              {sample_letter2.paragraph_1}
            </p>
            <p className="mt-6 text-sm md:text-md text-justify text-gray-800 dark:text-gray-200 ">
              {sample_letter2.paragraph_2}
            </p>
            <p className="mt-6 text-sm md:text-md text-justify text-gray-800 dark:text-gray-200 ">
              {sample_letter2.paragraph_3}
            </p>
            <p className="mt-6 text-sm md:text-md text-justify text-gray-800 dark:text-gray-200 ">
              {sample_letter2.paragraph_4}
            </p>
          </div>
        </div>
      </div>
    </div>
    )
}