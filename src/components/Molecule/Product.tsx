import Image from "../Atomic/Image";
import Link from "../Atomic/Link";
import Text from "../Atomic/Text";
import { IProduct } from "../Interface/IProduct";

const Product = (props: IProduct) => {
  const { id, title, price, image } = props;

  return (
    <>
      <Link href={`/products/${id}`}>
        <div className="products__card">
          <div className="products__card__image">
            <Image src={image} height="330" width="392" />
          </div>
          <div className="products__card__description">
            <Text type="p" color="black">
              {title}
            </Text>
            <div className="price">
              <Text type="p" color="#737373">
                <span className="linethrough">${price.toFixed(2)}</span>
              </Text>
              <Text type="p">${(price - price * 0.3).toFixed(2)}</Text>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Product;
