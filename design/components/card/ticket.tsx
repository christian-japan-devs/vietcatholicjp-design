import {Event} from '../../types/event'
import { QRCodeSVG } from 'qrcode.react'
import { useState, useEffect } from 'react';
import {Ticket} from '@/types/event'

type Props = {
    ticket:Ticket,
    onSubmit?: (id:string) => void,
}

export default function TicketCard({ticket,onSubmit}: Props ){
    const [qr_code_side, setQrCodeSide] = useState(90);
    const [qr_code_position, setQrCodePosition] = useState("bottom-bs");
    const [text_position, setTextPosition] = useState("bottom-tbs");

    useEffect(() => {
        if(window.innerWidth > 380){
            setQrCodeSide(100);
            setTextPosition("bottom-tbl")
            setQrCodePosition("bottom-bl")
       }
    }, []);

    return (
        <div className="max-w-sm relative">
            <img className="z-0 justify-center" alt="" aria-hidden="true" src={ticket.ticket}/>
            <div className={"z-10 w-full absolute "+text_position}>
                <p className='width-full font-bold text-xl font-serif text-center text-cyan-800'>{ticket.saint_name}</p>
                <p className='font-bold mt-2 text-xl font-serif text-center text-cyan-900'>{ticket.full_name}</p>
                <p className='width-full mt-2 font-bold text-xl font-serif text-center text-cyan-900'>{ticket.team_no}</p>
            </div>
            <div className={"z-10 absolute w-full "+qr_code_position}>
                <div className={"flex justify-center"}>
                    <QRCodeSVG value={"event=VCJYII&id="+ticket.id+"&code="+ticket.ticket_code+"&email="+ticket.email} size={qr_code_side}  fgColor="#80135e"/>
                </div>
            </div>
        </div>
    )
}