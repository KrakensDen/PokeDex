import React, { useState } from "react";
import NewPokeCard from "../components/__tests__/NewPokeCard";
import NewModal from "../components/NewModal";

const Test = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <div
      style={{ display: "grid", placeItems: "center", minHeight: 100 + "vh" }}
    >
      <NewModal showModal={showModal} setShowModal={setShowModal}></NewModal>
      <NewPokeCard />
    </div>
  );
};

export default Test;
