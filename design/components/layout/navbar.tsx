import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {navigation, subNavigation, href_signin} from '../../lib/constants'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div id="top" className="border-b pb-2 border-b-slate-400 dark:border-b-slate-300 dark:bg-slate-800">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="px-6 pt-4 lg:px-8">
        <div>
          <nav className="flex h-9 items-center justify-between" aria-label="Global">
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <Link href="/" legacyBehavior>
                <a className="flex items-center">
                    <img src="/viet-catholicjp-128.svg" className="mr-3 h-6 sm:h-9" alt="Viet Catholic Japan" />
                    <span className="self-center text-md md:text-xl font-semibold whitespace-nowrap dark:text-white">VietCatholicJapan</span>
                </a>
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 dark:text-gray-200 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:justify-center lg:gap-x-12">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} legacyBehavior>
                  <a  className="font-semibold text-gray-900 dark:text-gray-200 dark:hover:text-sky-400 hover:text-sky-500">
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                <Link href={href_signin} legacyBehavior>
                <a
                  className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 hover:text-sky-500 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-gray-200 dark:hover:text-gray-400"
                >
                  Đăng nhập
                </a>
              </Link>
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white dark:bg-slate-900 px-6 py-6 lg:hidden">
              <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                <svg
                  className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC" />
                      <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex h-9 items-center justify-between">
                <div>
                  <Link href="/" legacyBehavior>
                    <a className="flex items-center">
                        <img src="/viet-catholicjp-128.svg" className="mr-3 h-6 sm:h-9" alt="Viet Catholic Japan" />
                        <span className="self-center text-md md:text-xl font-semibold whitespace-nowrap dark:text-white">VietCatholicJapan</span>
                    </a>
                  </Link>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6 dark:text-gray-200" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {subNavigation.map((navi,index) => (
                      <Disclosure key={index}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full justify-between rounded-lg px-2 py-2 text-left text-base font-medium text-gray-900 dark:text-gray-200 hover:text-gray-200 hover:bg-sky-600 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span>{navi.name}</span>
                            <ChevronUpIcon
                              className={`${
                                open ? 'rotate-180 transform' : ''
                              } h-5 w-5 text-gray-700 dark:text-gray-200`}
                            />
                          </Disclosure.Button>
                          <div className="mx-4 border-l border-r border-b border-gray-300">
                          <Disclosure.Panel className="px-6 py-2 text-sm text-gray-500 dark:text-gray-200">
                            {navi.sub_navi.map((item)=>(
                              <Link key={item.name} href={item.href} legacyBehavior>
                              <a
                              className="-mx-3 block rounded-lg py-2 px-2 text-base font-semibold leading-7 text-gray-600 dark:text-gray-200 hover:text-gray-200 hover:bg-sky-600"
                              >
                                {item.name}
                              </a>
                              </Link>
                            ))}
                          </Disclosure.Panel>
                          </div>
                        </>
                      )}
                    </Disclosure>
                    ))}
                  </div>
                  <div className="py-6">
                    <Link href={href_signin} legacyBehavior>
                      <a
                        className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 dark:text-gray-200 hover:text-blue-500 text-gray-900 hover:bg-gray-400/10"
                      >
                        Đăng nhập
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
    </div>
  )
}