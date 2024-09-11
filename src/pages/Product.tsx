import { useParams } from "react-router-dom";
import { useGetProductByIDQuery } from "../services/Products";
import Image from "../components/Atomic/Image";
import Loading from "../components/Atomic/Loading";

const Product = () => {
  const id = useParams().id ?? "1";
  const { data, error, isLoading } = useGetProductByIDQuery(+id);

  if (isLoading) return <Loading />;
  if (error) return <p>Error loading product</p>;

  return (
    <div className="product">
      <div className="product__image">
        <Image src={data?.image} alt={data?.title} />
      </div>
      <div className="product__details">
        <h1 className="product__title">{data?.title}</h1>
        <p className="product__category">{data?.category}</p>
        <p className="product__price">${data?.price.toFixed(2)}</p>
        <p className="product__description">{data?.description}</p>
        <div className="product__rating">
          <span className="product__rate">Rating: {data?.rating.rate}</span>
          <span className="product__count">({data?.rating.count} reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
