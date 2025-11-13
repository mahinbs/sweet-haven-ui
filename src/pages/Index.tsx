import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { BestSellers } from "@/components/BestSellers";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Categories />
      <BestSellers />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
