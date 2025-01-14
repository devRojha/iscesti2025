import AboutConf from "@/components/AboutConf";
import Hero from "@/components/Hero";
import Notics from "@/components/Notics";
import SlidingNotice from "@/components/SlidingNotice";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <SlidingNotice />
      <Notics />
      {/* about  */}
      <AboutConf />
      
    </div>
  );
}
