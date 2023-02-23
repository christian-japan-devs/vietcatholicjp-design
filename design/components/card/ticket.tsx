import {Event} from '../../types/event'
import { QRCodeSVG } from 'qrcode.react'
import { useState, useEffect } from 'react';

type Props = {
    event?: Event,
    onSubmit?: (id:string) => void,
}

export default function TicketCard({event,onSubmit}: Props ){
    const [qr_code_side, setQrCodeSide] = useState(88);
    const [qr_code_position, setQrCodePosition] = useState(" bottom-bs left-ls");

    useEffect(() => {
        if(window.innerWidth > 380){
            setQrCodeSide(100);
            setQrCodePosition(" bottom-bl left-ll");
       }
    }, []);

    return (
        <div className="max-w-sm relative">
            <img className="z-0 justify-center" alt="" aria-hidden="true" src="/Tham_Du_Vien_Online_1.svg"/>
            <div className={"z-10 absolute "+qr_code_position}>
                <QRCodeSVG value="https://www.vietcatholic.jp/my-code/?code=BCDEF&email=dang.hoang.geo@gmail.com" size={qr_code_side}  fgColor="#2F86A6"/>
            </div>
            <div className="z-10 w-full absolute bottom-60">
                <p className='width-full font-bold text-xl font-serif text-center text-cyan-800'>VINH SƠN</p>
                <p className='font-bold mt-2 text-3xl font-serif text-center text-cyan-900'>HOÀNG MINH PHONG</p>
            </div>
        </div>
    )
}