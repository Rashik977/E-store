import { IAdvertisement } from "../../Interface/IAdvertisement";
import Button from "../Atomic/Button";
import Image from "../Atomic/Image";
import Text from "../Atomic/Text";

const AdvertisementCard = (props: IAdvertisement) => {
  const { id, image, text, buttonText } = props;
  return (
    <div className="advertisement__card" id={`advertisement-${id}`}>
      <Image src={image} />

      <Text type="h2" color="white">
        {text}
      </Text>

      <Button type="primary" paddingX="80px" paddingY="12px">
        <Text type="p">{buttonText}</Text>
      </Button>
    </div>
  );
};

export default AdvertisementCard;
