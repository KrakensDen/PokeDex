import React from "react";
import * as S from "./SettingModal.styles";
import { AiFillCloseCircle } from "react-icons/ai";
import Button from "../../elements/Button";
import Form from "../Form";
import axios from "axios";

const saveSettings = () => {};

const SettingModal = ({ open, editingProfile, session }) => {
  const onSubmitHandler = (form) => {
    console.log("Saved Data to Profile ", form);
    axios
      .post("http://localhost:3000/api/User/update", {
        method: "POST",
        body: {
          username: form.username,
          session: session,
        },
      })
      .then((response) => {
        if (response.data.updated === true) {
          alert("Profile Has Been Updated");
          JSON.stringify(response);
        } else {
          alert(
            "Something went wrong - are the fields entered Correctly i.e. (Blank)"
          );
        }
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <S.BG hidden={open}>
      <S.Modal>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
        <S.ModalContent>
          <Form
            style={{ backgroundColor: "#2b2b2b", boxShadow: "none" }}
            title={"Settings"}
            formArr={[
              {
                label: "UserName:",
                name: "username",
                type: "text",
              },
              {
                label: "Test",
                name: "password",
                type: "password",
              },
            ]}
            submitBtn={" Save "}
            onSubmit={onSubmitHandler}
            method={"post"}
            action={"/api/User/update"}
            redirect={null}
          />
          <S.BtnContainer>
            <Button onClick={editingProfile} transparent>
              Cancel
            </Button>
            <Button transparent onClick={saveSettings}>
              Save
            </Button>
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
