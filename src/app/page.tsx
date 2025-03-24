import AboutUs from "@/components/sections/home/about";
import Hero from "@/components/sections/home/hero";
import Project from "@/components/sections/home/project";
import Services from "@/components/sections/home/services";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutUs />
      <Services />
      <Project />
    </main>
  );
}
