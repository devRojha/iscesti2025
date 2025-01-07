



export default function Footer(){
    return (
        <div className="">
            <div className="px-20 max-lg:px-12 max-md:px-6 pt-4 mt-12 text-zinc-600 bg-zinc-300">
                <div className="text-2xl text-center mb-10 font-bold mt-4">Contact us : </div>
                <div className="grid grid-cols-3 max-sm:grid-cols-1 max-sm:space-y-2">
                    {/* Layer 1 */}
                    <div className="flex flex-col">
                        <div className="font-bold">Chief Patron</div> 
                        <div>Prof. Pradip Kumar Jain</div> 
                        <div>Director, National Institute of Technology Patna</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="font-bold">Patron</div> 
                        <div>Prof. Anshuman Singh</div> 
                        <div>Head of Department, CED</div>
                    </div>
                    <div></div>
                    {/* Layer 2 */}
                    <div className="text-sm  mt-4">
                        <div className="font-bold mb-1">Organizing Chairman</div>
                        <div>Prof. N.S. Maurya</div>
                        <div>Dr. S. S. Kumar</div>
                        <div>Dr. A. K. Sharma</div>
                    </div>
                    <div className="text-sm  mt-4">
                        <div className="font-bold mb-1">Convener</div>
                        <div>Dr. Bhabani Shankar Das (+91-7978848747)</div>
                        <div>Dr. Gyani Jail Singh (+91-9805597929)</div>
                    </div>
                    <div className="text-sm  mt-4">
                        <div className="font-bold mb-1">Orgenizing Secretaries</div>
                        <div>Dr. Joseph Tripura (+91-9678976101)</div>
                        <div>Dr. Satyajit Mondal (+91-9804874257)</div>
                        <div>Dr. Govind Mohan (+91-8988449726)</div>
                    </div>

                    {/* Layer 3 */}
                    <div className="text-sm  mt-4">
                        <div>Email: <a className="underline" href="mailto:iscesti2025@nitp.ac.in">iscesti2025@nitp.ac.in</a></div>
                        <div>Registartion: <a className="underline text-blue-800" href="https://forms.gle/ZMHhJ8K2471rkLDQ8" target="blank">Link</a></div>
                        <div>College Website: <a className="underline" href="">www.nitp.ac.in</a></div>
                    </div>
                </div>

                <div className="w-full h-full flex justify-end font-mono text-sm font-bold mt-6">
                    <div className="h-full flex flex-col justify-end max-lg:text-[12px] max-sm:text-[10px]">Designed and Maintained by : Devraj Kumar</div>
                </div>
            </div>
            <div className="bg-green-800 w-full text-center text-white text-sm">@ All right reserved</div>
        </div>
    )
}