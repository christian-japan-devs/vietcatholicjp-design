export type WeddingAnnouncementType = {
    id: number
    wedding_date?: string
    male_saint_name: string
    male_name: string
    male_image?: string
    male_birthdate: string
    male_father_name: string
    male_mother_name: string
    male_home_address: string
    male_church_name: string
    male_current_address: string
    female_saint_name: string
    female_name: string
    female_image?: string
    female_birthdate: string
    female_father_name: string
    female_mother_name: string
    female_home_address: string
    female_church_name: string
    female_current_address: string
    announce_week_num: number
    from_date?: string
    to_date?: string
    create_on?: string
}