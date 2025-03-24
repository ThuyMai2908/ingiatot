import { cn } from "@/lib/utils";

export interface GoogleMapsEmbedProps {
  src: string;
  className?: string;
}

const GoogleMapsEmbed: React.FC<GoogleMapsEmbedProps> = ({
  src,
  className,
}) => {
  return (
    <iframe
      name="Google Maps embed"
      src={src}
      width="100%"
      height="100%"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={cn("border-none", className)}
    />
  );
};

export default GoogleMapsEmbed;
