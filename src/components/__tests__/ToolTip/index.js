import React from "react";
import * as S from "./ToolTip.styles";

const ToolTip = ({ children, toolTip }) => {
  return (
    <S.ToolTip>
      {children}
      <span className={"tooltip-text"}>{toolTip}</span>
    </S.ToolTip>
  );
};

export default ToolTip;
