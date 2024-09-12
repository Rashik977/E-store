import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "./components/Molecule/Banner";
import Navigation from "./components/Molecule/Navigation";
import SubNavigation from "./components/Molecule/SubNavigation";
import Footer from "./components/Molecule/Footer";
import Cart from "./components/Molecule/Cart";

const Layout: React.FC = () => {
  return (
    <>
      <Banner />
      <Navigation />
      <SubNavigation />
      <Cart />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
