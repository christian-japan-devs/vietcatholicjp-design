import {Profile} from './user';

interface SEO { 
  title: string
  description: string
  image: string
}

export interface Post {
  title: string
  slug: string
  date: string
  emoji: string
  seo: SEO
  content: string
}

export interface PostCard {
  title: string
  slug: string
  author: Profile
  excerpt: string
  date: string
  emoji: string
}

type PostType = {
  slug: string
  title: string
  created_on: string
  cover_image: string
  author: Profile
  excerpt: string
  image: string
  content: string
}

export default PostType