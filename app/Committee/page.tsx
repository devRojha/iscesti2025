"use client"
import { useState } from "react";


export default function Committee() {
    const [resion , setResion] = useState(true);
  return (
    <div className="py-20 bg-orange-100 pt-10">
        <div className=" mx-10  text-red-900 font-bold text-4xl max-sm:text-[22px]">Technical Advisory Committee</div>
        {/* button  */}
        <div className="mx-10 my-4 flex space-x-3 h-10 font-bold">
            <button onClick={()=>setResion(true)} className={`hover:bg-red-700 ${(resion)?"bg-red-900 text-white":"text-black"} border px-2  rounded-md border-black`}>National</button>
            <button onClick={()=>setResion(false)} className={`hover:bg-red-700 ${(!resion)?"bg-red-900 text-white":"text-black"} border px-2 rounded-md  border-black`}>International</button>
        </div>
        <div className="mx-10 max-sm:mx-6 mt-10">
            <div className={`${(resion)?"flex":"hidden"}`}>
                <ul className="mx-10 list-disc text-black space-y-2 text-[20px] max-sm:text-sm max-md:text-[15px] max-sm:mx-2 ">
                    <li>Prof. T.G. Sitharam, Chairman, AICTE</li>
                    <li>Prof. Manoranjan Parida, Director, CSIR-CRRI</li>
                    <li>Prof. T.N. Singh, Director, IIT Patna</li>
                    <li>Prof. P.L. Patel, Director, VNIT Nagpur</li>
                    <li>Prof. M.M Ghangrekar, Director, NIT Puducherry</li>
                    <li>Prof. Animesh Das, IIT Kanpur</li>
                    <li>Prof. Sudip Kumar Roy, IIEST Shibpur</li>
                    <li>Prof. K.K. Khatua, NIT Rourkela</li>
                    <li>Prof. Avijit Maji, IIT Bombay</li>
                    <li>Prof. P.K.S. Dixit, IIT BHU Varanasi Prof. Rajesh Kumar, IIT BHU Varanasi</li>
                    <li>Prof. Ankil Kumar Sachan, MNIT Allahabad</li>
                    <li>Prof. P.V. Rao, NIT Warrangal</li>
                    <li>Prof. A Murlikrishna, IIT Tirupati Prof. G.S. Dwarakish, NIT Surathkal Prof. P.R. Maiti, IIT BHU Varanasi Prof. Sanjay Mathur, NIT Jaipur</li>
                    <li>Prof. Rajib Kumar Bhattacharjya, IIT Guwahati</li>
                    <li>Dr. K. K. Pandey, IIT BHU Varanasi Dr. Ankit Gupta, IIT BHU Varanasi</li>
                    <li>Dr. Arindam Dey, IIT Guwahati</li>
                    <li>Dr. Anil Kumar Bachu, IIT Patna</li>
                    <li>Dr. Mohit Prakash Mohanty, IIT Roorkee</li>
                    <li>Dr. Umesh Kumar Pandey, NIT Hamirpur</li>
                    <li>Dr. Pardeep Kumar, NIT Hamirpur</li>
                    <li>Dr. Sunil Kumar, NEIRI Nagpur Er. Ajoy Kumar Sinha, IE India</li>
                    <li>Dr. Pankaj Kumar, NIT Nagaland</li>
                    <li>Dr. Bhupendra Singh, IIT Jodhpur</li>
                    <li>Dr. Subhadeep Biswas, NIT Silchar</li>
                    <li>Dr. Sabyasachi Biswas, NIT Durgapur</li>
                    <li>Dr. Joy Pal, NIT Sikkim</li>
                    <li>Dr. Ajay Kumar, NIT Delhi</li>
                    <li>Dr. Arya Anuj Jee, NIT Jalandhar</li>
                    <li>Dr. Hillol Chakravarty, NIT Calicat</li>
                    <li>Dr. Rahul Kumar Biswas, VNIT Nagpur</li>
                    <li>Dr. Manish Pandey, IIT Kharagpur</li>
                    <li>Dr Ahhishek Kumar Pandev IT (ISM) Dhanhad</li>
                </ul>
            </div>
            <div className={`${(!resion)?"flex":"hidden"}`}>
                <ul className="mx-10 list-disc text-black space-y-2 text-[20px] max-sm:text-sm max-md:text-[15px] max-sm:mx-2 ">
                    <li>Prof. Nigel Wright, University of Birmingham</li>
                    <li>Prof. R.D. Tyagi, University of Cubec</li>
                    <li>Prof. Ramesh Goel, University of Utah</li>
                    <li>Prof. Gorge S. Contantinescu, University of lowa</li>
                    <li>Prof. Alexandre de Barros, University of Calgary</li>
                    <li>Dr. Dilum Dissanayake, University of Birmingham</li>
                    <li>Dr. Babak Mehran, University of Manitoba</li>
                    <li>Prof. Pallav Kumar, CPUT Capetown</li>
                    <li>Prof. Subhamoy Bhattacharya, University of Surrey</li>
                    <li>Dr. Anna Charly, University of Liverpool</li>
                    <li>Dr. Sebastien Proust, INRAE, Lyon France</li>
                    <li>Dr. Vijay Kumar Gupta, Dublin City of University</li>
                    <li>Dr. Saptarshi Sen, University College Dublin</li>
                    <li>Dr. Danuta Barnal-Hunek, LUT Poland</li>
                </ul>
            </div>
        </div>
    </div>
  );
}
