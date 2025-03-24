"use client";
import Section from "@/components/core/section";
import BlockStack from "@/components/layout/block-stack";
import InlineGrid from "@/components/layout/inline-grid";
import InlineStack from "@/components/layout/inline-stack";
import { OutlineButton } from "@/components/ui/outline-button";
import Text from "@/components/ui/text";
import { APP_NAME, DEFAULT_IMG_SIZES } from "@/config/common";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const dataServices = {
  heading: "Dịch Vụ",
  services: [
    {
      title: "Tem Nhãn & Decal",
      imageUrl: "/images/home/service-1.webp",
      des: "Thiết kế và in ấn tem nhãn, decal chất lượng cao với độ sắc nét tuyệt đối, bám dính bền bỉ trên mọi chất liệu, giúp nhận diện thương hiệu rõ ràng và chuyên nghiệp.",
    },
    {
      title: "Ấn Phẩm Văn Phòng &\nNhận Diện Thương Hiệu",
      imageUrl: "/images/home/service-2.webp",
      des: "Cung cấp giải pháp in ấn đồng bộ bộ nhận diện thương hiệu, từ danh thiếp, tiêu đề thư đến bìa hồ sơ... khẳng định phong cách chuyên nghiệp và đẳng cấp của doanh nghiệp.",
    },
    {
      title: "Tài Liệu Quảng Cáo &\nGiới Thiệu Sản Phẩm",
      imageUrl: "/images/home/service-3.webp",
      des: "In ấn tờ rơi, brochure, catalogue và các ấn phẩm quảng cáo với hình ảnh sống động, chất liệu cao cấp, giúp truyền tải thông điệp sản phẩm một cách ấn tượng và thuyết phục.",
    },
    {
      title: "Bao Bì & Đóng Gói Sản Phẩm",
      imageUrl: "/images/home/service-4.webp",
      des: "Thiết kế và in ấn bao bì, hộp giấy cao cấp với kiểu dáng tinh tế và chất liệu bền đẹp, nâng tầm giá trị sản phẩm và gia tăng trải nghiệm khách hàng.",
    },
  ],
};

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = dataServices.services[activeIndex];

  return (
    <Section className="container" background="primary" gap={24}>
      <InlineStack blockAlign="center" gap={4}>
        <div className="w-2 h-2 rounded-full bg-white" />
        <Text variant="titleSm" tone="white">
          {dataServices.heading}
        </Text>
      </InlineStack>

      <InlineGrid columns={2} gap={16}>
        <BlockStack gap={8}>
          {dataServices.services.map((item, id) => {
            const isActive = id === activeIndex;

            return (
              <div
                key={id}
                onMouseEnter={() => setActiveIndex(id)}
                className="cursor-pointer group/item transition-colors duration-300 flex items-center gap-8"
              >
                <Text
                  variant="titleLg"
                  className={`capitalize duration-500 ${
                    isActive
                      ? "text-white"
                      : "text-[#ffffff80] hover:text-white"
                  }`}
                >
                  {item.title}
                </Text>

                <MoveRight
                  className={`stroke-[1] text-white h-auto w-12 transition-all duration-500 ${
                    isActive
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                />
              </div>
            );
          })}
        </BlockStack>

        <BlockStack gap={4} className="transition-all duration-500 ease-in-out">
          <Image
            src={activeItem.imageUrl}
            width={512}
            height={512}
            alt={`Dịch vụ ${activeItem.title} - ${APP_NAME}`}
            className="object-cover w-full h-full aspect-[1/0.471698] transition-transform duration-500 ease-in-out"
            sizes={DEFAULT_IMG_SIZES}
          />
          <div className="min-h-[5.5rem] h-full">
            <Text className="text-white">{activeItem.des}</Text>
          </div>
          <OutlineButton asChild className="w-fit">
            <Link aria-label="Contact Us today" href="/contact-us">
              nhận báo giá
            </Link>
          </OutlineButton>
        </BlockStack>
      </InlineGrid>
    </Section>
  );
};

export default Services;
