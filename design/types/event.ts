export type Event = {
    id: string,
    title: string,
    slug: string,
    description: string,
    image: string,
    total_slots: number,
    registered_slots: number,
    confirmed_slots: number,
    place_name: string,
    address: string,
    google_map: string,
    from_date_time: string,
    to_date_time: string,
    register_from_date_time: string,
    register_to_date_time: string,
    created_by?: string,
    belong_to?: string
}

export type BankAccount = {
    id: string,
    name: string,
    branch: string,
    account: string,
}

export type EventTicket = {
    id: number,
    event: string,
    user: string,
    amount: number,
    currency: string,
    transfer_to: BankAccount,
    payment_status_by_admin: string,
    payment_status_by_user: string,
    ticket_status: string,
    updated_status_admin_by: string,
    updated_status_admin_date: string,
    created_by?: string,
    created_on?: string,
    updated_by?: string,
    updated_on?: string,
}