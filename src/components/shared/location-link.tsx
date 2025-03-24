import Text from "@/components/ui/text";
import { Brand } from "@/lib/brand";
import { cn } from "@/lib/utils";
import { ContactLink } from "@/types/core/links";
import { MapPin } from "lucide-react";
import Link from "next/link";

export default function LocationLink({
  children,
  withIcon = false,
  className,
}: ContactLink) {
  return (
    <Link
      href={Brand.location.googleMapsUri}
      target="_blank"
      aria-label="Find us on Google Maps"
      className="flex gap-2 items-start"
    >
      {withIcon && (
        <MapPin className={cn("text-black w-4 h-4 mt-[0.375rem]", className)} />
      )}

      <Text className={className} tone={"black"} variant={"bodySm"}>
        {children || Brand.location.formattedAddress}
      </Text>
    </Link>
  );
}
