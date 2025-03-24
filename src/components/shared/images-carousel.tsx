"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { DEFAULT_IMG_SIZES } from "@/config/common";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import React from "react";

interface ImageCarouselProps {
  images: string[];
  speed: number;
  direction: "forward" | "backward";
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  speed,
  direction,
}) => {
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[
        AutoScroll({
          speed,
          direction,
        }),
      ]}
    >
      <CarouselContent>
        {images.map((url, id) => (
          <CarouselItem
            key={id}
            className="gap-4 pl-2 basis-1/3 lg:basis-1/4 lg:pl-4"
          >
            <Image
              src={url}
              width={512}
              height={512}
              alt="gallery-image"
              className="aspect-[3/2] size-full object-cover rounded-md lg:rounded"
              sizes={DEFAULT_IMG_SIZES}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ImageCarousel;
