"use client";

import BackgroundOverlay from "@/components/shared/background-overlay";
import Text from "@/components/ui/text";
import { APP_NAME, DEFAULT_IMG_SIZES } from "@/config/common";
import Image from "next/image";
import { Fragment } from "react";

interface PageHeaderProps {
  image?: string;
  title: string;
  des?: string;
}

export default function PageHeader({ image, title, des }: PageHeaderProps) {
  return (
    <section className="relative bg-background flex flex-col items-center justify-center h-[70dvh]">
      {image && (
        <Fragment>
          <Image
            src={image}
            width={1024}
            height={512}
            alt={APP_NAME}
            className="w-full h-full absolute inset-0 object-cover"
            sizes={DEFAULT_IMG_SIZES}
            priority
          />
          <BackgroundOverlay background="bg-black" opacity="opacity-30" />
        </Fragment>
      )}
      <div className="container relative flex flex-col items-center justify-center gap-6 lg:gap-8 text-center">
        <Text as="h1" variant="display">
          {title}
        </Text>
        <Text as="p">{des}</Text>
      </div>
    </section>
  );
}
