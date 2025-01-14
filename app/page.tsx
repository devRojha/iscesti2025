import AboutConf from "@/components/AboutConf";
import Hero from "@/components/Hero";
import Notice from "@/components/Notice";
import SlidingNotice from "@/components/SlidingNotice";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <SlidingNotice />
      <Notice />
      {/* about  */}
      <AboutConf />
      
    </div>
  );
}
