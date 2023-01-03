import React from "react";
import Header from './Header/Header'
import AppHead from './AppHead'
import Footer from "./Footer/Footer";
import { PageContainer } from "../components/styled-components/Container/Container.styles";

const AppLayout = ({ children, title, description, headTitle }) => {
  return (
    <>
      <AppHead headTitle={headTitle} description={description} />
      <Header title={title} />
      <PageContainer>
        {children}
      </PageContainer>
      <Footer />
    </>
  );
};

export default AppLayout;
