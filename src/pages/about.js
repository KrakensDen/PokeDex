import React, { useState } from "react";
import { PageContainer } from "../components/styled/containers/Container.styles";
import AppHead from "../layouts/AppHead";
import Footer from "../layouts/Footer/Footer";
import Navbar from "../layouts/Navbar";

const About = () => {
  return (
    <div>
      <h1 className="content">About</h1>
    </div>
  );
};

export default About;

About.getLayout = function PageLayout(page) {
  return (
    <>
      <AppHead headTitle={"About Page"} />
      <Navbar title={"About Us"} />
      <PageContainer>{page}</PageContainer>
      <Footer />
    </>
  );
};
