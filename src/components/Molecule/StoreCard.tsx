import Image from "../Atomic/Image";
import Text from "../Atomic/Text";

interface StoreCardProps {
  city: string;
  name: string;
  image: string;
}
const StoreCard: React.FC<StoreCardProps> = ({ city, name, image }) => {
  return (
    <article className="store-card">
      <div className="image">
        <Image src={image} />
      </div>
      <div className="store-info">
        <Text type="p">{city}</Text>
        <Text type="h5">{name}</Text>
      </div>
    </article>
  );
};
export default StoreCard;
