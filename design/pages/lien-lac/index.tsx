
import Layout from '../../components/layout/Layout'
import React, { useState } from 'react'
import SelectPrefectures from '../../components/select/prefectures'
import SelectRegions from '../../components/select/regions'

import {MetaProps} from '../../components/layout/meta'

const meta_data:MetaProps = {
  title:"",
  description:"string",
  ogUrl:"",
  ogImage:""
}

import {father_contact} from '../../types/sample_data/father'

export default function Index() {
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [selectedPerfecture, setSelectedPerfecture] = useState('all')

  const selectRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedRegion(value);
  };

  const selectPerfectureChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedPerfecture(value);
  };
  return (
    <Layout meta_data={meta_data} current_page='contact'>
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
                <SelectRegions onChange={selectRegionChange}/>
            </div>
            <div className="form-control w-full min-w-xs">
                <SelectPrefectures selectedRegion={selectedRegion} onChange={selectPerfectureChange}/>
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
                              ******
                          </th>
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
                      </tr>
                  </thead>
                  <tbody>
                    {province.list.map((father,idx)=>(
                      <tr key={idx} className="py-bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td className="py-2 px-3 sm:py-4 sm:px-6">
                            <div className="flex-shrink-0">
                              <img className="w-8 h-8 rounded-full" src="/youth_event/missa-01.jpg" alt="Neil image"/>
                            </div>
                          </td>
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
