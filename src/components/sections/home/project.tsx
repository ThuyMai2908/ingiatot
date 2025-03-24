"use client";
import Section from "@/components/core/section";
import BlockStack from "@/components/layout/block-stack";
import InlineStack from "@/components/layout/inline-stack";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Text from "@/components/ui/text";
import { APP_NAME, DEFAULT_IMG_SIZES } from "@/config/common";
import Image from "next/image";

const dataProject = [
  { imageUrl: "/images/home/product-1.webp", name: "Product 1" },
  { imageUrl: "/images/home/product-2.webp", name: "Product 2" },
  { imageUrl: "/images/home/product-3.webp", name: "Product 3" },
  { imageUrl: "/images/home/product-4.webp", name: "Product 4" },
  { imageUrl: "/images/home/product-5.webp", name: "Product 5" },
];

const Project = () => {
  return (
    <Section container gap={10}>
      <BlockStack
        align={"center"}
        inlineAlign={"center"}
        className="text-center"
        gap={2}
      >
        <Text variant="title">Sản phẩm tiêu biểu</Text>
        <Text
          variant={"bodyLg"}
          tone={"black"}
          fontWeight={"medium"}
          className="max-w-3xl"
        >
          Chúng tôi tự hào đồng hành cùng nhiều thương hiệu uy tín, mang đến các
          giải pháp in ấn chất lượng cao, tinh tế và khác biệt. Mỗi dự án là
          minh chứng cho sự chỉn chu và cam kết hoàn hảo trong từng chi tiết.
        </Text>
      </BlockStack>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {dataProject.map((item, idx) => (
            <CarouselItem key={idx} className="gap-8 md:basis-1/2 lg:basis-1/4">
              <BlockStack
                gap={4}
                inlineAlign={"center"}
                className="relative overflow-hidden group cursor-pointer"
              >
                <div className="overflow-hidden w-full h-full">
                  <Image
                    src={item.imageUrl || ""}
                    width={512}
                    height={512}
                    alt={APP_NAME}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 aspect-[2/3]"
                    sizes={DEFAULT_IMG_SIZES}
                  />
                </div>

                <Text
                  className="line-clamp-3 lg:line-clamp-none transition-colors duration-500 group-hover:text-primary"
                  as="h3"
                  tone={"black"}
                  fontWeight={"bold"}
                >
                  {item.name}
                </Text>
              </BlockStack>
            </CarouselItem>
          ))}
        </CarouselContent>
        <InlineStack
          className="mt-8 lg:mt-12"
          align={"between"}
          blockAlign={"center"}
        >
          <InlineStack align={"center"} gap={3}>
            <CarouselDots />
          </InlineStack>
          <InlineStack gap={4}>
            <CarouselPrevious
              variant={"outline"}
              className="static w-8 h-8 lg:w-12 lg:h-12 !text-primary !border-primary translate-y-0 "
            />
            <CarouselNext
              variant={"outline"}
              className="static  w-8 h-8 lg:w-12 lg:h-12 !text-primary !border-primary translate-y-0 "
            />
          </InlineStack>
        </InlineStack>
      </Carousel>
    </Section>
  );
};

export default Project;
