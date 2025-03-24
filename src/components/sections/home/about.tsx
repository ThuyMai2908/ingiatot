import Section from "@/components/core/section";
import BlockStack from "@/components/layout/block-stack";
import InlineGrid from "@/components/layout/inline-grid";
import InlineStack from "@/components/layout/inline-stack";
import Text from "@/components/ui/text";
import { APP_NAME, DEFAULT_IMG_SIZES } from "@/config/common";
import { CircleCheckBig } from "lucide-react";
import Image from "next/image";

const dataAbout = {
  heading: "Giới thiệu",
  title: "Tạo nên những ấn phẩm in ấn đẳng cấp cho doanh nghiệp của bạn",
  des: [
    "In ấn chất lượng cao với công nghệ tiên tiến nhất",
    "Tự do sáng tạo – kết hợp màu sắc, kích thước và thiết kế theo ý",
    "Tự do sáng tạo – kết hợp màu sắc, kích thước và thiết kế theo ý",
    "Giao hàng nhanh chóng & miễn phí theo tiêu chuẩn",
    "Cam kết hài lòng tuyệt đối – mang đến trải nghiệm tốt nhất cho khách hàng",
  ],
};

const AboutUs = () => {
  return (
    <Section className="container" gap={8}>
      <InlineStack blockAlign={"center"} gap={4}>
        <div className="w-2 h-2 rounded-full bg-primary"></div>
        <Text variant={"titleSm"}>{dataAbout.heading}</Text>
      </InlineStack>
      <InlineGrid columns={2} gap={10} alignItems={"center"}>
        <Image
          src={"/images/home/intro.webp"}
          width={512}
          height={512}
          alt={APP_NAME}
          className="w-full h-full object-cover aspect-square"
          sizes={DEFAULT_IMG_SIZES}
        />
        <BlockStack gap={10}>
          <Text variant={"title"}>{dataAbout.title}</Text>
          <BlockStack gap={6}>
            {dataAbout.des.map((text, id) => {
              return (
                <InlineStack key={id} gap={4} blockAlign={"center"}>
                  <CircleCheckBig className="stroke-[1.5] max-w-6 w-full h-6 text-primary" />
                  <Text variant={"bodyLg"}>{text}</Text>
                </InlineStack>
              );
            })}
          </BlockStack>
        </BlockStack>
      </InlineGrid>
    </Section>
  );
};

export default AboutUs;
