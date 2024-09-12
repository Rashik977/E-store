import { ErrorBoundary } from "react-error-boundary";
import Image from "../components/Atomic/Image";
import Link from "../components/Atomic/Link";
import Loading from "../components/Atomic/Loading";
import Text from "../components/Atomic/Text";
import { useGetProductCategoriesQuery } from "../services/Products";

const Category = () => {
  const { data, error, isLoading } = useGetProductCategoriesQuery();

  if (error) {
    return <Text type="h3">Error</Text>;
  }

  if (isLoading) {
    return <Loading />;
  }
  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <div className="category-wrapper flex flex-col align-center">
        <Text type="h4">Shop by Category</Text>
        <div className="categories flex">
          {data?.map((item) => (
            <div className="category flex flex-col align-center" key={item}>
              <Image
                src={`/images/${item}.jpg`}
                alt={item}
                width="100%"
                height="100%"
              />
              <Link underline={true} href={`/store/${item}`}>
                <Text type="h6">{item.toUpperCase()}</Text>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Category;
