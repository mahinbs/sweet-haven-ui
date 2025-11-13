import { Hero } from "@/components/Hero";
import { OurStory } from "@/components/OurStory";
import { Categories } from "@/components/Categories";
import { BestSellers } from "@/components/BestSellers";
import { KeyMetrics } from "@/components/KeyMetrics";
import { GlobalPresence } from "@/components/GlobalPresence";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { Careers } from "@/components/Careers";
import { GetInTouch } from "@/components/GetInTouch";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <OurStory />
      <Categories />
      <BestSellers />
      <KeyMetrics />
      <GlobalPresence />
      <WhyChooseUs />
      <Testimonials />
      <Careers />
      <GetInTouch />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
