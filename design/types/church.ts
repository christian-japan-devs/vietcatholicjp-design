import {ContactFather} from './contact'
import {GroupsType} from './group'
// Nhà thờ
export type ChurchType = {
    id:string,
    name:string,
    kanji: string,
    introduction:string,
    image?:string,
    mass_time?: string,
    phone?:string,
    email?:string,
    url?:string,
    address:string,
    google_map_link:string,
    province: ProvinceType,
}

//Nhà dòng
export type MonasteryType = {
    id:string,
    name:string,
    name_jp: string,
    name_jp_hira: string,
    description:string,
    image:string,
    phone?:string,
    email?:string,
    web_url?:string,
    province: ProvinceType,
    address:string,
    map_url:string,
}

//
export type CountryType = {
    id:string,
    name:string,
    kanji: string,
}

//Vung
export type RegionType = {
    id: string,
    name: string,
    kanji: string,
    country: CountryType,
    region_province?: ProvinceType[]
}

//Giáo phận
export type DioceseType = {
    id: string,
    name: string,
    kanji: string,
    region: RegionType
}

//Tỉnh
export type ProvinceType = {
    id: string,
    name: string,
    kanji: string,
    region: RegionType,
    diocese?: DioceseType,
    father_province?: ContactFather[],
    church_province?: ChurchType[],
    community_province?:GroupsType[]
}
