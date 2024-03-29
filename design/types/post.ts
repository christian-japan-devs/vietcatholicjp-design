import {User} from './user';

interface SEO { 
  title: string
  description: string
  image: string
}

export interface Post extends SEO {
  slug: string
  date: string
  content: string
}

export interface TitleSlug {
  title?: string
  title_jp?: string
  title_en?: string
  slug?: string
}

export interface PostCard extends TitleSlug {
  id?:string
  author: User
  image_url?:string
  excerpt: string
  audio_link?:string
  created_on: string
  number_readed?: number
  number_shared?: number
}

export interface PostChapter extends TitleSlug {
  id?:string
  content?: string
  content_jp?: string
  content_en?: string
  image_url?:string
  chapter_summary?: string
}

type PostType = {
  meta_data: PostCard
  content: PostChapter[]
}

export default PostType