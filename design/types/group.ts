import {User} from './user'
import {ChurchType, ProvinceType} from './church'

export type GroupsType = {
    id:string,
    name:string,
    name_jp?:string,
    image: string,
    slug:string,
    introduction?:string,
    phone?:string,
    email?:string,
    url?:string,
    province?:ProvinceType,
    church?: ChurchType,
    address?:string,
    google_map_link?:string,
    leader?: User
}