import Image from "../components/Atomic/Image";
import Link from "../components/Atomic/Link";
import Text from "../components/Atomic/Text";

const EverlaneSection = () => {
  return (
    <div className="everlane-section">
      <div className="everlane-section__header">
        <div className="everlane-section__title">
          <Text type="h3">Everlane On You</Text>
        </div>
        <div className="everlane-section__subtitle">
          <Text type="h6">
            Share your latest look with #EverlaneOnYou for a chance to be
            featured.
          </Text>
        </div>
        <div className="everlane-section__subtitle">
          <Link href="#" underline={true}>
            <Text type="h6">Add Your Photo</Text>
          </Link>
        </div>
      </div>

      <div className="everlane-section__gallery">
        <div className="everlane-section__gallery-item">
          <Image src="/images/shop01.png" alt="Gallery Image 1" />
        </div>
        <div className="everlane-section__gallery-item">
          <Image src="/images/shop02.png" alt="Gallery Image 2" />
        </div>
        <div className="everlane-section__gallery-item">
          <Image src="/images/shop03.png" alt="Gallery Image 3" />
        </div>
        <div className="everlane-section__gallery-item">
          <Image src="/images/shop04.png" alt="Gallery Image 4" />
        </div>
        <div className="everlane-section__gallery-item">
          <Image src="/images/shop05.png" alt="Gallery Image 5" />
        </div>
      </div>

      <div className="everlane-section__features">
        <div className="everlane-section__feature">
          <Image src="/icons/shipping.svg" alt="Icon 1" />
          <div className="everlane-section__feature__title">
            <Text type="h6">Complimentary Shipping</Text>
          </div>
          <div className="everlane-section__feature__subtitle">
            <Text type="h6">Enjoy free shipping on U.S. orders over $100.</Text>
          </div>
        </div>
        <div className="everlane-section__feature">
          <Image src="/icons/consious.svg" alt="Icon 2" />
          <div className="everlane-section__feature__title">
            <Text type="h6">Consciously Crafted</Text>
          </div>
          <div className="everlane-section__feature__subtitle">
            <Text type="h6">Designed with you and the planet in mind.</Text>
          </div>
        </div>
        <div className="everlane-section__feature">
          <Image src="/icons/location.svg" alt="Icon 3" />
          <div className="everlane-section__feature__title">
            <Text type="h6">Come Say Hi</Text>
          </div>
          <div className="everlane-section__feature__subtitle">
            <Text type="h6">We have 11 stores across the U.S.</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EverlaneSection;
