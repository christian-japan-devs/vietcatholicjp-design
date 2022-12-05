export const domain = 'https://anviet.jp';

export const caterismDefaultId = 'cl4kipby18gm40dzli7pfmfez';
export const aboutusDefaultId = 'cl4peo18z2ws40czp3lmdakvg';


export const href_pv = '/phung-vu';
export const href_pv_gio_le = '/phung-vu/thanh-le';
export const href_giao_ly = '/giao-ly';

export const href_cd = '/cong-doan';

export const href_gt = '/gioi-tre';
export const href_gt_dh = '/gioi-tre/dai-hoi';
export const href_gt_dh_ct = '/gioi-tre/dai-hoi/chuong-trinh';
export const href_gt_dh_dk = '/gioi-tre/dai-hoi/dang-ky';
export const href_gt_dh_hd = '/gioi-tre/dai-hoi/huong-dan';

export const href_thong_bao = '/thong-bao';

export const href_chia_se = '/chia-se';

export const href_lien_lac = '/lien-lac';


export const href_registration = '/register';
export const href_mass_register = '/register/mass';
export const href_batism_register = '/register/baptism';
export const href_caterism_register = '/register/caterism';
export const href_wedding_register = '/register/wedding';


export const navigation = [
    { name: 'Phụng vụ', href: href_pv },
    { name: 'Cộng đoàn', href: href_cd },
    { name: 'Giới Trẻ', href: href_gt},
    { name: 'Chia sẻ', href: href_chia_se },
    { name: 'Thông báo', href: href_thong_bao },
    { name: 'Liên lạc', href: href_lien_lac }
]

export const subNavigation = [
    { name: 'Phụng vụ', sub_navi: [
        {name:'Phụng vụ', href: href_pv},
        {name:'Giờ Lễ', href: href_pv_gio_le},
        {name:'Giờ giải tội', href: href_pv},
        {name:'Lời Chúa', href: href_pv},
        {name:'Suy niệm', href: href_pv},
        {name:'Lời nguyện', href: href_pv}
    ]},
    { name: 'Cộng đoàn', sub_navi: [
        {name:'Giới thiệu', href: href_cd}
    ]},
    { name: 'Giới trẻ', sub_navi: [
        {name:'Giới trẻ', href: href_gt},
        {name:'Đại Hội', href: href_gt_dh}
    ]},
    { name: 'Thông báo', sub_navi: [
        {name:'Thông báo', href: href_thong_bao},
        {name:'Tin tức', href: href_thong_bao},
        {name:'Sự kiện', href: href_thong_bao}
    ]},
    { name: 'Liên lạc', sub_navi: [
        {name:'Liên lạc', href: href_lien_lac},
        {name:'Quý Cha', href: href_lien_lac},
        {name:'Quý Tu Sĩ', href: href_lien_lac},
        {name:'Nhà Dòng', href: href_lien_lac},
        {name:'Cộng đoàn', href: href_lien_lac},
        {name:'Nhóm Giới Trẻ', href: href_lien_lac}
    ]},
]

