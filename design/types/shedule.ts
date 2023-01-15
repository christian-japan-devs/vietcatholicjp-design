import { GospelType } from "./gospel"
import {Father} from './user'
import {ChurchType, ProvinceType} from './church'

export type EventType = {
    id: string,
    event_date: string,
    event_time: string,
    event_image: string,
    event_title: string,
    event_description: string,
    event_address: string,
    event_map_link: string,
    event_slots: number,
    event_start_register_day: string,
    event_end_register_day: string,
    event_language: string
}

export type MassDateSchedule = {
    id?: string,
    date: string,
    title: string,
    slug?: string,
    audio_link?: string,
    gospel?:{
        id: string
        slug?: string
        title?: string
        audio_link: string
    }
    time_schedule: MassTimeSchedule[]
}

export type MassTimeSchedule = {
    id: string,
    time: string,
    father: Father,
    church: ChurchType,
    province: ProvinceType,
    notes: string
}