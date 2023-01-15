import React, { useState, useEffect } from 'react'
import SelectPrefectures from '../select/prefectures'
import {makeUrl} from '../../lib/backendapi'

type Props = {
    onMessage(message:string, type:string, isOpen:boolean): void
}

export default function ContactUs({ onMessage }: Props)
{
    const [selectedPerfecture, setSelectedPerfecture] = useState('all')
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [question, setQuestion] = useState<string>("")
    const [responseMessage, setResponseMessage] = useState<string>("")

    function reset_data() {
        setName("")
        setEmail("")
        setQuestion("")
        setResponseMessage("all")
    }

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
      ): Promise<void> => {
        event.preventDefault()
        if (name.length > 6){
            if(selectedPerfecture!="all"){
                if (question.length < 500){
                    fetch(makeUrl("/api/contact-us/create"),{
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            name: name,
                            email: email.toLowerCase(),
                            question: question,
                            province: selectedPerfecture
                        }),})
                        .then((res) => res.json())
                        .then((data) => {
                            onMessage(data.message,data.status,true)
                            reset_data()
                    })
                }
                else{
                    onMessage('Nội dung câu hỏi quá dài, cần phải ngắn hơn 500 ký tự.','warning',true)
                }
            }
            else{
                onMessage('Vui lòng chọn tỉnh nơi bạn đang sinh sống.','warning',true)
            }
        }
        else{
            onMessage('Tên nhập quá ngắn, cần phải dài hơn 6 ký tự.','warning',true)
        }
        console.log(responseMessage)
    }
    const selectPerfectureChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedPerfecture(value);
    };
    return(
        <div className="relative px-2 lg:px-8">
            <div className="mx-auto max-w-5xl pt-8 pb-8 sm:pt-18 sm:pb-18">
                <div className="p-4 md:px-16 md:py-4 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                    <h1 className="text-3xl my-4 text-center font-serif tracking-tight sm:text-center sm:text-5xl">
                        Liên hệ với giáo đoàn.
                    </h1>
                    <div className="my-4 md:px-24 ms:my-12 relative w-full overflow-x-auto pb-8">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6 md:flex md:flex-row md:space-x-4">
                                <div className="form-control w-full max-w-xs">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Địa chỉ email</label>
                                    <input type="email" id="email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className="input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nguyenvana@gmail.com" required/>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Họ tên</label>
                                    <input type="name" id="name" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}  className="input  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nguyễn Văn A" required/>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <SelectPrefectures selectedRegion='all' onChange={selectPerfectureChange}/>
                                </div>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="question" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tin nhắn</label>
                                <textarea id="question" rows={4} value={question} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setQuestion(e.target.value)}  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Xin hỏi..."></textarea>
                            </div>
                            <div className="mb-6 flex flex-row space-x-4">
                                <button type="submit" className="text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:focus:ring-cyan-700">Gửi</button>
                                <button type="reset" className="text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-pink-500 dark:hover:bg-pink-600 dark:focus:ring-pink-700">Huỷ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}