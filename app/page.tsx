import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
      <Navbar />
      <Hero />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
