import Image from "../components/Atomic/Image";
import Link from "../components/Atomic/Link";
import Text from "../components/Atomic/Text";

const HolidayGiftCleanerFashion = () => {
  return (
    <div className="holiday-section">
      <div className="holiday-section__card">
        <Text type="h4">Our Holiday Gift Picks</Text>
        <div className="holiday-section__image">
          <Image
            src="/images/sweater.png"
            alt="Holiday Gifts"
            height="626px"
            width="100%"
          />
        </div>

        <div className="holiday-section__paragraph">
          <Text type="p">The best presents for everyone on your list.</Text>
        </div>
        <div className="holiday-section__link">
          <Link href="#" underline={true}>
            <Text type="p">Read More</Text>
          </Link>
        </div>
      </div>

      <div className="holiday-section__card">
        <Text type="h4">Cleaner Fashion</Text>
        <div className="holiday-section__image">
          <Image
            src="/images/cotton.png"
            alt="Cleaner Fashion"
            height="626px"
            width="100%"
          />
        </div>

        <div className="holiday-section__paragraph">
          <Text type="p">
            See the sustainability efforts behind each of our products.
          </Text>
        </div>
        <div className="holiday-section__link">
          <Link href="#" underline={true}>
            <Text type="p">Learn More</Text>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HolidayGiftCleanerFashion;
