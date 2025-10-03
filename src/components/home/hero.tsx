import { Button } from "../ui/button";
import Lottie from "lottie-react";
import cryptoAnimation from "../../assets/Revenue.json";

export default function Hero() {
  return (
    <div>
      <section className="relative min-h-[80vh] flex items-center  overflow-hidden mt-20">
        <div className="mx-auto w-full px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="flex flex-col justify-center text-center md:text-left space-y-8">
              <p className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Real-Time Trade Signals
              </p>

              <h1 className="text-4xl font-extrabold tracking-tight leading-tight md:text-6xl lg:text-7xl">
                Profitable Trade Signals <br className="hidden md:block" />
                for Every Trader
              </h1>

              <p className="text-muted-foreground max-w-xl mx-auto md:mx-0 md:text-lg">
                Stay ahead of the market with accurate trading signals powered
                by real-time data and AI-driven insights. Boost your trading
                confidence and profitability with ease.
              </p>

              <div className="flex justify-center md:justify-start gap-4 pt-4">
                <Button size="lg" className="h-12 px-8 text-lg rounded-xl">
                  Get Started Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 text-lg rounded-xl"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Content: Animation */}
            <div className="flex items-center justify-center lg:justify-end">
              <Lottie
                animationData={cryptoAnimation}
                loop={true}
                className="w-[360px] md:w-[480px] lg:w-[600px]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
