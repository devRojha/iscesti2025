"use client"

import { RecoilRoot } from "recoil";
import Footer from "@/components/Footer";
import Menubar from "@/components/Menubar";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [option , setoption] = useState(true);
    return (
    <RecoilRoot>
        <div className="h-16 fixed w-full shadow-md bg-zinc-700 z-30">
            <Menubar option={option} setoption={setoption}/>
        </div>
        <div>
            <Sidebar option={option} />
            <div onClick={()=>setoption(true)} className="relative top-16 z-10">
                {children}
            </div>
            <div id="footer">
                <Footer />
            </div>
        </div>
    </RecoilRoot>
  );
}
