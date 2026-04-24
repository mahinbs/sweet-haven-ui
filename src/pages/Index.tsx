import { Hero } from "@/components/Hero";
import { OurStory } from "@/components/OurStory";
import { Categories } from "@/components/Categories";
import { KeyMetrics } from "@/components/KeyMetrics";
import { GlobalPresence } from "@/components/GlobalPresence";
import { CSR } from "@/components/CSR";
import { Careers } from "@/components/Careers";
import { GetInTouch } from "@/components/GetInTouch";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <OurStory />
      <Categories />
      <KeyMetrics />
      <GlobalPresence />
      <CSR />
      <Careers />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Index;
