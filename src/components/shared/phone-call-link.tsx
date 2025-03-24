import Link from "next/link";
import { PhoneIcon } from "lucide-react";
import { ContactLink } from "@/types/core/links";
import { Brand } from "@/lib/brand";
import Text from "@/components/ui/text";
import { cn } from "@/lib/utils";

export default function PhoneCallLink({
  children,
  withIcon = false,
  className,
}: ContactLink) {
  return (
    <Link
      aria-label="Call us"
      href={`tel:${Brand.phonenumber.uri}`}
      target="_blank"
      className="flex items-center gap-2"
    >
      {withIcon && (
        <PhoneIcon className={cn("text-white w-4 h-4", className)} />
      )}
      <Text className={className} tone={"white"} variant={"bodySm"}>
        {children || Brand.phonenumber.label}
      </Text>
    </Link>
  );
}
