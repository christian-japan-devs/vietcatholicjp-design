import {GroupsType} from './group'
import {User} from './user'
import {ChurchType,ProvinceType,RegionType} from './church'
import {Profile} from './user'

export type ContactFather = {
    id: string,
    user: User,
    church?: ChurchType,
    province?: ProvinceType,
    address?: string,
    facebook?: string,
    phone_number?: string,
    group: GroupsType,
    create_on: string,
    is_active: number
}