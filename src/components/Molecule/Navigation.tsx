import { useEffect } from "react";
import Image from "../Atomic/Image";
import Link from "../Atomic/Link";
import Text from "../Atomic/Text";
import { RootState } from "../../State/Configure";
import { useSelector } from "react-redux";

const Navigation = () => {
  const cartItemsCount = useSelector((state: RootState) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );
  useEffect(() => {
    const navItems = document.querySelectorAll(".navigation__item");
    const navLogo = document.querySelector(".navigation__logo");

    const handleNavItemClick = (event: any) => {
      removeClassActive();
      event.currentTarget.classList.add("navigation__item--active");
    };

    const removeClassActive = () => {
      navItems.forEach((item) =>
        item.classList.remove("navigation__item--active")
      );
    };

    navLogo?.addEventListener("click", removeClassActive);

    navItems.forEach((item) => {
      item.addEventListener("click", handleNavItemClick);
    });

    return () => {
      navLogo?.removeEventListener("click", handleNavItemClick);
      navItems.forEach((item) => {
        item.removeEventListener("click", handleNavItemClick);
      });
    };
  }, []);

  const navigationItems = [
    { title: "Women", href: "/store/women's clothing" },
    { title: "Men", href: "/store/men's clothing" },
    { title: "Jewelery", href: "/store/jewelery" },
    { title: "Electronics", href: "/store/electronics" },
    { title: "About", href: "/about" },
    { title: "Everworld Stories", href: "/everworld-stories" },
  ];

  return (
    <nav className="navigation flex space-between">
      <div className="navigation__items flex">
        {navigationItems.map((item) => (
          <Link href={item.href} key={item.title}>
            <div className="navigation__item">
              <Text type="p">{item.title}</Text>
            </div>
          </Link>
        ))}
      </div>
      <div className="navigation__logo flex align-center">
        <Link href="/">
          <Image src="/icons/Logo.svg" width="128px" height="14px" />
        </Link>
      </div>
      <div className="navigation__icons flex align-center">
        <Link href="#">
          <Image src="/icons/search.svg" width="16px" height="16px" />
        </Link>
        <div id="cart" className="cart-icon-container">
          <Link href="#">
            <Image src="/icons/shop.svg" width="16px" height="16px" />
          </Link>
          {cartItemsCount > 0 && (
            <span className="cart-badge">{cartItemsCount}</span>
          )}
        </div>
        <Link href="#">
          <Image src="/icons/User.svg" width="16px" height="16px" />
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
