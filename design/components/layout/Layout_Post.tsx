import NavBar from './navbar'
import Footer from './footer'
import Meta from './meta'
import {navigation, subNavigation} from '../../lib/constants'
import { Disclosure, Dialog, Transition  } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import {MetaProps} from './meta'
import {TitleSlug} from '../../types/post'

type Props = {
    children: React.ReactNode
    meta_data: MetaProps
    current_page: string
    page_navigates?:TitleSlug[]
}

export const siteTitle = 'vietcatholicjp'
  
const Layout_Post = ({ children , meta_data, current_page,page_navigates}: Props) => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return(
        <>
            <Meta props={meta_data}/>
            <NavBar/>
            <div className="z-0">{children}</div>
            <label onClick={openModal} className="btn btn-circle backdrop-blur-sm bg-white/20 border-none flex sm:hidden fixed z-10 bottom-2 right-2">
                <svg className="fill-current text-gray-800 hover:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
            </label>
            <a href="#top" className="btn btn-circle backdrop-blur-sm bg-white/20 border-none flex sm:hidden fixed z-10 bottom-14 right-2">
                <ChevronUpIcon className="h-8 w-8 text-gray-800 hover:text-white"/>
            </a>
            <Footer current_page={current_page}/>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-6 text-left align-middle shadow-xl transition-all">
                        <div className="mt-2">
                            <label htmlFor="my-drawer" className="drawer-overlay"></label>
                                <h3 className="text-slate-900 font-semibold mb-4 text-xl leading-6 dark:text-slate-100">Di chuyển tới mục</h3>
                                <ul className="mb-0 mt-8 list-unstyled">
                                    {page_navigates?.map((chapter,idx)=>(
                                        <li key={idx} className="border-b border-gray-200 mt-2 pl-4 hover:bg-sky-100 dark:hover:bg-sky-600 rounded-md">
                                            <a href={"#"+(chapter.slug)} onClick={closeModal} className="py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-200 dark:hover:text-white ">
                                                {chapter.title?chapter.title:chapter.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                        </div>
                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
                </Dialog>
            </Transition>
        </>
    );
}

export default Layout_Post;