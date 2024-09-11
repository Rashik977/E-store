import Button from "../components/Atomic/Button";
import Text from "../components/Atomic/Text";

const HomeHero = () => {
  return (
    <div className="homeHero flex align-center">
      <div className="homeHero__items flex flex-col">
        <div>
          <div className="homeHero__item homeHero__item--title">
            <Text type="h1">Your Cozy Era</Text>
          </div>
          <div className="homeHero__item flex-col">
            <Text type="h4">Get peak comfy-chic</Text>
            <Text type="h4">with new winter essentials.</Text>
          </div>
        </div>
        <div className="flex justify-center">
          <Button type="primary" paddingX="80px" paddingY="12px">
            <Text type="h6">SHOP NOW</Text>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
