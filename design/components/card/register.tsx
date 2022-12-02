
import {RegisterType} from '../../types/register'

type RegisterProps = {
    register: RegisterType,
    onSubmit: (id:string) => void,
}

export default function RegisterCard({ props }: { props: RegisterProps }){
    return (
        <div className="max-w-sm md:mx-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={props.register.image} alt={props.register.title} />
            </a>
            <div className="p-5">
                <h2 className="mt-2 text-center text-3xl md:text-3xl font-bold tracking-tight dark:text-purple-400 text-purple-700">{props.register.title}</h2>
                <h5 className="text-center my-1 font-medium text-xl  text-red-700 dark:text-gray-400">{props.register.date_time}</h5>
                <div className="flex mt-4 justify-center items-center space-x-3 md:mt-6">
                    <h5 className="w-full sm:w-auto border hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 text-blue text-md font-medium rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"><span className="text-sm mr-1 text-gray-500 dark:text-gray-400">Số  </span> {props.register.total_slots}</h5>
                    <h5 className="w-full sm:w-auto border hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 text-blue text-md font-medium rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"><span className="text-sm mr-1 text-gray-500 dark:text-gray-400">còn lại </span>{props.register.total_slots - props.register.total_registered}</h5>
                </div>
                <div className="flex mt-4 justify-center items-center space-x-3 md:mt-6">
                    <button onClick={()=> props.onSubmit(props.register.id)} className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-purple-600 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-purple-500 dark:hover:bg-purple-800 dark:focus:ring-purple-800">Đăng ký</button>
                </div>
            </div>
        </div>
    )
}