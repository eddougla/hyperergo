import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      {/* Left Column */}
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat
          volutpat. Vivamus blandit, nisi ut laoreet tempus, tortor justo
          pharetra nulla, eget tempus felis urna ut erat.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/products">Our Products</Link>
        </Button>
      </div>

      {/* Right Column - Hero Carousel */}
      <HeroCarousel />
    </section>
  );
};

export default Hero;
