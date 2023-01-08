import {User} from './user';

export type LetterType = {
    id: string
    slug: string
    title: string
    created_on: string
    cover_image: string
    author: User
    excerpt: string
    image_url: string
    content: string
}

export type VideoPostCastType = {
    id: string
    title: string
    slug: string
    excerpt?: string
    youtube_url: string
    created_on?: string
}