import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
export default function MyDisclosure({
    title,
    content,
    className
    }:{
        title:string,
        content:string,
        className?: string
    }) {
    return (
      <Disclosure as="div" className={className}>
        {({open}) => (
            <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg backdrop-blur-md bg-white/20 px-4 py-2 text-left text-lg text-gray-800 dark:text-white">
                <span>{title}</span>
                <ChevronUpIcon
                    className={`${
                    open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-white`}
                />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-600 dark:text-gray-200">
            {content}
            </Disclosure.Panel>
            </>
        )}
      </Disclosure>
    )
}