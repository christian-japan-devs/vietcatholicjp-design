import { getProviders, signIn, getSession, getCsrfToken } from "next-auth/react"
import Layout from "../../components/layout/Layout"
import { FormEventHandler, useState } from "react"
import Link from "next/link"
import Router from "next/router"

const meta_data = {
  title:"VietCatholicJp-Signup",
  description:"Đăng nhập",
  ogUrl:"/account/signin",
  ogImage:"/vietcatholicjp-bg.jpeg"
}

function Signin({ providers }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e) => {
    //TODO: validate user infor
    e.preventDefault()
    const res = await signIn('credentials',{
      username: username,
      password: password
    })
    console.log(res)
  }
  return (
    <>
      <Layout meta_data={meta_data} current_page='account'>
        <div className="relative mt-4 overflow-hidden pt-4 pb-16">
        <img src='/viet-catholicjp-312.svg' alt='' className='absolute -top-[1rem] left-1/2 -ml-[30rem] w-[140.125rem] sm:w-[163.125rem] max-w-none sm:-ml-[67.5rem]'/>
          <div className='flex items-center justify-center relative mx-auto mt-16 w-full max-w-container grid-cols-1 sm:mt-16 sm:px-6 lg:px-8 xl:mt-32'>
            <div className='p-4 w-full max-w-sm shadow-2xl bg-white rounded-lg border border-gray-200 sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
              <div>
                  <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                    Đăng nhập
                  </h2>
              </div>
              <form className="space-y-6 mt-4" onSubmit={handleSubmit}>
                  <div>
                      <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tên tài khoản đăng nhập</label>
                      <input type="text" name="username" id="username" value={username}
                        onChange={(e) =>
                          setUsername(e.target.value)
                        } 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Viết liền không khoản trắng" required/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mật khẩu</label>
                      <input type="password" name="password" id="password" value={password}
                        onChange={(e) =>
                          setPassword(e.target.value)
                        } placeholder="••••••••" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900"
                      >
                      </label>
                    </div>
                    <div className="text-sm">
                      <a
                        href="/account/reset-account"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Quên mật khẩu?
                      </a>
                    </div>
                  </div>
                  <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Đăng nhập</button>
              </form>
              <div className="text-md my-4 font-medium text-gray-500 dark:text-gray-300">
                Chưa có tài khoản? <a href="/account/signup" className="text-blue-700 hover:underline dark:text-blue-500">Tạo tài khoản mới</a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
/**
 * <div className="items-center mt-4 justify-between">
      <div className="text-sm text-center">Hoặc đăng nhập với</div>
      <div className="flex items-center justify-between mt-4">
        {Object.values(providers).map((provider) => {
          if(provider.name != "Credentials"){
          return (
            <div className="flex mx-4" key={provider.name}>
              <button onClick={() => signIn(provider.id)} type="button" className="inline-block px-2 sm:px-6 py-2 border-2 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
              {provider.name}</button>
            </div>
          )
          }
        })}
      </div>
    </div>
 */
export async function getServerSideProps(context ) {
  const { req } = context
  const session = await getSession({ req })

  if (session) {
    return {
      redirect: { destination: "/" },
    }
  }

  return {
    props: {
      providers: await getProviders(),
    },
  }
}

export default Signin
