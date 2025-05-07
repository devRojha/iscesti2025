

export default function SlidingNotice(){
    return (
        <div className="h-40 max-sm:h-20 relative flex flex-col justify-center bg-orange-50 text-black overflow-hidden z-0">
            <div className="absolute animate-slide overflow-auto text-red-900 flex">
                <div className="mr-20">Schedule of Presentation :  <a href="/Schedule_of_Presentation_ISCESTI_2025.pdf" className="underline text-blue-700" target="blank">click here</a></div>
                <div>Paper Submission Link :  <a href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FISCESTI2025%2FSubmission%2FManage" className="underline text-blue-700" target="blank">click here</a></div>
            </div>
            <div className="max-sm:hidden grid grid-cols-8 h-full">
                <div className="col-span-1  z-20 bg-orange-50"></div>
                <div className="col-span-6"></div>
                <div className="col-span-1  z-20 bg-orange-50"></div>
            </div>
      </div>
    )
}