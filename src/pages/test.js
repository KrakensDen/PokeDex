import React from "react";
import NewPokeCard from "../components/__tests__/NewPokeCard";

const Test = () => {
  return (
    <div
      style={{ display: "grid", placeItems: "center", minHeight: 100 + "vh" }}
    >
      <NewPokeCard />
    </div>
  );
};

export default Test;
