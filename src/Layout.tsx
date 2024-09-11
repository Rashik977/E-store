import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "./components/Molecule/Banner";
import Navigation from "./components/Molecule/Navigation";
import SubNavigation from "./components/Molecule/SubNavigation";
import Footer from "./components/Molecule/Footer";

const Layout: React.FC = () => {
  return (
    <>
      <Banner />
      <Navigation />
      <SubNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
