import EmailLink from "@/components/shared/email-link";
import PhoneCallLink from "@/components/shared/phone-call-link";
import Text from "@/components/ui/text";
import { APP_NAME, DEFAULT_IMG_SIZES } from "@/config/common";
import { footer } from "@/lib/app-routes";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container py-8 md:py-16 flex flex-col">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-24">
          <div className="flex flex-col flex-1 items-start">
            <Image
              src="/images/logo.webp"
              width={512}
              height={512}
              alt={APP_NAME}
              className={cn("w-auto object-contain h-[8rem]")}
              sizes={DEFAULT_IMG_SIZES}
            />
          </div>
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-24">
            <div className="flex flex-col gap-4">
              <Text tone={"background"}>QUICK LINKS</Text>
              <ul className="flex flex-col  gap-2">
                {footer.map((route) => (
                  <Link
                    key={route.name}
                    aria-label={route.name}
                    href={route.path}
                    className="flex items-center"
                  >
                    <Text tone={"background"}>{route.name}</Text>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <Text tone={"background"}>CONTACT</Text>
              <ul className="flex flex-col gap-2">
                <EmailLink />
                <PhoneCallLink />
              </ul>
            </div>
          </div>
        </div>
        <div
          data-orientation="horizontal"
          role="none"
          className="shrink-0 h-[1px] w-full bg-background mt-20 mb-8"
        ></div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-8 text-center md:text-start">
          <Text className="order-last lg:order-first" tone={"background"}>
            © In Gia Tot {new Date().getFullYear()} - COPYRIGHT
          </Text>
          <div className="flex flex-col md:flex-row items-start gap-2 md:gap-6">
            <Link
              className="text-base lg:text-xs font-medium uppercase"
              href={"/"}
            >
              Privacy Policy
            </Link>
            <Link
              className="text-base lg:text-xs font-medium uppercase"
              href={"/"}
            >
              Terms of Service
            </Link>
            <Link
              className="text-base lg:text-xs font-medium uppercase "
              href={"/"}
            >
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
