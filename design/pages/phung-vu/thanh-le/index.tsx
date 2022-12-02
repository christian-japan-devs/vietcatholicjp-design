
import Layout from '../../../components/layout/Layout'
import {MetaProps} from '../../../components/layout/meta'

const meta_data:MetaProps = {
  title:"",
  description:"string",
  ogUrl:"",
  ogImage:""
}

import {mass_schedule} from '../../../types/sample_data/mass_schedule'

export default function Index() {

  return (
    <Layout meta_data={meta_data}>
      <section className="max-w-screen-4xl md:flex md:flex-col md:items-center my-6 mx-auto px-4">
        <div className="space-y-4 mb-8 justify-center text-center">
            <h2 className="text-gray-900  dark:text-gray-200 text-2xl md:text-6xl font-semibold">
              Lịch Lễ
            </h2>
            <h3 className="text-gray-600 mb-4 dark:text-gray-200 text-xl font-semibold">
              Giờ lễ Tiếng Việt tại Nhật.
            </h3>
        </div>
        <div className="max-w-6xl md:justify-center">
          <div className="flex gap-2">
            <div className="form-control w-full min-w-sm">
              <label className="label">
                <span className="label-text">Chọn Giáo phận</span>
              </label>
              <select className="select select-bordered">
                <option disabled selected>Tất cả</option>
                <option>Sapporo</option>
                <option>Nigata</option>
                <option>Saitama</option>
                <option>Tokyo</option>
                <option>Nagasaki</option>
                <option>Fukuoka</option>
                <option>Hiroshima</option>
                <option>Yokohama</option>
                <option>Nagoya</option>
                <option>Kyoto</option>
                <option>Oska</option>
                <option>Oita</option>
                <option>Kagoshima</option>
                <option>Naha</option>
              </select>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Chọn tỉnh</span>
              </label>
              <select className="select select-bordered">
                <option disabled selected>Tất cả</option>
                <option disabled selected>Tất cả</option>
                <option>Hokkaido</option>
                <option>Akita</option>
                <option>Saitama</option>
                <option>Gunma</option>
                <option>Chiba</option>
                <option>Tokyo</option>
                <option>Hyogo</option>
                <option>Yokohama</option>
                <option>Wakayama</option>
                <option>Nagoya</option>
                <option>Kyoto</option>
                <option>Oska</option>
                <option>Oita</option>
                <option>Kagoshima</option>
                <option>Naha</option>
              </select>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Chọn Nhà thờ</span>
              </label>
              <select className="select select-bordered">
                <option disabled selected>Tất cả</option>
                <option>Tokyo</option>
                <option>Saitama</option>
                <option>Osaka</option>
                <option>Kyoto</option>
                <option>Nagasaki</option>
              </select>
            </div>
          </div>
          {
            mass_schedule.map((masses,idx)=>(
              <div key={idx} className="overflow-x-auto mt-8 relative dark:bg-slate-900 dark:border rounded shadow-md sm:rounded-lg">
                <h3 className='text-gray-800 mt-2 text-center text-xl dark:text-gray-200 font-semibold'>{masses.title}</h3>
                <h5 className='text-gray-800 mt-2 text-center text-md dark:text-gray-200 font-semibold'>Ngày {masses.date}</h5>
                <table className="w-full mt-2 text-sm text-left text-gray-700 dark:text-gray-200">
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
                      {masses.time_schedule.map((mass,idx)=>(
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
            ))
          }
        </div>
      </section>
    </Layout>
  )
}
