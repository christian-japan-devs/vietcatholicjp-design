import {GroupsType} from './group'
import {ChurchType,ProvinceType} from './church'
import {Profile} from './user'

export type ContactFather = {
    id: string,
    saint_name: string,
    name: string,
    church: ChurchType,
    province: ProvinceType,
    profile: Profile,
    group: GroupsType,
    from_date: string,
    to_date: string,
    create_on: string,
    is_active: number
}