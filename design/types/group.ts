import {Profile} from './user'

export type GroupsType = {
    id:string,
    name:string,
    description:string,
    image:string,
    phone?:string,
    email?:string,
    facebook_url?:string,
    facebook_name?:string,
    address:string,
    map_url:string,
    leader: Profile
}