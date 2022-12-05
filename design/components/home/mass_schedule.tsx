import Link from 'next/link'
import {href_pv_gio_le} from '../../lib/constants'
import {mass_home_schedule} from '../../types/sample_data/mass_schedule'

export default function MassSchedule(){
    return(
      <div className="max-w-5xl lg:min-w-5xl bg-white border p-4 border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 md:flex md:flex-col md:items-center my-6 mx-auto px-4">
        <div className="space-y-4 mb-8 justify-center text-center">
            <h1 className="text-2xl font-serif font-bold tracking-tight sm:text-center sm:text-4xl">
              {mass_home_schedule.title}
            </h1>
            <h3 className='text-gray-800 mt-2 text-center text-2xl sm:text-3xl dark:text-gray-200 font-semibold'>Ngày {mass_home_schedule.date}</h3>
        </div>
        <div className="max-w-5xl lg:min-w-5xl md:justify-center">
          <div className="flex flex-col items-center">
            <div className="justify-center">
              <Link href={href_pv_gio_le} legacyBehavior>
                <a className="inline-block rounded-lg px-2 py-1 text-sm leading-7 text-gray-800 dark:text-gray-200 hover:text-gray-600 hover:bg-gray-100 ring-1 ring-gray-200 hover:ring-gray-200">
                  Xem đầy đủ
                  <span className="text-gray-800 dark:text-gray-200" aria-hidden="true">&rarr;</span>
                </a>
              </Link>
          </div>
          </div>
              <div className="overflow-x-auto mt-8 relative dark:bg-slate-900 dark:border rounded shadow-md sm:rounded-lg">
                <table className="w-full min-w-5xl max-w-screen-lg mt-2 text-sm text-left text-gray-700 dark:text-gray-200">
                    <thead className="text-xs text-gray-900 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Giờ lễ
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Cha
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Nhà thờ
                            </th>
                            <th scope="col" className="py-3 px-6">
                              Tỉnh
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                      {mass_home_schedule.time_schedule.map((mass,idx)=>(
                        <tr key={idx} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="py-4 px-6">
                              {mass.time}
                            </td>
                            <td className="py-4 px-6">
                              {mass.father}
                            </td>
                            <td className="py-4 px-6">
                              {mass.church_name}
                            </td>
                            <td className="py-4 px-6">
                              {mass.province}
                            </td>
                        </tr>
                      ))}
                    </tbody>
                </table>
              </div>
        </div>
      </div>
    )
}