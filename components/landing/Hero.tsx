import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <section
      className="
        grid grid-cols-1 lg:grid-cols-2 gap-24 items-center
        relative min-h-screen
        bg-cover bg-center bg-no-repeat
        before:content-[''] before:absolute before:inset-0 
        before:bg-gradient-to-r before:from-black/60 before:to-black/20 before:z-0
        px-4 sm:px-6 lg:px-8
        pt-32 pb-20
        w-full
      "
      style={{
        backgroundImage: "url('/images/hero/background.png')",
      }}
    >
      {/* Left Column */}
      <div className="relative z-10">
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl text-white drop-shadow-lg">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-gray-100 drop-shadow">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat
          volutpat. Vivamus blandit, nisi ut laoreet tempus, tortor justo
          pharetra nulla, eget tempus felis urna ut erat.
        </p>
        <Button asChild size="lg" className="mt-8 shadow-lg">
          <Link href="/products">Our Products</Link>
        </Button>
      </div>

      {/* Right Column - Hero Carousel */}
      <div className="relative z-10 pr-10">
        <HeroCarousel />
      </div>
    </section>
  );
};

export default Hero;
