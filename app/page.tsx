import AboutSection from "./components/about-section";
import FeaturedCreatives from "./components/featured-creatives";
import HomeHero from "./components/home-hero";
import JoinCallout from "./components/join-callout";
import TickerBar from "./components/ticker-bar";

export default function Home() {
  return (
    <>
      <TickerBar />
      <HomeHero />
      <FeaturedCreatives />
      <AboutSection />
      <JoinCallout />
    </>
  );
}
