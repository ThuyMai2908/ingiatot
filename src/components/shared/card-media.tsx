import BlockStack from "@/components/layout/block-stack";
import Text from "@/components/ui/text";
import { APP_NAME, DEFAULT_IMG_SIZES } from "@/config/common";
import { cn } from "@/lib/utils";
import { DataType } from "@/types/core/block";
import Image from "next/image";
import React from "react";

const CardMedia = ({ imgUrl, title, des, className }: DataType) => {
  return (
    <div
      className={cn(
        `relative aspect-[1] md:aspect-[4/5] overflow-hidden group`,
        className
      )}
    >
      <Image
        src={imgUrl ?? ""}
        width={512}
        height={768}
        alt={APP_NAME}
        className="w-full h-full object-cover transform transition duration-300 will-change-transform group-hover:scale-110"
        sizes={DEFAULT_IMG_SIZES}
      />
      <BlockStack
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-accent px-4 py-8 lg:p-12"
        align={"end"}
        gap={{ base: 4, lg: 6 }}
      >
        <Text as="h3" variant="title" tone={"primary"}>
          {title}
        </Text>
        <Text as="p" variant="body">
          {des}
        </Text>
      </BlockStack>
    </div>
  );
};

export default CardMedia;
