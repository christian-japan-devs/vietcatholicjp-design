import type { NextPage } from 'next'
import Layout from '../components/layout/Layout'
import {MetaProps} from '../components/layout/meta'

const meta_data:MetaProps = {
  title:"VietCatholicJp-Profile",
  description:"Thông tin cá nhân",
  ogUrl:"/account/my-account",
  ogImage:"/vietcatholicjp-bg.jpeg"
}

export default function Custom404() {
    return (
        <Layout meta_data={meta_data} current_page='home'>
            <section className="mt-12 max-w-screen-lg mx-auto px-4">
                <h1 className="font-bold text-3xl">
                    Hiện tại đang cập nhật, xin vui lòng quay lại sau.
                </h1>
            </section>
        </Layout>
    )
}