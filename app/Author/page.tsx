"use client"
import { useState } from "react";


export default function Author() {

  return (
    <div className="px-20 max-sm:px-2 bg-slate-200">
        <div className="pt-20 pb-40 bg-orange-100 border shadow-lg rounded-lg text-black flex flex-col items-center">
            <div className="text-2xl font-bold text-red-900 text-center">Call For Papers</div>
            <div className="w-[80%] text-justify mt-4 mb-20">The Authors are cordially invited to submit Extended Abstracts of innovative, original, exhaustive research work carried out (in about 2500 words) through email under the given Themes. We would like to encourage young engineers/learners to contribute papers for Poster presentations too.</div>

            <div className="text-2xl font-bold text-red-900 text-center">Importent Dates</div>
            <div className="w-[80%] text-justify mt-4 mb-20">
                <div className="grid grid-cols-3">
                        <div className="col-span-2 border border-black px-2 py-1">Submission of Extended Abstract:</div>
                        <div className="col-span-1 border border-black px-2 py-1">15th January 2025</div>
                        <div className="col-span-2 border border-black px-2 py-1">Acceptance of Abstract: Poster/Oral</div>
                        <div className="col-span-1 border border-black px-2 py-1">31 st January 2025</div>
                        <div className="col-span-2 border border-black px-2 py-1">Submission of Full-Length Paper:</div>
                        <div className="col-span-1 border border-black px-2 py-1">1st March 2025</div>
                        <div className="col-span-2 border border-black px-2 py-1">Final Decision on Paper:</div>
                        <div className="col-span-1 border border-black px-2 py-1">1st April 2025</div>
                        <div className="col-span-2 border border-black px-2 py-1">Date of Conference:</div>
                        <div className="col-span-1 border border-black px-2 py-1">14-16th May 2025</div>
                </div>
                <div className="mt-2 text-orange-500">NOTE : A field trip to Nalanda, Rajgir, Gaya and Bodhgaya is proposed on 17th May 2025 on reasonable cost.</div>
            </div>

            <div className="text-2xl font-bold text-red-900 text-center">Highlights of Conference</div>
            <div className="w-[80%] text-justify mt-4">
                <div className="text-1xl font-bold text-orange-500 :">Publication of Conference Papers/Proceedings</div>
                <ul className="list-disc ml-10 mb-10 space-y-2 pt-2">
                    <li>Selected papers would be published in Scopus index conference proceedings (Springer/Elsevier).</li>
                </ul>
                <div className="text-1xl font-bold text-orange-500 :">Awards</div>
                <ul className="list-disc ml-10 mb-10 space-y-2 pt-2">
                    <li>Awards would be provided for best papers in different themes for oral/poster presentations individually.</li>
                </ul>
                <div className="text-1xl font-bold text-orange-500 :">Free Registration for Sponsored Delegates</div>
                <ul className="list-disc ml-10 mb-20 space-y-2 pt-2">
                    <li>Gold Sponsorship of INR 500,000/ USD 10000-(Ten free delegate to attend the Conference)</li>
                    <li>Silver Sponsorship of INR 250,000/ USD 10000-(Five free delegate to attend the Conference)</li>
                    <li>Bronze Sponsorship of INR 100,000/ USD 10000-(Three free delegate to attend the Conference)</li>
                    <li>Premium Sponsorship of INR 50,000/ USD 10000-(Two free delegate to attend the Conference)</li>
                </ul>
            </div>
            
            <div className="text-2xl font-bold text-red-900 text-center">REGISTRATION FEE FOR INDIVIDUALS</div>
            <div className="w-[80%]  mt-4 mb-20">
                <div className="flex mb-2">
                    <div className="text-1xl font-bold text-orange-500 :">Registration Link:</div>
                    <a className="ml-6 text-blue-800 underline" href="https://docs.google.com/forms/d/e/1FAIpQLSd9gVbCyeuhoQIRheN6p7SSIFiHYTb_3oRTXemjr20XpEBW8g/viewform" target="blank">Click Here</a>
                </div>
                <div className="mb-10">The list and also the link of budget hotels/guest houses would be provided to the registered participants.</div>
                <div className="grid grid-cols-7">
                    <div className="col-span-5 border border-black px-2 py-1 text-center flex flex-col justify-center">Registered Category</div>
                    <div className="col-span-1 border border-black px-2 py-1">Indian Deligates (INR)</div>
                    <div className="col-span-1 border border-black px-2 py-1">Foreign Deligates (USD)</div>

                    <div className="col-span-2 border border-black px-2 py-1">Student</div>
                    <div className="col-span-3 border border-black px-2 py-1">Early bird up to 30th April, 2025</div>
                    <div className="col-span-1 border border-black px-2 py-1">4000</div>
                    <div className="col-span-1 border border-black px-2 py-1">100</div>

                    <div className="col-span-2 border border-black px-2 py-1"></div>
                    <div className="col-span-3 border border-black px-2 py-1">After 30th April, 2025</div>
                    <div className="col-span-1 border border-black px-2 py-1">5000</div>
                    <div className="col-span-1 border border-black px-2 py-1">125</div>

                    <div className="col-span-2 border border-black px-2 py-1">Faculties/Officers/Scientist</div>
                    <div className="col-span-3 border border-black px-2 py-1">Early bird up to 30th April, 2025</div>
                    <div className="col-span-1 border border-black px-2 py-1">6000</div>
                    <div className="col-span-1 border border-black px-2 py-1">150</div>

                    <div className="col-span-2 border border-black px-2 py-1"></div>
                    <div className="col-span-3 border border-black px-2 py-1">After 30th April, 2025</div>
                    <div className="col-span-1 border border-black px-2 py-1">7500</div>
                    <div className="col-span-1 border border-black px-2 py-1">185</div>

                    <div className="col-span-2 border border-black px-2 py-1">Accompanying Person</div>
                    <div className="col-span-3 border border-black px-2 py-1">Early bird up to 30th April, 2025</div>
                    <div className="col-span-1 border border-black px-2 py-1">4000</div>
                    <div className="col-span-1 border border-black px-2 py-1">100</div>

                    <div className="col-span-2 border border-black px-2 py-1"></div>
                    <div className="col-span-3 border border-black px-2 py-1">After 30th April, 2025</div>
                    <div className="col-span-1 border border-black px-2 py-1">5000</div>
                    <div className="col-span-1 border border-black px-2 py-1">125</div>
                </div>
            </div>
            <div className="text-2xl font-bold text-red-900 text-center">Account Details</div>
            <div className="w-[60%]  mt-4 mb-20">
                <div className="grid grid-cols-2">
                    <div className="border border-black px-2 py-1 font-bold">Account Name</div>
                    <div className="border border-black px-2 py-1 font-bold">NIT Patna CF Account</div>

                    <div className="border border-black px-2 py-1">Account Number</div>
                    <div className="border border-black px-2 py-1">50433562364</div>
                    <div className="border border-black px-2 py-1">Bank Name</div>
                    <div className="border border-black px-2 py-1">Indian Bank</div>
                    <div className="border border-black px-2 py-1">IFSC Code</div>
                    <div className="border border-black px-2 py-1">IDIB000B810</div>
                </div>
            </div>
        </div>

    </div>
  );
}
