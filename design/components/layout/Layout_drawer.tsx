import NavBar from './navbar'
import Footer from './footer'
import Meta from './meta'
import {navigation, subNavigation} from '../../lib/constants'
import { Disclosure, Dialog, Transition  } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import {MetaProps} from './meta'

type Props = {
    children: React.ReactNode
    meta_data: MetaProps
    current_page: string
}

export const siteTitle = 'AnViet'
  
const Layout = ({ children , meta_data, current_page}: Props) => {
    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return(
        <>
            <Meta props={meta_data}/>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <NavBar/>
                    <div className="z-0">{children}</div>
                    <Footer current_page={current_page}/>
                    <div className="flex sm:hidden fixed z-10 bottom-2 right-2">
                        <label htmlFor="my-drawer" className="btn btn-circle drawer-button swap swap-rotate">
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                        </label>
                    </div>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li>
                            <Link href="/" legacyBehavior>
                                <a className="flex items-center">
                                    <img src="/viet-catholicjp-256.svg" className="mr-3 h-6 sm:h-9" alt="Viet Catholic Japan" />
                                    <span className="self-center text-md md:text-xl font-semibold whitespace-nowrap dark:text-white">VietCatholicJapan</span>
                                </a>
                            </Link>
                        </li>
                    {subNavigation.map((navi,index) => (
                    <li key={index}>
                      <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full justify-between px-2 text-left text-base font-medium text-gray-900 dark:text-gray-200 hover:text-gray-200 hover:bg-sky-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-200 focus-visible:ring-opacity-75">
                            <span>{navi.name}</span>
                            <ChevronUpIcon
                              className={`${
                                open ? 'rotate-180 transform' : ''
                              } h-5 w-5 text-gray-700 dark:text-gray-200`}
                            />
                          </Disclosure.Button>
                          
                            <Disclosure.Panel className="px-2 text-sm text-gray-500 dark:text-gray-200">
                                <div className="mx-4 w-full flex flex-col space-y-2 border-b border-gray-200">
                                    {navi.sub_navi.map((item)=>(
                                    <Link key={item.name} href={item.href} legacyBehavior>
                                    <a
                                    className="w-full px-4 py-1 text-base text-gray-600 dark:text-gray-200 hover:text-gray-200 hover:bg-sky-500"
                                    >
                                        {item.name}
                                    </a>
                                    </Link>
                                    ))}
                                </div>
                            </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    </li>
                    ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Layout;