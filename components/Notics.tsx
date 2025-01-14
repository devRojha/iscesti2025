"use client"

import { useEffect, useState } from "react"

export default function(){
    const [col, setCol] = useState(true)
    useEffect(()=>{
        const Tim = setInterval(()=>{
            setCol(!col);
        },500);
        return()=>{
            clearInterval(Tim);
        }
    },[col])
    return (
        <div className="flex justify-center w-full p-4">
            <div className="shadow-lg border rounded-md w-[400px] overflow-h-auto">
            <div className="text-2xl font-bold text-center p-2">Notice</div>
            <div className="h-[350px]  p-1 pt-4">
                <ul className={`list-disc ml-4 space-y-2 underline `}>
                <li className={`${(col)? "text-blue-600" :"text-yellow-600"}`}><a href="https://docs.google.com/forms/d/e/1FAIpQLSd9gVbCyeuhoQIRheN6p7SSIFiHYTb_3oRTXemjr20XpEBW8g/viewform" target="blank">Registration Link</a></li>
                <li className={`${(col)? "text-blue-600" :"text-yellow-600"}`}><a href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FISCESTI2025%2FSubmission%2FManage" target="blank">Paper Submission Link</a></li>
                <li><a href="/CSCESTI2025.pdf" target="blank">Download Brochure</a></li>
                </ul>
            </div>
            </div>
        </div>
    )
}