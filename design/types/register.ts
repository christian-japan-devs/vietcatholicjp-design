import {Profile} from './user'
import {EventType} from './shedule'

export type RegisterType = {
    id: string;
    title: string;
    description: string;
    image: string;
    date_time: string;
    total_slots: number;
    total_registered: number;
}

export type MyRegistration = {
    id: string,
    event: EventType,
    user: Profile,
    code: string,
    confirm_code: string,
    confirm_status: string,
    status: string,
}