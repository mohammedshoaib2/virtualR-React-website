import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import WorkflowSection from "./components/WorkflowSection";
import PricingSection from "./components/PricingSection";
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/Footer";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      ".animate-slide-right",
      {
        x: -200,
        opacity: 0.1,
        ease: "back.inOut",
      },
      {
        x: 0,
        yoyo: true,
        opacity: 1,
        scrollTrigger: {
          trigger: ".trigger-animate-slide-right",
          start: "bottom bottom",
          end: "top 20% ",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".animate-slide-left",
      {
        x: 200,
        opacity: 0.1,
        ease: "back.inOut",
      },
      {
        x: 0,
        yoyo: true,
        opacity: 1,
        scrollTrigger: {
          trigger: ".trigger-animate-slide-right",
          start: "bottom bottom",
          end: "top 20% ",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".animate-move-up",
      {
        y: 200,
        opacity: 0.5,
        ease: "back.inOut",
        duration: 2,
      },
      {
        y: 0,
        opacity: 1,
        yoyo: true,
        scrollTrigger: {
          trigger: ".trigger-animate-move-up",
          start: "bottom bottom",
          end: "top 20% ",
          scrub: true,
        },

        ease: "back.inOut",
      }
    );

    //
  }, []);
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
