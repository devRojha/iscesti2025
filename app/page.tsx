import Hero from "@/components/Hero";
import Image from "next/image";


export default function Home() {
  return (
    <div className="">
        <Hero />
      <div className="h-40 bg-white">
      </div>
      {/* about  */}
      <div className="grid grid-cols-2 max-lg:px-6 max-lg:grid-cols-1 border px-20 max-sm:px-4 bg-zinc-100 py-20 space-x-4 max-lg:space-x-0 max-lg:space-y-4 text-black">
        <div className="max-lg:mb-4">
         <Image className="shadow-lg rounded-md" src={"/Temp.jpg"} alt="Loading..." height={1000} width={1000}/>
        </div>
        <div className="border px-4 py-6 shadow-lg rounded-lg text-sm font-serif bg-white">
          <div className="text-4xl max-sm:text-2xl max-lg:text-2xl font-bold mb-8">About Conference</div>
          <p className="text-justify">The Seventh International Conference on Computational Intelligence in Communications and Business Analytics (CICBA 2025) aims to carry together researchers, engineers, developers, and practitioners from academia and industry to share their experiences, and exchange and synthesize their ideas. CICBA 2025 will be organized by the Department of Information Technology, Jadavpur University, Kolkata during July 4-6, 2025. CICBA 2017 and CICBA 2018 were organized by Calcutta Business School, Kolkata, and Kalyani Government Engineering College, Kalyani, respectively. The first two series of this international conference were organized in association with the Computer Society of India. The third conference of this series was organized in 2021 by the Department of Computer & System Sciences, Visva-Bharati University. The fourth international conference of this series was organized in 2022 by the Department of Computer Science and Engineering, Assam University. The fifth and sixth series of the conference was organized in 2023 and 2024 by Kalyani Govt. Engg. College and National Institute of Technology, Patna, respectively. All these previous series of this conference constituted a collection of high-quality peer-reviewed research papers received from all over the world. The chairs and co-chairs of different committees consisted of international academic and industrial luminaries, and the Technical Program Committee comprised of technical experts, in all the series. </p>
          <br></br>
          <p className="text-justify">The proceedings publication partner in all the previous conferences was Springer Nature in CCIC series.</p>
        </div>
      </div>
    </div>
  );
}
