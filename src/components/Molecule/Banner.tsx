import Image from "../Atomic/Image";
import Link from "../Atomic/Link";
import Text from "../Atomic/Text";

const Banner = () => {
  return (
    <div className="banner flex space-between align-center">
      <div className="banner__text flex justify-center">
        <Text type="p" style={{ fontWeight: "700" }}>
          Get early access on launches and offers.
        </Text>
        <Link underline={true}>
          <Text type="p">Sign Up For Texts</Text>
        </Link>
        <Text type="p">&#x2192;</Text>
      </div>
      <div className="banner__region flex">
        <Image src="/icons/USA.svg" width="21px" height="15px" />
        <Text type="p">USD</Text>
      </div>
    </div>
  );
};

export default Banner;
