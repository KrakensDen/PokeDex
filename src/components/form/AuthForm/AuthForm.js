import Image from "next/image";
import React from "react";
import { LoginButton } from "../../styled-components/Button/Button.styles";
import { AuthFormContainer } from "../../styled-components/Container/Container.styles";
import { AuthTextInput } from "../../styled-components/TextInput/TextInput.styles";
import styles from "./auth.module.css";


const AuthForm = ({ submitUser}) => {
  return (
    <AuthFormContainer onSubmit={submitUser}>
      <div className={styles.formTitle}>
        <h1>Sign In</h1>
        <br />
        <Image height={70} width={70} src={"/images/signin.png"} />
        <br />
        <h4>Sign in with an existing account, or create new account.</h4>
      </div>
      <h3>
        <strong>Email: </strong>
      </h3>
      <AuthTextInput
        name="email"
        id="email"
        type="email"
        autoComplete="email"
        required
      ></AuthTextInput>
      <br />
      <br />
      <h3>
        <strong>Password: </strong>
      </h3>
      <AuthTextInput
        name="password"
        id="password"
        type="password"
      ></AuthTextInput>
      <br />
      <LoginButton type="submit">Sign In</LoginButton>
      <br />
    </AuthFormContainer>
  );
};

export default AuthForm;
