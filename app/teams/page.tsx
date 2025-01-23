"use client"

import Image from "next/image";


export default function Teams() {

  return (
    <div className="px-20 max-sm:px-2 bg-slate-200">
        <div className="pt-20 pb-40 px-8 bg-orange-100 border shadow-lg rounded-lg text-black flex flex-col">
            <div className="text-2xl font-bold text-black mb-8">Teams</div>
            
            {/* Chief Patron  */}
            <div className="mb-20">
                <div className="text-2xl font-bold text-red-900">Chief Patron</div>

                <div className="grid grid-cols-3 max-sm:grid-cols-1 mt-4 mb-4 ">
                    <div className=" col-span-1">
                        <Image className="rounded-md h-[350px] w-[400px]" height={1000} width={1000} src={"/PK.jpg"} alt="Loading.."/>
                    </div>
                    <div className=" col-span-2 flex justify-end pt-8">
                        <div className="w-[85%] flex flex-col max-sm:w-[100%]">
                            <div className="text-[20px] font-semibold">Prof. Pradip Kumar Jain</div>
                            <div className="text-[15px] font-serif text-orange-800">Director NITP</div>
                            <div className="text-[15px] ">Email : <a href="director@nitp.ac.in" >director@nitp.ac.in</a></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Patron  */}
            <div className="mb-20">
                <div className="text-2xl font-bold text-red-900">Patron</div>

                <div className="grid grid-cols-3 max-sm:grid-cols-1 mt-4 mb-4 ">
                    <div className=" col-span-1">
                        <Image className="rounded-md h-[350px] w-[350px]" height={1000} width={1000} src={"/Anshuman.png"} alt="Loading.."/>
                    </div>
                    <div className=" col-span-2 flex justify-end pt-8">
                        <div className="w-[85%] flex flex-col max-sm:w-[100%]">
                            <div className="text-[20px] font-semibold">Prof. Anshuman Singh</div>
                            <div className="text-[15px] font-serif text-orange-800">HOD Civil NITP</div>
                            <div className="text-[15px] ">Email : <a href="asingh@nitp.ac.in" >asingh@nitp.ac.in</a></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Organising Chairman  */}
            <div className="mb-20">
                <div className="text-2xl font-bold text-red-900">Organising Chairman</div>

                <div className="grid grid-cols-3 max-sm:grid-cols-1 mt-4 mb-4 ">
                    <div className=" col-span-1">
                        <Image className="rounded-md h-[400px] w-[350px]" height={1000} width={1000} src={"/NS.png"} alt="Loading.."/>
                    </div>
                    <div className=" col-span-2 flex justify-end pt-8">
                        <div className="w-[85%] flex flex-col max-sm:w-[100%]">
                            <div className="text-[20px] font-semibold">Prof. N.S. Maurya</div>
                            <div className="text-[15px] font-serif text-orange-800">Professor, Civil NITP</div>
                            <div className="text-[15px] ">Email : <a href="nsmaurya@nitp.ac.in" >nsmaurya@nitp.ac.in</a></div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 max-sm:grid-cols-1 mt-4 mb-2 ">
                    <div className=" col-span-1">
                        <Image className="rounded-md border h-[350px] w-[400px]" height={1000} width={1000} src={"/ss.png"} alt="Loading.."/>
                    </div>
                    <div className=" col-span-2 flex justify-end pt-8">
                        <div className="w-[85%] flex flex-col max-sm:w-[100%]">
                            <div className="text-[20px] font-semibold">Dr. S. S. Kumar</div>
                            <div className="text-[15px] font-serif text-orange-800">Professor, Civil NITP</div>
                            <div className="text-[15px] ">Email : <a href="k.shiv.ce@nitp.ac.in" >k.shiv.ce@nitp.ac.in</a></div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 max-sm:grid-cols-1 mt-4 mb-2 ">
                    <div className=" col-span-1">
                        <Image className="rounded-md border h-[350px] w-[400px]" height={1000} width={1000} src={"/Gyani.jpg"} alt="Loading.."/>
                    </div>
                    <div className=" col-span-2 flex justify-end pt-8">
                        <div className="w-[85%] flex flex-col max-sm:w-[100%]">
                            <div className="text-[20px] font-semibold">Dr. A. K. Sharma</div>
                            <div className="text-[15px] font-serif text-orange-800">Assistant Professor, Civil NITP</div>
                            <div className="text-[15px] ">Email : <a href="aks.ce@nitp.ac.in" >aks.ce@nitp.ac.in</a></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Convener  */}
            <div className="mb-20">
                <div className="text-2xl font-bold text-red-900">Convener</div>

                <div className="grid grid-cols-3 max-sm:grid-cols-1 mt-4 mb-4 ">
                    <div className=" col-span-1">
                        <Image className="rounded-md h-[350px] w-[400px]" height={1000} width={1000} src={"/Bhavani.jpg"} alt="Loading.."/>
                    </div>
                    <div className=" col-span-2 flex justify-end pt-8">
                        <div className="w-[85%] flex flex-col max-sm:w-[100%]">
                            <div className="text-[20px] font-semibold">Dr. Bhabani Shankar Das</div>
                            <div className="text-[15px] font-serif text-orange-800">Assistant Professor, Civil NITP</div>
                            <div className="text-[15px] ">Email : <a href="bsd.ce@nitp.ac.in" >bsd.ce@nitp.ac.in</a></div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 max-sm:grid-cols-1 mt-4 mb-2 ">
                    <div className=" col-span-1">
                        <Image className="rounded-md border h-[350px] w-[400px]" height={1000} width={1000} src={"/Gyani.jpg"} alt="Loading.."/>
                    </div>
                    <div className=" col-span-2 flex justify-end pt-8">
                        <div className="w-[85%] flex flex-col max-sm:w-[100%]">
                            <div className="text-[20px] font-semibold">Dr. Gyani Jail Singh</div>
                            <div className="text-[15px] font-serif text-orange-800">Assistant Professor, Civil NITP</div>
                            <div className="text-[15px] ">Email : <a href="gyani@nitp.ac.in" >gyani@nitp.ac.in</a></div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Secretaries  */}
            <div className="mb-20">
                <div className="text-2xl font-bold text-red-900">Orgenizing Secretaries</div>
                
                <div className="grid grid-cols-3 max-sm:grid-cols-1 mt-4 mb-2 ">
                    <div className=" col-span-1">
                        <Image className="rounded-md border h-[350px] w-[350px]" height={1000} width={1000} src={"/Govind.jpg"} alt="Loading.."/>
                    </div>
                    <div className=" col-span-2 flex justify-end pt-8">
                        <div className="w-[85%] flex flex-col max-sm:w-[100%]">
                            <div className="text-[20px] font-semibold">Dr. Govind Mohan</div>
                            <div className="text-[15px] font-serif text-orange-800">Assistant Professor, Civil NITP</div>
                            <div className="text-[15px] ">Email : <a href="govindmohan.ce@nitp.ac.in" >govindmohan.ce@nitp.ac.in</a></div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 max-sm:grid-cols-1 mt-4 mb-4 ">
                    <div className=" col-span-1">
                        <Image className="rounded-md h-[350px] w-[350px]" height={1000} width={1000} src={"/joseph.jpg"} alt="Loading.."/>
                    </div>
                    <div className=" col-span-2 flex justify-end pt-8">
                        <div className="w-[85%] flex flex-col max-sm:w-[100%]">
                            <div className="text-[20px] font-semibold">Dr. Joseph Tripura</div>
                            <div className="text-[15px] font-serif text-orange-800">Assistant Professor, Civil NITP</div>
                            <div className="text-[15px] ">Email : <a href="joseph.ce@nitp.ac.in" >joseph.ce@nitp.ac.in</a></div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 max-sm:grid-cols-1 mt-4 mb-2 ">
                    <div className=" col-span-1">
                        <Image className="rounded-md border h-[350px] w-[350px]" height={1000} width={1000} src={"/Satyajit.jpg"} alt="Loading.."/>
                    </div>
                    <div className=" col-span-2 flex justify-end pt-8">
                        <div className="w-[85%] flex flex-col max-sm:w-[100%]">
                            <div className="text-[20px] font-semibold">Dr. Satyajit Mondal</div>
                            <div className="text-[15px] font-serif text-orange-800">Assistant Professor, Civil NITP</div>
                            <div className="text-[15px] ">Email : <a href="satyajit.ce@nitp.ac.in" >satyajit.ce@nitp.ac.in</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
