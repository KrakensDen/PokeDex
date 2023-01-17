import React from "react";
import Footer from "../layouts/Footer/Footer";
import AppHead from "../layouts/AppHead";
import Form from "/src/components/styled/blocks/Form";
import { FormContainer } from "../components/styled/containers/FormContainer";
import { getProviders, getSession, signIn } from "next-auth/react";
import Button from "../components/styled/elements/Button";

// * This is for handling the user submission
// * Grabs the email and password form the Form component.
// * form is an object with keys and values relating to the forms input's Label and its value when submitted
const onSubmitHandler = (form) => {
  console.log("Sign in submitted ", form);
  signIn("credentials").then((res) => {
    console.log(res);
  });
};
const onSubmitHandlerEmail = (form) => {
  console.log("Sign in submitted ", form);
  signIn("email", { email: form.email }).then((res) => {
    console.log(res);
  });
};

// * The elements rendered in between the Layout weather that be The AppLayout or the individual page layout.
const SignUp = ({ providers }) => {
  return (
    <FormContainer>
      <Form
        title={"Sign In"}
        formArr={[
          {
            label: "Username",
            name: "username",
            type: "text",
          },
          {
            label: "Password",
            name: "password",
            type: "password",
          },
          {
            label: "Confirm Password",
            name: "cPassword",
            type: "password",
          },
        ]}
        submitBtn={"Sign In"}
        redirect={{
          label: "Sign In with Email - ",
          link: {
            label: "Email SignIn",
            to: "/api/auth/signin",
          },
        }}
        onSubmit={onSubmitHandler}
        method={"post"}
        action={"/api/auth/signIn/email"}
      />
      <h1>- OR -</h1>
      <Form
        title={"Email Sign In"}
        formArr={[
          {
            label: "email",
            name: "email",
            type: "email",
          },
        ]}
        submitBtn={"Email Sign In"}
        redirect={null}
        onSubmit={onSubmitHandlerEmail}
      />
      <h1>- OR -</h1>

      <>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <Button color={"#20f26c"} onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </Button>
          </div>
        ))}
      </>
    </FormContainer>
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

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const providers = await getProviders();

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      providers,
    },
  };
}
