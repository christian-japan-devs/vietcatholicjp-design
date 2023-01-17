import {User} from './user';

export type AboutType = {
    id:string,
    title:string,
    title_jp: string,
    email: string,
    slug: string,
    excerpt:string,
    content: string,
    image:string,
    author: User,
    type?: string,
    created_on: string,
}