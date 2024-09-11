import { useEffect } from "react";
import Image from "../Atomic/Image";
import Link from "../Atomic/Link";
import Text from "../Atomic/Text";

const Navigation = () => {
  useEffect(() => {
    const navItems = document.querySelectorAll(".navigation__item");

    const handleNavItemClick = (event: any) => {
      navItems.forEach((item) =>
        item.classList.remove("navigation__item--active")
      );
      event.currentTarget.classList.add("navigation__item--active");
    };

    navItems.forEach((item) => {
      item.addEventListener("click", handleNavItemClick);
    });

    return () => {
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
          <Link href={item.href}>
            <div className="navigation__item" key={item.title}>
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
        <Image src="/icons/search.svg" width="16px" height="16px" />
        <Image src="/icons/shop.svg" width="16px" height="16px" />
        <Image src="/icons/User.svg" width="16px" height="16px" />
      </div>
    </nav>
  );
};

export default Navigation;
