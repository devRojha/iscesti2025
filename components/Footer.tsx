



export default function Footer(){
    return (
        <div className="">
            <div className="px-20 max-lg:px-12 max-md:px-6 py-4 text-zinc-600 bg-zinc-300">
                <div className="text-2xl font-bold mt-4">Contact us : </div>
                <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:space-y-2">
                    <div className="text-sm  mt-4">
                        <div>Organizing Chairs / Program Chairs, ISCESTI-2025</div>
                        <div>Department of Civil Engineering</div>
                        <div>National Institue of Technology</div>
                        <div>Patna, Bihar</div>
                        <div>India, PIN-800005</div>
                        <div>Patna, Bihar</div>
                        <div>E-Mail : <a className="underline" href="mailto:iscesti2025@gmail.com">iscesti2025@gmail.com</a></div>
                    </div>
                    <div className="w-full h-full flex justify-end font-mono text-sm font-bold">
                        <div className="h-full flex flex-col justify-end max-lg:text-[12px] max-sm:text-[10px]">Designed and Maintained by : Devraj Kumar</div>
                    </div>
                </div>
            </div>
            <div className="bg-green-800 w-full text-center text-white text-sm">@ All right reserved</div>
        </div>
    )
}