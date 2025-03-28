"use client";

import type { CollectionEntry } from "astro:content";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Props {
  clients: CollectionEntry<"clients">[];
}

export default function ClientsCarousel({ clients }: Props) {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent z-10" />
      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[AutoScroll({ speed: 1 })]}
      >
        <CarouselContent>
          {clients.map((client) => (
            <CarouselItem
              key={client.data.name}
              className="basis-1/2 sm:basis-1/5"
            >
              <img
                src={client.data.logo.src}
                alt={client.data.name}
                width={100}
                height={100}
                className="grayscale"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
