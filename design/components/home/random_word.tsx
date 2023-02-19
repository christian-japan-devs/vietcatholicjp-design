
import type { NextPage } from 'next'
import React, { useState, } from 'react'
import {GospelWord} from '@/types/gospel'
import {makeUrl} from '@/lib/backendapi'

const RandomWord: NextPage = () => {
    const [word, setWord] = useState<GospelWord>()
    const [onLoading, setOnLoading] = useState(false)

    function onGetWord() {
        setOnLoading(true)
        let headers = {
          'Content-Type': 'application/json',
        }
        fetch(makeUrl("/api/gospel-random/?type=home"),{
          method: 'GET',
          headers: headers
        })
        .then((res) => res.json())
        .then((data) => {
          if(data.status === 'ok'){
            setWord(data.gospel_random)
            setOnLoading(false)
          }else{
            //onMessage("Xin lỗi đã có lỗi xảy ra, vui lòng thử lại sau.")
            //openModal()
          }
        })
    }

    return(
        <div className="flex md:my-4 justify-center">
          <div className="items-center block p-4 max-w-lg mx-2 bg-gradient-to-l from-indigo-600 to-pink-600 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
              <p className="font-serif text-center text-lg my-2 p-2 rounded-md backdrop-blur-md bg-white/20 text-gray-200 dark:text-gray-200">{word?.word?word.word:"Bấm vào nút phía dưới để nhận câu Lời Chúa cho năm 2023 của bạn."}</p>
              <div className="flex items-center mt-4">
              {word?.image_vertical?<div className="flex items-center space-x-4">
                <a href={word?.image_vertical} target="_blank" className="text-gray-300 backdrop-blur-md bg-white/20 p-2 rounded shadow-sm hover:bg-gray-300 hover:text-gray-800">Ảnh nền phone</a>
                <a href={word?.image_horizontal} target="_blank" className="text-gray-300 backdrop-blur-md bg-white/20 p-2 rounded shadow-sm hover:bg-gray-300 hover:text-gray-800">Ảnh cover Fb</a>
                </div>
                :<button type="button" onClick={onGetWord} disabled={onLoading} className={"text-gray-300 p-2 rounded shadow-sm hover:bg-gray-300 hover:text-gray-800 dark:text-gray-800"+(onLoading?"bg-gray-500 dark:bg-gray-800":"backdrop-blur-md bg-white/10")}>{onLoading?"Đang tải...":"Lấy Lộc đầu năm mới"}</button>
              }
              </div>
          </div>
      </div>
    )
}

export default RandomWord