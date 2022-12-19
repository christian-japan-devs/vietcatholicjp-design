import {ChurchType,ProvinceType} from './church'

export type User = {
    username:string,
    email:string,
    is_staff?: boolean,
    groups?:[{name:string}]
}

export type Profile = {
    id?: string,
    user?: User,
    saint_name?: string,
    full_name: string,
    image?: string,
    church?: ChurchType,
    province?: ProvinceType,
    address?: string,
    phone_number?: string,
    facebook_link?: string,
    secret_code?: string,
    registered_count?: number,
    account_confimred?: number,
    is_verified?: number,
}