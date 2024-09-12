import { useParams } from "react-router-dom";
import { useGetProductByIDQuery } from "../services/Products";
import Image from "../components/Atomic/Image";
import Loading from "../components/Atomic/Loading";
import Button from "../components/Atomic/Button";
import Text from "../components/Atomic/Text";
import { addItem } from "../State/Cart";
import { useDispatch } from "react-redux";

const Product = () => {
  const id = useParams().id ?? "1";
  const { data, error, isLoading } = useGetProductByIDQuery(+id);

  const dispach = useDispatch();

  if (isLoading) return <Loading />;
  if (error) return <p>Error loading product</p>;

  if (!data) return <p>No product found</p>;

  const handleClick = () => {
    dispach(addItem({ ...data, quantity: 1 }));
  };

  return (
    <div className="product">
      <div className="product__image">
        <Image src={data?.image} alt={data?.title} />
      </div>
      <div className="product__details">
        <div className="product__title">
          <Text type="h3">{data?.title}</Text>
        </div>
        <div className="product__category">
          <Text type="h6">{data?.category}</Text>
        </div>
        <div className="product__price">
          <Text type="h3">${data?.price.toFixed(2)}</Text>
        </div>
        <div className="product__description">
          <Text type="h5">{data?.description}</Text>
        </div>
        <div className="product__rating">
          <div className="product__rate">
            <Text type="h5">Rating: {data?.rating.rate}</Text>
          </div>
          <div className="product__count">
            <Text type="h5">({data?.rating.count} reviews)</Text>
          </div>
        </div>
        <div className="product__buy">
          <Button type="secondary" onClick={handleClick}>
            <Text type="h6">ADD TO CART</Text>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
