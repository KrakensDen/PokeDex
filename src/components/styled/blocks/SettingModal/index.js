import React, { useState } from "react";
import * as S from "./SettingModal.styles";
import { AiFillCloseCircle } from "react-icons/ai";
import Button from "../../elements/Button";

const SettingModal = ({ open, editingProfile }) => {
  return (
    <S.BG hidden={open}>
      <S.Modal>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <S.ModalTitle>Settings</S.ModalTitle>
        </div>
        <S.ModalContent>
          <>
            <label htmlFor="username">UserName:</label>
            <input type={"text"} name="username" id={"username"} />
          </>
          <S.BtnContainer>
            <Button onClick={editingProfile} transparent>
              Cancel
            </Button>
            <Button transparent>Save</Button>
          </S.BtnContainer>
        </S.ModalContent>
        <S.ExitButton onClick={editingProfile}>
          <AiFillCloseCircle style={{ width: "20px", height: "20px" }} />
        </S.ExitButton>
      </S.Modal>
    </S.BG>
  );
};

export default SettingModal;
