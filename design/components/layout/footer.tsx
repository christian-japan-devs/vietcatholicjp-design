import Link from 'next/link';
import {navigation} from '../../lib/constants';

export default function Footer() {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <ul className="items-center justify-center mt-8 space-y-5 grid grid-cols-3 sm:flex sm:space-x-4 sm:space-y-0">
                {
                    navigation.map((item) => (
                        <li key={item.name} className="text-center dark:p-2 dark:text-slate-100 dark:hover:text-slate-400 dark:border dark:border-gray-400 dark:rounded hover:text-gray-800">
                            <Link href={item.href}>
                                {item.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <div>
                <div className="grid grid-flow-col gap-4">
                <a href="" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                </a> 
                <a href="https://www.youtube.com/@vietchurchjp" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> 
                <a href="https://www.facebook.com/conggiaovietnamtainhatban/" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                </div>
            </div> 
            <div>
                <p>Copyright © 2022 - All right reserved by VietCatholicJapan</p>
                <p>Made by <a className="horver:text-gray-500" href="https://github.com/christian-japan-devs" target="_blank" rel="noreferrer">ChristianJapanDev</a></p>
            </div>
        </footer>
    )
}