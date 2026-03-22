import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Gallery from "@/components/sections/Gallery";
import Strengths from "@/components/sections/Strengths";
import Journey from "@/components/sections/Journey";
import Career from "@/components/sections/Career";
import Collabs from "@/components/sections/Collabs";
import Metrics from "@/components/sections/Metrics";
import Pension from "@/components/sections/Pension";
import Automation from "@/components/sections/Automation";
import Lectures from "@/components/sections/Lectures";
import TechStack from "@/components/sections/TechStack";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Gallery />
        <Strengths />
        <Journey />
        <Career />
        <Collabs />
        <Metrics />
        <Pension />
        <Automation />
        <Lectures />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
