
import { useState } from 'react'
import NavBar from '../../components/layout/navbar'

export default function Index() {

  return (
    <>
      <NavBar />
      <section className="max-w-6xl mt-6 mx-auto px-4 bg-accent-dark">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Giới thiệu</h1>
          </div>
          <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
            <div className="flex flex-col items-center pt-8">
              <span>
                <img alt="" aria-hidden="true" src="/VCJ-50-50.jpg"/>
              </span>
              <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">VietCatholicJapan</h3>
              <div className="text-gray-800 text-xl dark:text-gray-400">Giáo đoàn công giáo Việt Nam tại Nhật</div>
              <div className="text-gray-800 text-xl dark:text-gray-400">在日ヴィエトナム人・カトリック共同体</div>
              <div className="flex space-x-3 pt-6">
                <a className="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href="mailto:address@yoursite.com">
                  <span className="sr-only">Email</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-8 w-8">
                    <path d="M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z"></path><path d="m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z"></path>
                  </svg>
                </a>
                <a className="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href="https://facebook.com">
                  <span className="sr-only">Facebook</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-10 w-10">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
                <a className="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href="https://twitter.com/Twitter">
                  <span className="sr-only">twitter</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-8 w-8">
                    <path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z">
                    </path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
              <p>Tails Azimuth is a professor of atmospheric sciences at the Stanford AI Lab. His research interests includes complexity modelling of tailwinds, headwinds and crosswinds.</p>
              <p>He leads the clean energy group which develops 3D air pollution-climate models, writes differential equation solvers, and manufactures titanium plated air ballons. In his free time he bakes raspberry pi.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
