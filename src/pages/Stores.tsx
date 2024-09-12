import React from "react";

import { stores } from "../constants/Stores";
import StoreCard from "../components/Molecule/StoreCard";

const Stores: React.FC = () => {
  return (
    <section className="stores-section">
      <header>
        <h1>Stores</h1>
        <p>Find one of our 11 stores nearest you.</p>
      </header>
      <main>
        {stores.map((store, index) => (
          <StoreCard key={index} {...store} />
        ))}
      </main>
    </section>
  );
};
export default Stores;
