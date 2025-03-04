"use client"

import { useEffect, useState } from "react"

export default function Notice(){
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
        <div className="flex justify-center w-full p-4 bg-white text-black">
            <div className="shadow-lg border rounded-md w-[400px] overflow-h-auto">
                <div className="text-2xl font-bold text-center p-2 font-serif">Notice</div>
                <div className="h-[350px]  p-3 pt-4">
                    <ul className={`list-disc ml-4 space-y-2 underline `}>
                    <li className={`${(col)? "text-blue-600" :"text-yellow-600"}`}><a href="/Full_paper_template.docx" target="blank">Download Full Paper Template</a></li>
                    <li className={`${(col)? "text-blue-600" :"text-yellow-600"}`}><a href="https://docs.google.com/forms/d/e/1FAIpQLSd9gVbCyeuhoQIRheN6p7SSIFiHYTb_3oRTXemjr20XpEBW8g/viewform" target="blank">Registration Link</a></li>
                    <li className={`${(col)? "text-blue-600" :"text-yellow-600"}`}><a href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FISCESTI2025%2FSubmission%2FManage" target="blank">Paper Submission Link</a></li>
                    <li><a href="/CSCESTI2025.pdf" target="blank">Download Brochure</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-md:hidden shadow-lg border rounded-md w-[450px] overflow-h-auto ml-[50px]">
                <div className="text-2xl font-bold text-center p-2 font-serif">Important Dates</div>
                <div className="h-[350px]  p-2 pt-4">
                    <ul className={`list-disc ml-4 space-y-2 `}>
                    <li>Submission of Full-Length Paper: <span className="italic text-blue-500">31st March 2025</span></li>
                    <li>Notification of Acceptance: <span className="italic text-blue-500">21st April 2025</span></li>
                    <li>Revised Paper Submission Deadline: <span className="italic text-blue-500">28th April 2025</span></li>
                    <li>Final Notification Acceptance: <span className="italic text-blue-500">30th April 2025</span></li>
                    <li>Date of Conference: <span className="italic text-blue-500">14-16th May 2025</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}