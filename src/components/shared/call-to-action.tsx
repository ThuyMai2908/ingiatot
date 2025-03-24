import Section from "@/components/core/section";
import BlockStack from "@/components/layout/block-stack";
import BackgroundOverlay from "@/components/shared/background-overlay";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import { APP_NAME, DEFAULT_IMG_SIZES } from "@/config/common";
import Image from "next/image";
import Link from "next/link";

const callToAction = {
  header: `Biến ý tưởng thành sản phẩm hoàn hảo!`,
  description:
    "Chúng tôi mang đến giải pháp in ấn tối ưu, đáp ứng mọi yêu cầu với quy trình đơn giản, nhanh chóng và chuyên nghiệp. Đặt in ngay để trải nghiệm dịch vụ dễ dàng cùng sản phẩm hoàn hảo!",
};

const CallToAction = () => {
  return (
    <Section className="relative h-[70dvh] w-full overflow-hidden isolate aspect-video !p-0">
      {/* <video
        width="100%"
        height="100%"
        poster="/images/home/hero.webp"
        className="block absolute inset-x-0 h-[90dvh] w-full object-cover"
        loop
        muted
        autoPlay
        playsInline
      >
        <source src="/video/hero-1.mp4" type="video/mp4" />
      </video>
      <BackgroundOverlay background="bg-black" opacity="opacity-50" /> */}
      <Image
        src="/images/CTA.webp"
        width={1024}
        height={1024}
        alt={APP_NAME}
        className="absolute inset-0 w-full h-full object-cover rounded-md lg:rounded-lg"
        sizes={DEFAULT_IMG_SIZES}
      />
      <BackgroundOverlay background="bg-black" opacity="opacity-50" />
      <div className="container relative w-full h-full flex flex-col justify-center items-center">
        <BlockStack
          gap={{ base: 6, lg: 8 }}
          inlineAlign={"center"}
          className="text-center max-w-[52rem]"
        >
          <Text as="h1" variant="displaySm">
            {callToAction.header}
          </Text>
          <Text tone={"white"}>{callToAction.description}</Text>
          <Button asChild>
            <Link aria-label="Contact Us today" href="/contact-us">
              nhận báo giá
            </Link>
          </Button>
        </BlockStack>
      </div>
    </Section>
  );
};

export default CallToAction;
