import Advertisement from "../Layout/Advertisement";
import Carousel from "../Layout/Carousel";
import Category from "../Layout/Category";
import EcoMission from "../Layout/EcoMission";
import EverlaneSection from "../Layout/EverlaneSection";
import HolidayGiftCleanerFashion from "../Layout/HolidayGiftCleaner";
import HomeHero from "../Layout/HomeHero";
import Review from "../Layout/Review";

const Home = () => {
  return (
    <>
      <HomeHero />
      <Category />
      <Advertisement />
      <EcoMission />
      <Carousel />
      <Review />
      <HolidayGiftCleanerFashion />
      <EverlaneSection />
    </>
  );
};

export default Home;
