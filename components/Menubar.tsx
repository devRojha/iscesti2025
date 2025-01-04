// import Image from "next/image";

export default function Menubar(){
    return (
        <div className="h-full flex justify-between">
            <div className="flex">
                <div className="h-full  pl-4 flex flex-col justify-center">
                    {/* <Image className=" rounded-full h-14 w-14" src={"/logo.png"} alt="Loading..." height={100} width={100}/> */}
                </div>
                <div className="h-full ml-4 font-bold text-white flex flex-col justify-center">
                    ISCESTI-2025
                </div>
            </div>
            <div className="flex">
                <div className="h-full mr-10 font-bold text-white flex flex-col justify-center">
                    <button className=" hover:border-b-4 border-yellow-500 py-4">Home</button>
                </div>
                <div className="h-full mr-10 font-bold text-white flex flex-col justify-center">
                    <button className=" hover:border-b-4 border-yellow-500 py-4">Committies</button>
                </div>
                <div className="h-full mr-10 font-bold text-white flex flex-col justify-center">
                    <button className=" hover:border-b-4 border-yellow-500 py-4">Author&apos;s Corner</button>
                </div>
                <div className="h-full mr-10 font-bold text-white flex flex-col justify-center">
                    <button className=" hover:border-b-4 border-yellow-500 py-4">Speakers</button>
                </div>
                <div className="h-full mr-10 font-bold text-white flex flex-col justify-center">
                    <button className=" hover:border-b-4 border-yellow-500 py-4">Venue</button>
                </div>
                <div className="h-full mr-10 font-bold text-white flex flex-col justify-center">
                    <button className=" hover:border-b-4 border-yellow-500 py-4">Contact</button>
                </div>
            </div>
        </div>
    )
}