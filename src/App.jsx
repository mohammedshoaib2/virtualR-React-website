import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import WorkflowSection from "./components/WorkflowSection";
import PricingSection from "./components/PricingSection";
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl  sm:mx-auto mt-6 sm:mt-10 lg:mt-20 ">
        <HeroSection />
        <FeaturesSection />
        <WorkflowSection />
        <PricingSection />
        <TestimonialSection />
        <Footer />
      </div>
    </>
  );
};

export default App;
