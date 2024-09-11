import Loading from "../components/Atomic/Loading";
import Text from "../components/Atomic/Text";
import Product from "../components/Molecule/Product";
import { useGetCategoryItemsQuery } from "../services/Products";

const Products = (props: { category: string }) => {
  const { category } = props;
  const { data, error, isLoading } = useGetCategoryItemsQuery(category);

  if (error) {
    return <Text type="h3">Error</Text>;
  }

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="products-wrapper flex">
      {data?.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Products;
