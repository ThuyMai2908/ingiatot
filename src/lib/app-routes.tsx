import Text from "@/components/ui/text";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface AppRoute {
  name: string;
  path: string;
  routes?: AppRoute[];
  menu?: React.ReactNode;
}

export class AppRoutes {
  static home: AppRoute = {
    name: "Home",
    path: "/",
  };

  static about: AppRoute = {
    name: "About",
    path: "/about",
  };

  static services: AppRoute = {
    name: "Services",
    path: "/services",
  };

  static gallery: AppRoute = {
    name: "Gallery",
    path: "/gallery",
  };

  static locate: AppRoute = {
    name: "Locate",
    path: "/locate",
  };

  static all: AppRoute[] = [
    this.home,
    this.about,
    this.services,
    this.gallery,
    this.locate,
  ];
}

export const footer: AppRoute[] = [...AppRoutes.all];
