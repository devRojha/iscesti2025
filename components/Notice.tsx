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
        <div className="flex justify-between w-full p-4 bg-white text-black max-sm:flex-col max-sm:space-y-4">
            <div className="shadow-lg border rounded-md w-[400px] overflow-h-auto">
                <div className="text-2xl font-bold text-center p-2 font-serif">Notice</div>
                <div className="h-[350px]  p-3 pt-4">
                    <ul className={`list-disc ml-4 space-y-2 underline `}>
                    <li className={`${(col)? "text-blue-600" :"text-yellow-600"}`}><a href="/Results_250522_135248.pdf" target="blank">Best paper and Best Presentation</a></li>
                    <li className={`${(col)? "text-blue-600" :"text-yellow-600"}`}><a href="/ICESTI-2025.pptx" target="blank">Template of presentation (pptx)</a></li>
                    <li className={`${(col)? "text-blue-600" :"text-yellow-600"}`}><a href="/Schedule_of_Presentation_ISCESTI_2025.pdf" target="blank">Schedule of Presentation</a></li>
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
                    <li>Submission of Full-Length Paper: <span className="italic text-blue-500">15th April 2025</span></li>
                    <li>Notification of Acceptance: <span className="italic text-blue-500">21st April 2025</span></li>
                    <li>Revised Paper Submission Deadline: <span className="italic text-blue-500">28th April 2025</span></li>
                    <li>Final Notification Acceptance: <span className="italic text-blue-500">20th April 2025</span></li>
                    <li>Date of Conference: <span className="italic text-blue-500">14-16th May 2025</span></li>
                    </ul>
                </div>
            </div>
            <div className="shadow-lg border rounded-md w-[400px] overflow-h-auto">
                <div className="text-2xl font-bold text-center p-2 font-serif">Author Notice</div>
                <div className="h-[350px]  p-3 pt-4">
                    <ul className={`list-disc ml-4 space-y-2 `}>
                    <li className={`${(col)? "text-blue-600" :"text-yellow-600"}`}>Select papers from the conference will be published by Springer as a proceedings book volume. Springer will conduct quality checks on the accepted papers and only papers that pass these checks will be published.</li>
                    <li className={`${(col)? "text-blue-600" :"text-yellow-600"}`}>Springer Nature does not charge any money for publication of Non-Open Access content. Abstracts/extended abstracts and short papers (less than 4 pages) are not considered for publication.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}