import Text from "../Atomic/Text";

const SubNavigation = () => {
  return (
    <div className="subNavigation flex justify-center">
      <div className="subNavigation__item">
        <Text type="p">Holiday Gifting</Text>
      </div>
      <div className="subNavigation__item">
        <Text type="p">New Arrivals</Text>
      </div>
      <div className="subNavigation__item">
        <Text type="p">Best-Sellers</Text>
      </div>
      <div className="subNavigation__item">
        <Text type="p">Clothing</Text>
      </div>
      <div className="subNavigation__item">
        <Text type="p">Tops & Sweaters</Text>
      </div>
      <div className="subNavigation__item">
        <Text type="p">Pants & Jeans</Text>
      </div>
      <div className="subNavigation__item">
        <Text type="p">Outerwear</Text>
      </div>
      <div className="subNavigation__item">
        <Text type="p">Shoes & Bags</Text>
      </div>
      <div className="subNavigation__item">
        <Text type="p" color="#D0021B">
          Sale
        </Text>
      </div>
    </div>
  );
};

export default SubNavigation;
