



export default function Footer(){
    return (
        <div>
            <div className="px-20 pb-4">
                <div className="text-2xl font-bold mt-4">Contact us : </div>
                <div className="grid grid-cols-2">
                    <div className="text-sm  mt-4">
                        <div>Organizing Chairs / Program Chairs, ISCESIT-2025</div>
                        <div>Department of Civil Engineering</div>
                        <div>National Institue of Technology</div>
                        <div>Patna, Bihar</div>
                        <div>India, PIN-800005</div>
                        <div>Patna, Bihar</div>
                        <div>E-Mail : <a className="underline" href="mailto:iscesit2025@gmail.com">iscesit2025@gmail.com</a></div>
                    </div>
                    <div className="w-full h-full flex justify-end font-mono text-sm font-bold">
                        <div className="h-full flex flex-col justify-end">Designed and Maintained by : Devraj Kumar</div>
                    </div>
                </div>
            </div>
            <div className="bg-green-800 w-full text-center text-white text-sm">@ All right reserved</div>
        </div>
    )
}