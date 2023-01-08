import {User} from './user';

export type LetterType = {
    id: string
    slug: string
    title: string
    created_on: string
    cover_image: string
    author: User
    excerpt: string
    imageUrl: string
    content: string
}