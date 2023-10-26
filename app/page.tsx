import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";
import Categories from "@/components/sections/Categories";
import ExperiencesNextDay from "@/components/sections/ExperiencesNextDay";
import ExperiencesUnder100 from "@/components/sections/ExperiencesUnder100";
import FeaturedCreators from "@/components/sections/FeaturedCreators";
import FindCreators from "@/components/sections/FindCreators";
import FindExperiences from "@/components/sections/FindExperiences";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Reviews from "@/components/sections/Reviews";
import VirtualExperiences from "@/components/sections/VirtualExperiences";

function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Categories />
      <FeaturedCreators />
      <ExperiencesNextDay />
      <HowItWorks />
      <ExperiencesUnder100 />
      <FindCreators />
      <VirtualExperiences />
      <Reviews />
      <FindExperiences />
      <Footer />
    </>
  );
}

export default Home;
