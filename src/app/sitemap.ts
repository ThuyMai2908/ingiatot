import { AppRoutes, AppRoute } from "@/lib/app-routes";
import { MetadataRoute } from "next";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.replace(/\/$/, "");

  const flattenRoutes = (routes: AppRoute[]): AppRoute[] => {
    return routes.flatMap((route) => [
      route,
      ...(route.routes ? flattenRoutes(route.routes) : []),
    ]);
  };

  const allRoutes = flattenRoutes(AppRoutes.all);

  const sitemap: MetadataRoute.Sitemap = allRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date().toISOString(),
  }));

  return sitemap;
}
