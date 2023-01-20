export const domain = 'https://anviet.jp';

export const caterismDefaultId = 'cl4kipby18gm40dzli7pfmfez';
export const aboutusDefaultId = 'cl4peo18z2ws40czp3lmdakvg';


export const href_pv = '/phung-vu';
export const href_pv_loi_chua = '/phung-vu/loi-chua';
export const href_pv_suy_niem = '/phung-vu/suy-niem';
export const href_pv_loi_nguyen = '/phung-vu/loi-nguyen';
export const href_pv_kinh_nguyen = '/phung-vu/kinh-cau';
export const href_pv_nghi_thuc = '/phung-vu/nghi-thuc';
export const href_pv_giao_ly = '/phung-vu/giao-ly';
export const href_pv_gio_le = '/phung-vu/thanh-le';
export const href_pv_gio_giai_toi = '/phung-vu/lich-giai-toi';
export const href_pv_viet_nhat = '/phung-vu/song-ngu-viet-nhat';
export const href_pv_viet_anh = '/phung-vu/song-ngu-viet-anh';

export const href_cd = '/cong-doan';

export const href_gt = '/gioi-tre';
export const href_gt_dh = '/gioi-tre/dai-hoi';
export const href_gt_dh_ct = '/gioi-tre/dai-hoi/chuong-trinh';
export const href_gt_dh_dk = '/gioi-tre/dai-hoi/dang-ky';
export const href_gt_dh_hd = '/gioi-tre/dai-hoi/huong-dan';

export const href_thong_bao = '/thong-bao';

export const href_chia_se = '/chia-se';
export const href_cs_tong_thu = '/chia-se/tong-thu';
export const href_cs_tin_tuc = '/chia-se/tin-tuc';
export const href_cs_cong_doan = '/chia-se/cong-doan';
export const href_cs_gioi_tre = '/chia-se/gioi-tre';
export const href_cs_nhat_ban = '/chia-se/nhat-ban';

export const href_lien_lac = '/lien-lac';
export const href_lien_lac_nha_tho = '/lien-lac/nha-tho-tai-nhat';
export const href_lien_lac_dong_tu = '/lien-lac/dong-tu-tai-nhat';
export const href_lien_lac_cong_doan = '/lien-lac/gioi-tre';
export const href_lien_lac_nhom_gioi_tre = '/lien-lac/cong-doan';

export const href_signup = '/account/signup'
export const href_signin = '/account/signin'

export const href_registration = '/register';
export const href_mass_register = '/register/mass';
export const href_batism_register = '/register/baptism';
export const href_caterism_register = '/register/caterism';
export const href_wedding_register = '/register/wedding';


export const navigation = [
    { name: 'Phụng vụ', href: href_pv },
    { name: 'Cộng đoàn', href: href_cd },
    { name: 'Giới trẻ', href: href_gt},
    { name: 'Chia sẻ', href: href_chia_se },
    { name: 'Thông báo', href: href_thong_bao },
    { name: 'Liên lạc', href: href_lien_lac }
]

export const phung_vu_nav = { 
    name: 'Phụng Vụ', sub_navi: [
    {name:'Bài đọc Chúa Nhật', href: href_pv},
    //{name:'Lời Chúa', href: href_pv_loi_chua},
    //{name:'Suy niệm', href: href_pv_suy_niem},
    //{name:'Lời nguyện', href: href_pv_suy_niem},
    //{name:'Giáo lý', href: href_pv_giao_ly},href_pv_nghi_thuc
    {name:'Các nghi thức', href: href_pv_nghi_thuc},
    {name:'Kinh nguyện', href: href_pv_kinh_nguyen},
    {name:'Giờ Lễ', href: href_pv_gio_le},
    //{name:'Giờ giải tội', href: href_pv_gio_giai_toi},
    //{name:'Song Ngữ Việt-Nhật', href: href_pv_viet_nhat},
    //{name:'Song Ngữ Việt-Anh', href: href_pv_viet_anh}
]}

export const chia_se_nav = { 
    name: 'Chia sẻ', sub_navi: [
    {name:'Tông thư', href: href_chia_se},
    {name:'Tin tức', href: href_cs_tin_tuc},
    //{name:'Cộng đoàn', href: href_cs_cong_doan},
    {name:'Giới trẻ', href: href_cs_gioi_tre},
    {name:'Nhật bản', href: href_cs_nhat_ban},
    ]
}

export const subNavigation = [
    phung_vu_nav,
    { name: 'Cộng đoàn', sub_navi: [
        {name:'Giới thiệu', href: href_cd}
    ]},
    { name: 'Giới trẻ', sub_navi: [
        {name:'Giới trẻ', href: href_gt},
        {name:'Đại Hội', href: href_gt_dh}
    ]},
    chia_se_nav,
    { name: 'Thông báo', sub_navi: [
        {name:'Thông báo', href: href_thong_bao},
        //{name:'Tin tức', href: href_thong_bao},
        //{name:'Sự kiện', href: href_thong_bao}
    ]},
    { name: 'Liên lạc', sub_navi: [
        {name:'Quý Cha', href: href_lien_lac},
        //{name:'Quý Tu Sĩ', href: href_lien_lac},
        {name:'Nhà Thờ', href: href_lien_lac_nha_tho},
        {name:'Nhà Dòng', href: href_lien_lac_dong_tu},
        {name:'Cộng đoàn', href: href_lien_lac_cong_doan},
        {name:'Nhóm Giới Trẻ', href: href_lien_lac_nhom_gioi_tre}
    ]},
]

