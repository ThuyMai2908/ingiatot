"use client";

import InlineStack from "@/components/layout/inline-stack";
import { ArrowDownIcon } from "@/components/shared/icon";
import Logo from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import NavigationSheet from "@/components/ui/navigation-sheet";
import Text from "@/components/ui/text";
import { AppRoutes } from "@/lib/app-routes";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Fragment,
  useEffect,
  useState,
  type HTMLAttributes,
  type JSX,
} from "react";

type HeaderProps = HTMLAttributes<HTMLDivElement>;

export function Header({ className, ...props }: HeaderProps): JSX.Element {
  const [hoverKey, setHoverKey] = useState<string | null>(null);
  const [y, setY] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setY(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setY(window.scrollY);
      });
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed bg-background top-0 left-0 right-0 z-50 duration-300 ",
        className,
        y > 100 && "border border-b-primary"
      )}
      {...props}
    >
      <div className="container relative">
        <div className="relative z-50 transition-all duration-300">
          <InlineStack
            className="relative z-50 py-4 lg:py-3"
            align="between"
            blockAlign="center"
          >
            <Logo href="/" />
            <InlineStack className="hidden lg:flex">
              {AppRoutes.all.map((route) => {
                if (route.menu) {
                  return (
                    <Fragment key={route.path}>
                      <div
                        onMouseEnter={() => setHoverKey(route.path)}
                        onMouseLeave={() => setHoverKey("")}
                        key={route.path}
                        className="relative inline-flex items-center group cursor-pointer duration-500"
                      >
                        <InlineStack
                          className="relative duration-500"
                          gap={1}
                          align={"center"}
                          blockAlign={"center"}
                        >
                          <Text as="span">{route.name}</Text>
                          <ArrowDownIcon />
                        </InlineStack>
                        <div
                          className={cn(
                            "top-[3rem] pt-3 z-50 hidden opacity-0 absolute transition-opacity duration-500",
                            hoverKey === route.path &&
                              "block opacity-100 duration-500"
                          )}
                        >
                          {route.menu}
                        </div>
                      </div>
                    </Fragment>
                  );
                }
                return (
                  <Link
                    key={route.path}
                    href={route.path}
                    aria-label={`Go to ${route.name}`}
                    className="relative group inline-flex items-center px-3 py-4 duration-500"
                  >
                    <Text as="span" variant={"buttonMenu"}>
                      {route.name}
                    </Text>
                    <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-1 duration-500 bg-primary" />
                  </Link>
                );
              })}
            </InlineStack>
            <div className="hidden lg:block">
              <Button>
                <Link aria-label="Contact Us today" href="/contact-us">
                  liên hệ
                </Link>
              </Button>
            </div>
            <NavigationSheet className="lg:hidden" />
          </InlineStack>
        </div>
      </div>
    </header>
  );
}
