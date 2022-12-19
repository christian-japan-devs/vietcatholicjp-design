import Layout from '../components/layout/Layout'
import Link from 'next/link'

type Props = { 
  statusCode: number
}

const meta_data = {
  title:"VietCatholicJapan-error",
  description:"Có lỗi xảy ra",
  ogUrl:"",
  ogImage:""
}

function Error({ statusCode }: Props) {
    return <Layout meta_data={meta_data} current_page="error" >
          <section className="mt-12 max-w-screen-lg mx-auto px-4 space-y-4"><p>
            {statusCode
              ? `Có lỗi ${statusCode} đã xảy ra ở máy chủ`
              : 'Lỗi đã xảy ra ở máy người dùng'}
          </p>
          <Link href="/">
            <a className="flex items-center">
                <img src="/Anviet_Advent_Lent.svg" className="mr-3 h-6 sm:h-9" alt="Anviet Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Về trang chủ</span>
            </a>
          </Link>
          </section>
        </Layout>
}

Error.getInitialProps = ({ res, err }:{res: any, err: any}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error