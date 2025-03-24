"use client";

import BlockStack from "@/components/layout/block-stack";
import Logo from "@/components/shared/logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Text from "@/components/ui/text";
import { AppRoute, AppRoutes } from "@/lib/app-routes";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavigationSheetProps {
  className?: string;
}

function NavLink({
  route,
  setOpen,
}: {
  route: AppRoute;
  pathname: string;
  setOpen: (value: boolean) => void;
}) {
  if (route.path === "") {
    return (
      <div
        aria-label={`Go to ${route.name}`}
        className="flex items-center gap-1 py-4"
      >
        <Text as="h3">{route.name}</Text>
      </div>
    );
  }
  return (
    <Link
      aria-label={`Go to ${route.name}`}
      onClick={() => setOpen(false)}
      key={route.path}
      href={route.path}
      className="flex items-center gap-1 py-2"
    >
      <Text variant={"sectionHeading"} as="h3">
        {route.name}
      </Text>
    </Link>
  );
}

export default function NavigationSheet({ className }: NavigationSheetProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Sheet>
      <SheetTrigger aria-label="Open mobile navigation" className={className}>
        <div className="relative grid gap-1">
          <div
            className={cn(
              "h-[1px] w-5 bg-black duration-500",
              open && "absolute rotate-[45deg]"
            )}
          />
          <div
            className={cn(
              "h-[1px] w-5 bg-black duration-100",
              open ? "opacity-0" : "opacity-100"
            )}
          />
          <div
            className={cn(
              "h-[1px] w-5 bg-black duration-500",
              open && "absolute -rotate-[45deg]"
            )}
          />
        </div>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex flex-col justify-between max-w-[80vw] w-full overflow-scroll"
      >
        <SheetTitle className="hidden">Mobile navigation</SheetTitle>
        <BlockStack fullHeight>
          <Link href="/" aria-label="Return to home" className="pb-8">
            <Logo className="h-20 w-fit" />
          </Link>
          <BlockStack fullHeight>
            <Accordion type="multiple">
              {AppRoutes.all.map((route) => {
                if (route.routes) {
                  return (
                    <AccordionItem
                      key={route.path}
                      value={route.path}
                      className="border-none"
                    >
                      <AccordionTrigger className="py-0 h-auto [&>svg]:text-primary items-center">
                        <div className="relative inline-flex items-center group cursor-pointer py-2 hover:text-primary duration-500">
                          <Text as="span" variant={"title"} tone={"primary"}>
                            {route.name}
                          </Text>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent
                        key={route.path}
                        className="flex flex-col"
                      >
                        {route.routes.map((subRoute) => (
                          <SheetClose key={subRoute.path} asChild>
                            <Link href={subRoute.path} className="py-1">
                              <Text
                                className="font-header"
                                as="span"
                                variant={"body"}
                                tone={"primary"}
                                fontWeight={"medium"}
                              >
                                {subRoute.name}
                              </Text>
                            </Link>
                          </SheetClose>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  );
                }
                return (
                  <SheetClose key={route.path} asChild>
                    <Link
                      href={route.path}
                      aria-label={`Go to ${route.name}`}
                      className="relative group block items-center py-2 hover:text-primary duration-500"
                    >
                      <Text as="span" variant={"title"} tone={"primary"}>
                        {route.name}
                      </Text>
                    </Link>
                  </SheetClose>
                );
              })}
            </Accordion>
            <Separator className="mt-8" />
          </BlockStack>
        </BlockStack>
        <SheetDescription />
        <div className="flex flex-col gap-4 flex-grow justify-end">
          <SheetClose asChild>
            <Link className="w-full" href={"/contact-us"}>
              <Button className="w-full">Contact Us</Button>
            </Link>
          </SheetClose>
          {/* <div className="text-center">
            <Text variant={"buttonMenu"} fontWeight={"normal"}>
              © Ais Sarah Pet Manor {new Date().getFullYear()} - All rights
              reserved.
            </Text>
          </div> */}
        </div>
      </SheetContent>
    </Sheet>
  );
}
