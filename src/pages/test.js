import React from "react";
import DragAndDropBox from "../components/__tests__/DragAndDropBox";

const Test = () => {
  return (
    <div
      style={{ display: "grid", placeItems: "center", minHeight: 100 + "vh" }}
    >
      <DragAndDropBox />
    </div>
  );
};

export default Test;
