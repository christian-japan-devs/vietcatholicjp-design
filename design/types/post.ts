import {User} from './user';

interface SEO { 
  title: string
  description: string
  image: string
}

export interface Post {
  title: string
  slug: string
  date: string
  seo: SEO
  content: string
}

export interface PostCard {
  id?:string
  title: string
  slug: string
  author: User
  image_url?:string
  excerpt: string
  audio_link?:string
  created_on: string
  number_readed?: number
  number_shared?: number
}

export interface PostChapter {
  id?:string
  chapter_title: string
  slug: string
  content: string
  image?:string
  chapter_summary?: string
}

type PostType = {
  post_meta: PostCard
  content: PostChapter[]
}

export default PostType