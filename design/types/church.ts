// Nhà thờ
export type ChurchType = {
    id:string,
    name:string,
    name_jp: string,
    name_jp_hira: string,
    description:string,
    image:string,
    phone?:string,
    email?:string,
    web_url?:string,
    address:string,
    map_url:string,
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

//Tỉnh
export type ProvinceType = {
    id: string,
    name: string,
    name_jp: string,
    name_jp_hira: string,
    diocese: DioceseType
}

//Giáo phận
export type DioceseType = {
    id: string,
    name: string,
    name_jp: string,
    name_jp_hira: string,
    country: CountryType
}

//
export type CountryType = {
    id:string,
    name:string,
    name_jp: string,
    name_jp_hira: string,
}