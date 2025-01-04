

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
                <div style={{opacity: 1}} className="w-full flex justify-center font-bold text-3xl text-purple-500">International Conference on</div>
                <div className="w-full flex justify-center font-bold text-3xl mt-20">Innovations and Sustainability in Civil Engineering:</div>
                <div className="w-full flex justify-center font-bold text-3xl mt-8">Shaping Tomorrow's Infrastructure</div>
                <div className="w-full flex justify-center font-bold text-3xl mt-8">At</div>
                <div className="w-full flex justify-center font-bold text-3xl mt-8">NIT Patna, Ashok Rajpath, Bihar, India - 800005</div>
                <div className="w-full flex justify-center font-bold text-3xl mt-8">14 - 16 May 2025</div>
            </div>
            <div className="h-2 bg-yellow-400"></div>
        </div>
    )
}