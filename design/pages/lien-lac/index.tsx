
import Layout from '../../components/layout/Layout'
import {MetaProps} from '../../components/layout/meta'

const meta_data:MetaProps = {
  title:"",
  description:"string",
  ogUrl:"",
  ogImage:""
}

import {father_contact} from '../../types/sample_data/father'

export default function Index() {

  return (
    <Layout meta_data={meta_data}>
      <section className="max-w-screen-xl md:flex md:flex-col md:items-center my-6 mx-auto px-4">
        <div className="space-y-4 mb-8 text-center">
            <h2 className="text-gray-900  dark:text-gray-200 text-2xl md:text-4xl font-semibold">
              Địa chỉ quý Cha
            </h2>
            <h3 className="text-gray-600 mb-4 dark:text-gray-200 text-xl font-semibold">
            quý Cha Việt Nam tại Nhật.
            </h3>
        </div>
        <div className="max-w-4xl md:justify-centerr">
          <div className="flex gap-2">
            <div className="form-control w-full min-w-sm">
              <label className="label">
                <span className="label-text">Chọn Giáo phận</span>
              </label>
              <select className="select select-bordered">
                <option selected>Tất cả</option>
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
            <div className="form-control w-full min-w-xs">
              <label className="label">
                <span className="label-text">Chọn Tỉnh</span>
              </label>
              <select className="select select-bordered">
                <option selected>Tất cả</option>
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
          </div>
          {father_contact.map((diocese,idx)=>(
            <div key={idx} className="overflow-x-auto mt-8 relative dark:bg-slate-900 dark:border rounded shadow-md sm:rounded-lg">
            <h3 className='text-gray-800 my-2 text-center text-2xl dark:text-gray-200 font-semibold'>Giáo phận {diocese.diocese}</h3>
            <div className="border-b border-gray-300"></div>
            {diocese.province.map((province,idx1)=>(
              <div key={idx1}>
                <h4 className='text-gray-800 my-2 text-center text-xl dark:text-gray-200 font-semibold'>Tỉnh {province.name}</h4>
                <table className="w-full mt-2 text-sm text-left text-gray-800 dark:text-gray-200">
                  <thead className="text-xs text-gray-900 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                          <th scope="col" className="py-2 px-3 sm:py-4 sm:px-6">
                              Cha
                          </th>
                          <th scope="col" className="py-2 px-3 sm:py-4 sm:px-6">
                              Nhà thờ
                          </th>
                          <th scope="col" className="py-2 px-3 sm:py-4 sm:px-6">
                              Email
                          </th>
                          <th scope="col" className="py-2 px-3 sm:py-4 sm:px-6">
                              Phone
                          </th>
                          <th scope="col" className="py-2 px-3 sm:py-4 sm:px-6">
                              Địa chỉ
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                    {province.list.map((father,idx)=>(
                      <tr key={idx} className="py-bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td className="py-2 px-3 sm:py-4 sm:px-6">
                              {father.father_name}
                          </td>
                          <td className="py-2 px-3 sm:py-4 sm:px-6">
                            {father.facility}
                          </td>
                          <td className="py-2 px-3 sm:py-4 sm:px-6">
                            {father.email}
                          </td>
                          <td className="py-2 px-3 sm:py-4 sm:px-6">
                            {father.phone?father.phone:father.tell}
                          </td>
                          <td className="py-2 px-3 sm:py-4 sm:px-6">
                            {father.address}
                          </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}