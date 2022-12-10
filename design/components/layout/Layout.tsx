import NavBar from './navbar'
import Footer from './footer'
import Meta from './meta'
import {navigation, subNavigation} from '../../lib/constants'
import { Disclosure } from '@headlessui/react'
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
    return(
        <div>
            <Meta props={meta_data}/>
            <NavBar/>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <div className="flex sm:hidden fixed z-10 bottom-2 right-2">
                        <label htmlFor="my-drawer" className="btn btn-circle swap swap-rotate">
                            <input type="checkbox"/>
                            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                            <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                        </label>
                    </div>
                    <div className="z-0">{children}</div>
                    <Footer current_page={current_page}/>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    {subNavigation.map((navi,index) => (
                    <li key={index}>
                      <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full justify-between rounded-lg px-2 text-left text-base font-medium text-gray-900 dark:text-gray-200 hover:text-gray-200 hover:bg-sky-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span>{navi.name}</span>
                            <ChevronUpIcon
                              className={`${
                                open ? 'rotate-180 transform' : ''
                              } h-5 w-5 text-gray-700 dark:text-gray-200`}
                            />
                          </Disclosure.Button>
                          <div className="mx-4 border-b shadow border-gray-200">
                            <Disclosure.Panel className="px-6 text-sm text-gray-500 dark:text-gray-200">
                                {navi.sub_navi.map((item)=>(
                                <Link key={item.name} href={item.href} legacyBehavior>
                                <a
                                className="-mx-3 block rounded px-2 py-1 text-base font-semibold leading-7 text-gray-600 dark:text-gray-200 hover:text-gray-200 hover:bg-sky-500"
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
                    </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Layout;