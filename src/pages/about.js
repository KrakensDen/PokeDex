import React from "react";
import { PageContainer } from "../components/styled/Containers/Container.styles";
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
      <Navbar />
      <PageContainer>{page}</PageContainer>
      <Footer />
    </>
  );
};
