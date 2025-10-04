import { Footer7 } from "../components/footer";
import Hero from "../components/home/hero";
import { Logos3 } from "../components/home/partners";
import { Feature166 } from "../components/home/recent";
import { MarqueeDemo } from "../components/home/review";
import { TradingStats } from "../components/home/stat";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Navbar />
      <Hero />
      <Logos3 />
      <TradingStats />
      <Feature166 />
      <MarqueeDemo />
      <Footer7 />
    </div>
  );
}
