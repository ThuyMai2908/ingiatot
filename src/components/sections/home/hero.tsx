"use client";

import Section from "@/components/core/section";
import BackgroundOverlay from "@/components/shared/background-overlay";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel";
import Text from "@/components/ui/text";
import { DEFAULT_IMG_SIZES } from "@/config/common";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

const sliders = [
  {
    imgUrl: "/images/home/hero-1.webp",
    title: "Giải pháp in ấn chuyên nghiệp",
    des: "Chất lượng sắc nét, quy trình chuẩn xác, đáp ứng mọi nhu cầu in ấn của doanh nghiệp.",
  },
  {
    imgUrl: "/images/home/hero-2.webp",
    title: "In theo yêu cầu, giao nhanh",
    des: "Tối ưu thời gian, đảm bảo chất lượng – từ danh thiếp, brochure đến bao bì sản phẩm.",
  },
  {
    imgUrl: "/images/home/hero-3.webp",
    title: "Công nghệ in hiện đại",
    des: "Sử dụng công nghệ tiên tiến để mang đến sản phẩm in chuyên nghiệp và bền màu.",
  },
];

export default function Hero() {
  return (
    <Section className="relative h-[100dvh] w-full overflow-hidden isolate !p-0">
      <Carousel
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
      >
        <CarouselContent>
          {sliders.map((item, idx) => (
            <CarouselItem key={idx}>
              <div className="relative h-[100dvh]">
                <Image
                  src={item.imgUrl ?? ""}
                  width={1024}
                  height={1024}
                  alt="hero"
                  className="absolute inset-0 w-full h-full object-cover rounded-md lg:rounded-lg"
                  sizes={DEFAULT_IMG_SIZES}
                />
                <BackgroundOverlay background="bg-black" opacity="opacity-50" />
                <div className="relative w-full h-full flex flex-col justify-end gap-4 p-8 pb-16 lg:gap-8 lg:py-28 lg:px-16">
                  <Text
                    as="h1"
                    tone={"white"}
                    variant="display"
                    className="capitalize"
                  >
                    {item.title}
                  </Text>
                  <Text
                    className="max-w-[43.15rem] font-header"
                    variant={"bodyLg"}
                    tone={"white"}
                  >
                    {item.des}
                  </Text>
                  <Link className="w-fit lg:mt-4" href={"/contact-us"}>
                    <Button>xem thêm</Button>
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute w-fit m-auto inset-0 flex items-end justify-center gap-1 bottom-8 z-0">
          <CarouselDots />
        </div>
      </Carousel>
    </Section>
  );
}
