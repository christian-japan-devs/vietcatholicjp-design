
import {Event} from '../../types/event'

type Props = {
    event: Event,
    onSubmit: (id:string) => void,
}

export default function EventCard({event,onSubmit}: Props ){
    return (
        <div className="max-w-sm md:mx-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="">
                <img className="rounded-t-lg" src={event.image} alt={event.title} />
            </div>
            <div className="flex flex-col p-5 items-center">
                <h2 className="mt-2 top-2 z-10 text-center text-3xl md:text-3xl font-bold tracking-tight dark:text-cyan-400 text-cyan-700">{event.title}</h2>
                <div className="flex space-x-4 mt-4 items-center">
                    <div className="flex flex-col place-items-center">
                        từ ngày
                        <h5 className="text-center my-1 font-medium text-xl  text-red-700 dark:text-gray-400">{event.from_date_time}</h5>
                    </div>
                    <div className="flex flex-col place-items-center">
                        đến ngày
                        <h5 className="text-center my-1 font-medium text-xl  text-red-700 dark:text-gray-400">{event.to_date_time}</h5>
                    </div>
                </div>
                <div className="flex">
                    <div className="stat place-items-center">
                        <div className="stat-title">Số lượng</div>
                        <div className="stat-value">2000</div>
                        <div className="stat-desc">đã đăng ký: {event.registered_slots}</div>
                    </div>
                    
                    <div className="stat place-items-center">
                        <div className="stat-title">Xác nhận</div>
                        <div className="stat-value">{event.confirmed_slots}</div>
                        <div className="stat-desc">Còn lại: {event.total_slots - event.confirmed_slots}</div>
                    </div>
                </div>
                <div className="flex mt-4 justify-center items-center space-x-3 md:mt-6">
                    <button onClick={()=> onSubmit(event.id)} className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-purple-600 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-purple-500 dark:hover:bg-purple-800 dark:focus:ring-purple-800">Đăng ký</button>
                </div>
            </div>
        </div>
    )
}