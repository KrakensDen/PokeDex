import React from "react";
import AppHead from "./AppHead";
import Footer from "./Footer/Footer";
import { PageContainer } from "../components/styled/Containers/Container.styles";
import Navbar from "./Navbar";

const AppLayout = ({ children, title, description, headTitle }) => {
  return (
    <>
      <AppHead headTitle={headTitle} description={description} />
      <Navbar title={title} />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </>
  );
};

export default AppLayout;
