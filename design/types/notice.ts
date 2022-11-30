import {ChurchType} from './church'

export type NoticeType = {
    title: string
    slug?: string
    image?: string
    excerpt:string
    content:string
    start_date_time?: string
    end_date_time?: string
    notice_from_date: string
    notice_to_date: string
    register_link?: string
    address?: string
    map_link: string
}

export type MassNotice = {
    id: string,
    mass_title: string,
    mass_date_time: string,
    mass_image: string,
    mass_church: string,
    mass_station?: string,
    mass_notes?: string,
    mass_address?: string,
    mass_address_link?: string,
}

export type MassSchedule = {
    id: string,
    mass_title: string,
    mass_date_time: string,
    mass_father: string,
    mass_church: ChurchType
}

export type ConfessionSchedule = {
    id: string,
    from_date_time: string,
    to_date_time: string,
    father: string,
    notes: string,
    church: ChurchType
}