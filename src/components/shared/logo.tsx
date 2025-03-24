import { APP_NAME } from "@/config/common";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  href?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ href, className }) => {
  if (href) {
    return (
      <Link href={href} aria-label="Return to Home">
        <Image
          src="/images/logo.webp"
          width={128}
          height={64}
          alt={APP_NAME}
          className={cn(
            "h-10 w-fit object-contain lg:h-16 lg:w-24 ",
            className
          )}
          sizes="128px"
        />
      </Link>
    );
  }
  return (
    <Image
      src="/images/logo-sheet.webp"
      width={128}
      height={64}
      alt={APP_NAME}
      className={cn("h-40 w-30 object-contain", className)}
      sizes="128px"
    />
  );
};

export default Logo;
