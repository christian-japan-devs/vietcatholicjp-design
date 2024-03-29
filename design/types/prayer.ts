export type Prayer = {
    id: number
    slug: string
    name: string
    name_jp: string
    name_en: string
    audio_link?: string
    audio_link_jp?:string
    audio_link_en?: string
    content:string
    content_jp?:string
    content_en?:string
}
  
export type PrayerType = {
    id: number
    name: string
    name_jp?: string
    name_en?: string
    prayer_type_prayer?:Prayer[]
}

export type Ceremony = {
    id: number
    name: string
    slug: string
    name_jp: string
    name_en: string
    audio_link?: string
    audio_link_jp?:string
    audio_link_en?: string
    content:string
    content_jp?:string
    content_en?:string
}
  
export type CeremonyType = {
    id: number
    name: string
    name_jp?: string
    name_en?: string
    ceremonies?:Ceremony[]
}