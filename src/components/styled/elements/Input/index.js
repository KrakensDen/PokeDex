import React from "react";
import * as S from "./Input.styles";

function Index({ type, name, label, size, ...rest }) {
  return (
    <S.Label className={`${size}`} htmlFor={name}>
      <S.Input type={type} name={name} {...rest} />
      <S.LabelSpan>{label}</S.LabelSpan>
    </S.Label>
  );
}

export default Index;
