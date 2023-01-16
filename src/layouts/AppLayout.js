import React from "react";
import AppHead from "./AppHead";
import Footer from "./Footer/Footer";
import { PageContainer } from "../components/styled/containers/Container.styles";
import Navbar from "./Navbar";

const AppLayout = ({ children, title, description, headTitle }) => {
  return (
    <div style={{ backgroundImage: 'url("/images/BG.jpg")' }}>
      <div style={{ background: "#1c1c1cbb", color: "#ddddddee" }}>
        <AppHead headTitle={headTitle} description={description} />
        <Navbar title={title} />
        <PageContainer>{children}</PageContainer>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
