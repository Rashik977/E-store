import Advertisement from "../Layout/Advertisement";
import Carousel from "../Layout/Carousel";
import Category from "../Layout/Category";
import EcoMission from "../Layout/EcoMission";
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
    </>
  );
};

export default Home;
