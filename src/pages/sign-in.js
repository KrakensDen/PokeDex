import React from "react";
import Footer from "../layouts/Footer/Footer";
import AppHead from "../layouts/AppHead";
import Form from "/src/components/styled/blocks/Form";

// * This is for handling the user submission
// * Grabs the email and password form the Form component.
// * form is an object with keys and values relating to the forms input's Label and its value when submitted
const onSubmitHandler = (form, callback) => {
  console.log(form);
};

// * The elements rendered in between the Layout weather that be The AppLayout or the individual page layout.
const SignUp = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: 100 + "vh",
        width: 35 + "%",
        margin: "auto",
        alignItems: "center",
        background: "transparent",
      }}
    >
      <Form redirect={null} onSubmit={onSubmitHandler} />
    </div>
  );
};

export default SignUp;

// * Layout Made Especially for the sign-in page.
SignUp.getLayout = function PageLayout(page) {
  return (
    <>
      <AppHead
        headTitle={"Sign Up"}
        description={
          "Sign up to get all the access to your own Pokemon - Welcome to the wonderful world of pokemon, Your adventure awaits!"
        }
      />
      {page}
      <Footer />
    </>
  );
};
