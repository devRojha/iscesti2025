

export default function Hero(){
    return (
        <div>
            <div className="relative flex flex-col py-20 overflow-hidden text-white">
                <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: "url('/nitpatna.jpg')",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundColor: "rgba(0, 0, 0, 0.4)", 
                    backgroundBlendMode: "darken",
                    zIndex: -1,
                }}></div>
                <div className="text-3xl max-md:text-2xl max-sm:text-[15px]">
                    <div style={{opacity: 1}} className="w-full flex justify-center font-bold text-purple-500">International Conference on</div>
                    <div className="w-full flex justify-center font-bold mt-20">Innovations and Sustainability in Civil Engineering:</div>
                    <div className="w-full flex justify-center font-bold mt-8">Shaping Tomorrow&apos;s Infrastructure</div>
                    <div className="w-full flex justify-center font-bold mt-8">At</div>
                    <div className="w-full flex justify-center font-bold mt-8">NIT Patna, Ashok Rajpath, Bihar, India - 800005</div>
                    <div className="w-full flex justify-center font-bold mt-8">14 - 16 May 2025</div>
                </div>
            </div>
            <div className="h-2 bg-yellow-400"></div>
        </div>
    )
}