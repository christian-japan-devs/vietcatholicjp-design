import {User} from './user';
import {PostChapter,TitleSlug} from './post'

export type GospelType = {
  meta_data: GospelMeta
  content: GospelContent[]
}

export interface GospelContent extends PostChapter {
  chapter_reference: string
}

export interface CommuintyPrayer extends TitleSlug {
  id?: number
  audio_link?: string
  image_url?: string
  reference_link?: string
  content?: string
  created_on?: string
}

export type GospelMeta = {
  id: number
  title: string
  slug: string
  date: string
  excerpt?: string
  audio_link?:string
  image_url?: string
  number_readed: number
  number_shared: number
}

export interface GospelReflection extends TitleSlug {
  id?: number
  audio_link?: string
  image_url?: string
  created_on?: string
  excerpt?: string
  content?: string
  author?: User
  number_readed?: number
  number_shared?: number
}
