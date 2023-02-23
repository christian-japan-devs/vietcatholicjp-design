import {Event} from '../../types/event'
import { QRCodeSVG } from 'qrcode.react'
import { useState, useEffect } from 'react';

type Props = {
    event?: Event,
    onSubmit?: (id:string) => void,
}

export default function TicketCard({event,onSubmit}: Props ){
    const [qr_code_side, setQrCodeSide] = useState(90);
    const [qr_code_position, setQrCodePosition] = useState("bottom-bs");
    const [text_position, setTextPosition] = useState("bottom-tbs");

    useEffect(() => {
        if(window.innerWidth > 380){
            setQrCodeSide(100);
            setTextPosition("bottom-tbl")
            setQrCodePosition("bottom-bl");
       }
    }, []);

    return (
        <div className="max-w-sm relative">
            <img className="z-0 justify-center" alt="" aria-hidden="true" src="/Tham_Du_Vien_Online_1.png"/>
            <div className={"z-10 w-full absolute "+text_position}>
                <p className='width-full font-bold text-xl font-serif text-center text-cyan-800'>VINH SƠN</p>
                <p className='font-bold mt-2 text-2xl font-serif text-center text-cyan-900'>HOÀNG MINH PHONG</p>
            </div>
            <div className={"z-10 absolute w-full "+qr_code_position}>
                <div className={"flex justify-center"}>
                    <QRCodeSVG value="https://www.vietcatholic.jp/my-code/?code=BCDEF&email=dang.hoang.geo@gmail.com" size={qr_code_side}  fgColor="#2F86A6"/>
                </div>
            </div>
        </div>
    )
}