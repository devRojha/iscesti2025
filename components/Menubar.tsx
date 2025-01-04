"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Menubar({option , setoption} : {option : boolean, setoption: React.Dispatch<React.SetStateAction<boolean>>}){
    const router = useRouter();
    return (
        <div className="h-full flex justify-between">
            <div className="flex">
                <div className="h-full  pl-4 flex flex-col justify-center">
                    <Image className=" rounded-full h-14 w-14" src={"/logo.png"} alt="Loading..." height={100} width={100}/>
                </div>
                <div className="h-full ml-4 font-bold text-white flex flex-col justify-center">
                    ISCESTI-2025
                </div>
            </div>
            <div className="flex space-x-10 pr-4 font-bold max-lg:space-x-4 max-md:hidden">
                <div className="h-full text-white flex flex-col justify-center">
                    <button onClick={()=>router.push("/")} className=" hover:border-b-4 border-yellow-500 py-4">Home</button>
                </div>
                <div className="h-full text-white flex flex-col justify-center">
                    <button className=" hover:border-b-4 border-yellow-500 py-4">Committies</button>
                </div>
                <div className="h-full text-white flex flex-col justify-center">
                    <button className=" hover:border-b-4 border-yellow-500 py-4">Author&apos;s Corner</button>
                </div>
                <div className="h-full text-white flex flex-col justify-center">
                    <button className=" hover:border-b-4 border-yellow-500 py-4">Speakers</button>
                </div>
                <div className="h-full text-white flex flex-col justify-center">
                    <button className=" hover:border-b-4 border-yellow-500 py-4">Venue</button>
                </div>
                <div className="h-full text-white flex flex-col justify-center">
                    <button onClick={()=>router.push("#footer")} className=" hover:border-b-4 border-yellow-500 py-4">Contact</button>
                </div>
            </div>
            <div className="hidden max-md:flex pr-6 flex-col justify-center">
                <button onClick={()=>(setoption(false))} className={`${(option)? "flex" : "hidden"}`}>
                    <Image src={"/menu.png"} alt="loading" height={30} width={30}/>
                </button>
                <button onClick={()=>(setoption(true))} className={`${(option == false)? "flex" : "hidden"}`}>
                    <Image src={"/close.png"} alt="loading" height={30} width={30}/>
                </button>
            </div>
        </div>
    )
}