import {Profile} from './user'

export type AboutType = {
    id:string,
    title:string,
    slug: string,
    description:string,
    image:string,
    author: Profile
    type: string,
}