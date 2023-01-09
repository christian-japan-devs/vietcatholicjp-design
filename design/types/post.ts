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
  title: string
  slug: string
  author: User
  excerpt: string
  date: string
}

type PostType = {
  slug: string
  title: string
  created_on: string
  cover_image: string
  author: User
  excerpt: string
  image_url: string
  content: string
}

export default PostType