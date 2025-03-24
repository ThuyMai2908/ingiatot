import Section from "@/components/core/section";
import BlockStack from "@/components/layout/block-stack";
import InlineGrid from "@/components/layout/inline-grid";
import InlineStack from "@/components/layout/inline-stack";
import { CommaIcon } from "@/components/shared/icon";
import Text from "@/components/ui/text";
import { DEFAULT_IMG_SIZES } from "@/config/common";
import { Star } from "lucide-react";
import Image from "next/image";

export interface ReviewProps {
  id?: number;
  imgUrl?: string;
  des?: string;
  name?: string;
  position?: string;
}

const Review = ({ imgUrl, des, name, position }: ReviewProps) => {
  return (
    <Section container background="foreground" className="pb-16">
      <InlineGrid columns={{ base: 1, lg: 2 }} gap={{ base: 8, lg: 20 }}>
        <Image
          src={imgUrl ?? "/images/review.webp"}
          width={512}
          height={512}
          alt="founder"
          className="w-full h-full object-cover rounded-md lg:rounded aspect-[1]"
          sizes={DEFAULT_IMG_SIZES}
          priority
        />
        <BlockStack gap={{ base: 4, lg: 8 }}>
          <div className="hidden lg:block">
            <CommaIcon />
          </div>
          <InlineStack gap={1}>
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="fill-black stroke-black" />
            ))}
          </InlineStack>
          <Text tone={"black"}>
            {des ??
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."}
          </Text>
          <BlockStack>
            <Text as="span" tone={"black"} fontWeight={"bold"}>
              {name ?? "Name Surname"}
            </Text>
            <Text as="span" variant={"body"}>
              {position ?? "Position, Company name"}
            </Text>
          </BlockStack>
        </BlockStack>
      </InlineGrid>
    </Section>
  );
};

export default Review;
