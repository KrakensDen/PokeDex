import React, { useState } from "react";
import Button from "../../elements/Button";
import * as S from "./styles";

const prepareForm = (formArr) => {
  return formArr.reduce((r, v) => ({ ...r, [v.name]: "" }), {});
};

const Form = ({ title, formArr, submitBtn, onSubmit, redirect }) => {
  const initialForm = prepareForm(formArr);
  const [form, setForm] = useState(initialForm);

  const onChangeHandler = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const onSubmitHandler = () => {
    onSubmit(form, () => setForm(initialForm));
  };

  return (
    <S.Form autoComplete="off">
      <S.FormTitle>{title}</S.FormTitle>
      {formArr.map(({ label, name, type }, index) => (
        <S.FormControl key={index}>
          <S.Label>{label}</S.Label>
          <S.Input
            name={name}
            type={type}
            value={form.name}
            onChange={(e) => onChangeHandler(e)}
          />
        </S.FormControl>
      ))}
      <Button
        as="button"
        onClick={(e) => {
          e.preventDefault();
          onSubmitHandler(e);
        }}
        color="#23a9f2"
        style={{ margin: 1.5 + "rem", width: 60 + "%" }}
      >
        {submitBtn}
      </Button>
      {redirect && (
        <S.Redirect>
          <S.RedirectLabel>{redirect.label}&emsp;</S.RedirectLabel>
          <S.RedirectLink href={redirect.link.to}>
            {redirect.link.label}
          </S.RedirectLink>
        </S.Redirect>
      )}
    </S.Form>
  );
};

Form.defaultProps = {
  title: "Sign In",
  formArr: [
    {
      label: "Email",
      name: "email",
      type: "email",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
    },
  ],
  submitBtn: "Sign In",
  onSubmit: (form) => console.log(form),
  redirect: {
    label: "Don't have an account",
    link: {
      label: "Register",
      to: "/register",
    },
  },
};

export default Form;
