
import Layout from '../../../components/layout/Layout'
import {MetaProps} from '../../../components/layout/meta'

const meta_data:MetaProps = {
  title:"",
  description:"string",
  ogUrl:"",
  ogImage:""
}

export default function Index() {

  return (
    <Layout meta_data={meta_data}>
      <section className="max-w-screen-xl items-center my-6 mx-auto px-4">
        <div className="space-y-4 mb-8 text-center">
            <h2 className="text-gray-900  dark:text-gray-200 text-2xl md:text-6xl font-semibold">
              Lịch Lễ
            </h2>
            <h3 className="text-gray-600 mb-4 dark:text-gray-200 text-xl font-semibold">
              Giờ lễ Tiếng Việt tại Nhật.
            </h3>
        </div>
        <div className="max-w-3xl">
          <div className="flex gap-2">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Chọn tỉnh</span>
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
          <div className="overflow-x-auto mt-8 relative dark:bg-slate-900 dark:border rounded shadow-md sm:rounded-lg">
            <h3 className='text-gray-800 mt-2 text-center text-xl dark:text-gray-200 font-semibold'>CHÚA NHẬT II MÙA VỌNG</h3>
            <table className="w-full mt-2 text-sm text-left text-gray-500 dark:text-gray-200">
                <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-2">
                            Giờ lễ
                        </th>
                        <th scope="col" className="py-3 px-2">
                            Nhà thờ
                        </th>
                        <th scope="col" className="py-3 px-2">
                            Địa chỉ
                        </th>
                    </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="py-4 px-6">
                          15:00 Ngày 04/12/2023
                      </td>
                      <td className="py-4 px-6">
                          Inhaxiô
                      </td>
                      <td className="py-4 px-6">
                          Youtsuya-Tokyo
                      </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="py-4 px-6">
                          17:00 Ngày 04/12/2023
                      </td>
                      <td className="py-4 px-6">
                          Kawaguchi
                      </td>
                      <td className="py-4 px-6">
                          Kawaguchi-Saitama
                      </td>
                  </tr>
                </tbody>
            </table>
          </div>
          <div className="overflow-x-auto mt-8 relative dark:bg-slate-900 dark:border rounded shadow-md sm:rounded-lg">
            <h3 className='text-gray-800 mt-2 text-center text-xl dark:text-gray-200 font-semibold'>CHÚA NHẬT III MÙA VỌNG</h3>
            <table className="w-full mt-2 text-sm text-left text-gray-500 dark:text-gray-200">
                <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-2">
                            Giờ lễ
                        </th>
                        <th scope="col" className="py-3 px-2">
                            Nhà thờ
                        </th>
                        <th scope="col" className="py-3 px-2">
                            Địa chỉ
                        </th>
                    </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="py-4 px-6">
                          15:00 Ngày 11/12/2023
                      </td>
                      <td className="py-4 px-6">
                          Inhaxiô
                      </td>
                      <td className="py-4 px-6">
                          Youtsuya-Tokyo
                      </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="py-4 px-6">
                          17:00 Ngày 11/12/2023
                      </td>
                      <td className="py-4 px-6">
                          Kawaguchi
                      </td>
                      <td className="py-4 px-6">
                          Kawaguchi-Saitama
                      </td>
                  </tr>
                </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  )
}
