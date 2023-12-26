import { inter } from "@/ui/fonts";
import PoweredBy from "@/home/PoweredBy";
import Hero from "@/home/Hero";
import Bio from "@/home/Bio";
import Projects from "@/home/Projects";

export default async function Page() {
  return (
    <main
      className={`${inter.className} flex flex-col pt-[50px] md:pt-[20px]  content-column`}
    >
      <PoweredBy />
      <Hero />
      <Bio />
      <Projects />
    </main>
  );
}
