import BlockStack from "@/components/layout/block-stack";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import { APP_NAME } from "@/config/common";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found | " + APP_NAME,
  description: "description",
};

export default function NotFound() {
  return (
    <section className="relative bg-background flex flex-col items-center justify-center h-[70dvh] pb-9 lg:pb-[4.5rem]">
      <div className="relative container flex flex-col items-center justify-center gap-8">
        <BlockStack align={"center"} inlineAlign={"center"} gap={4}>
          <Text tone={"black"} as="h1" variant="display">
            Oops...
          </Text>
          <Text as="p" variant={"titleLg"} tone={"black"}>
            The page you are looking for does not exist.
          </Text>
        </BlockStack>
        <div className="flex items-center justify-center">
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
