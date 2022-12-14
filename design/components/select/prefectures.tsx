import {prefectures} from '../../types/sample_data/province'

type Props = {
    onChange(event: React.ChangeEvent<HTMLSelectElement>): void,
    selectedRegion: string
}

export default function SelectPrefectures({ onChange, selectedRegion}: Props)
{
    return(
        <>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Chọn tỉnh</label>
            <select id="address" onChange={onChange} className="select select-bordered  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value='all'>Tất cả</option>
            {selectedRegion==='all'?prefectures.map((prefecture,idx)=>(
                <option key={idx} value={prefecture.id}>{prefecture.name}-{prefecture.hiragana}</option>
            )):prefectures.filter(perfecture => perfecture.region === selectedRegion).map((prefecture,idx)=>(
                <option key={idx} value={prefecture.id}>{prefecture.name}-{prefecture.hiragana}</option>
            ))}
            </select>
        </>
    )
}