import Image from "../components/Atomic/Image";
import Text from "../components/Atomic/Text";
import { products } from "../constants/Carousel";

const Carousel = () => {
  return (
    <div className="product-flex-container">
      <div className="product-flex-title">
        <Text type="h3">Everlane Favorites</Text>
      </div>
      <div className="product-flex-subtitle">
        <Text type="h6">
          Beautifully Functional. Purposefully Designed. Consciously Crafted.
        </Text>
      </div>
      <div className="product-flex">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <Image src={product.image} alt={product.title} />
            </div>
            <div className="product-title">
              <Text type="p">{product.title}</Text>
            </div>
            <div className="product-color">
              <Text type="p">{product.color}</Text>
            </div>
            <div className="product-price">
              <Text type="p">{product.price}</Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
