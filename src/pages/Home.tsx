import Hero from "../components/home/Hero";
import WhatIsAcreX from "../components/home/WhatIsAcreX";
import WhyAcreX from "../components/home/WhyAcreX";
import ExperienceApp from "../components/home/ExperienceApp";
import HowItWorks from "../components/home/HowItWorks";
import InteractiveExperience from "../components/home/InteractiveExperience";
import Trust from "../components/home/Trust";
import Testimonials from "../components/home/Testimonials";
import DownloadCTA from "../components/home/DownloadCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIsAcreX />
      <WhyAcreX />
      <ExperienceApp />
      <HowItWorks />
      <InteractiveExperience />
      <Trust />
      <Testimonials />
      <DownloadCTA />
    </>
  );
}
