import Link from "next/link";
import { MailIcon } from "lucide-react";
import { ContactLink } from "@/types/core/links";
import { Brand } from "@/lib/brand";
import Text from "@/components/ui/text";
import { cn } from "@/lib/utils";

export default function EmailLink({
  children,
  withIcon,
  className,
}: ContactLink) {
  return (
    <Link
      aria-label="Send us an email"
      href={Brand.email.uri}
      target="_blank"
      className="items-center flex gap-2"
    >
      {withIcon && <MailIcon className={cn("text-white w-4 h-4", className)} />}
      <Text className={className} tone={"white"} variant={"bodySm"} breakWord>
        {children || Brand.email.label}
      </Text>
    </Link>
  );
}
