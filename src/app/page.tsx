import { Navbar }         from "@/components/ui/Navbar";
import { Hero }           from "@/components/sections/Hero";
import { About }          from "@/components/sections/About";
import { Skills }         from "@/components/sections/Skills";
import { Projects }       from "@/components/sections/Projects";
import { BusinessVision } from "@/components/sections/BusinessVision";
import { CTA }            from "@/components/sections/CTA";
import { Footer }         from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <BusinessVision />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
