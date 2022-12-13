import SelectPrefectures from '../select/prefectures'

export default function ContactUs()
{
    return(
        <div className="relative px-2 lg:px-8">
            <div className="mx-auto max-w-5xl pt-8 pb-8 sm:pt-18 sm:pb-18">
                <div className="p-4 md:px-16 md:py-4 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                    <h1 className="text-3xl my-4 text-center font-serif tracking-tight sm:text-center sm:text-5xl">
                        Liên hệ với giáo đoàn.
                    </h1>
                    <div className="my-4 md:px-24 ms:my-12 relative w-full overflow-x-auto pb-8">
                        <form>
                            <div className="mb-6 md:flex md:flex-row md:space-x-4">
                                <div className="form-control w-full max-w-xs">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Địa chỉ email</label>
                                    <input type="email" id="email" className="input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nguyenvana@gmail.com" required/>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Họ tên</label>
                                    <input type="name" id="name" className="input  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nguyễn Văn A" required/>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <SelectPrefectures/>
                                </div>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tin nhắn</label>
                                <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Xin hỏi..."></textarea>
                            </div>
                            <div className="mb-6 flex flex-row space-x-4">
                                <button type="submit" className="text-white bg-cyan-600 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:focus:ring-cyan-700">Gửi</button>
                                <button type="reset" className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-pink-500 dark:hover:bg-pink-600 dark:focus:ring-pink-700">Huỷ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}