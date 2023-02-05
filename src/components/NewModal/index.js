import React, { useState } from "react";
import * as S from "./Modal.styles";
import Button from "../styled/elements/Button";
import Input from "../styled/elements/Input";

const prepareForm = (labelInputs) => {
  return labelInputs.reduce((r, v) => ({ ...r, [v.name]: "" }), {});
};

const Modal = ({
  showModal,
  setShowModal,
  title,
  labelInputs,
  onSubmit,
  SubmitBtn,
}) => {
  const initialForm = prepareForm(labelInputs);
  const [form, setForm] = useState(initialForm);

  const onChangeHandler = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const onSubmitHandler = () => {
    onSubmit(form, () => setForm(initialForm));
  };

  return (
    <S.ModalContainer active={showModal}>
      <S.ModalBackdrop />
      <S.Modal>
        <S.CloseBtn
          onClick={() => {
            setShowModal(!showModal);
          }}
        />
        <S.ModalTitle>{title}</S.ModalTitle>
        <S.ModalContent>
          {labelInputs.map(({ label, name, type }) => (
            <S.LabelContainer>
              <Input
                label={label}
                name={name}
                type={type}
                value={form.name}
                onChange={(e) => onChangeHandler(e)}
              />
            </S.LabelContainer>
          ))}
          <S.ButtonContainer>
            <Button onClick={() => setShowModal(!showModal)} color={"#fe4d34"}>
              Cancel
            </Button>
            <Button
              color={"#41a5ee"}
              onClick={(e) => {
                e.preventDefault();
                onSubmitHandler(e);
              }}
            >
              {SubmitBtn}
            </Button>
          </S.ButtonContainer>
        </S.ModalContent>
      </S.Modal>
    </S.ModalContainer>
  );
};

Modal.defaultProps = {
  title: "Modal Example",
  labelInputs: [
    {
      label: "UserName",
      name: "username",
      type: "text",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
    },
  ],
  onSubmit: (form) => console.log(form),
  SubmitBtn: "Submit",
};

export default Modal;
