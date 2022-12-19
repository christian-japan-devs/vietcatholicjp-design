import {regions} from '../../types/sample_data/province'

type Props = {
    onChange(event: React.ChangeEvent<HTMLSelectElement>): void
}

export default function SelectRegions({ onChange }: Props)
{
    return(
        <>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Chọn vùng</label>
            <select id="address" onChange={onChange} className="select select-bordered  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value='all'>Tất cả</option>
            {regions.map((region,idx)=>(
                <option key={idx} value={region.id}>{region.name}-{region.hiragana}</option>
            ))}
            </select>
        </>
    )
}