import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Import images from public folder
import hero1 from "@/public/images/hero/hero1.jpg";
import hero2 from "@/public/images/hero/hero2.jpg";
import hero3 from "@/public/images/hero/hero3.jpg";
import hero4 from "@/public/images/hero/hero4.jpg";

// Construct image array
const carouselImages = [hero1, hero2, hero3, hero4];

const HeroCarousel = () => {
  return (
    <div className="hidden lg:block">
      <Carousel>
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="p-2 aspect-[4/3] w-full">
                  <Image
                    src={image}
                    alt="Hero"
                    className="w-full h-full rounded-md object-cover"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
