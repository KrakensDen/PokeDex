import React from "react";
import * as S from "./DragAndDropBox.styles";

const DragAndDropBox = () => {
  return (
    <S.DragAndDropBox>
      <S.TabGroup>
        <S.Tab>
          <span>Teams</span>
        </S.Tab>
        <S.Tab>
          <span>Boxes</span>
        </S.Tab>
      </S.TabGroup>
      <S.MainContainer>hello</S.MainContainer>
    </S.DragAndDropBox>
  );
};

export default DragAndDropBox;
