import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Work from "@/components/Work";

export default function Home() {
  return (
   <main>
     <Hero/>
     <About/>
     <Work/>
     <CTA/>
     <Footer/>
   </main>
  );
}
