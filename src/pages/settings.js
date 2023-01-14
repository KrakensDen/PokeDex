import React from "react";
import AppHead from "../layouts/AppHead";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer/Footer";
import { PageContainer } from "../components/styled/containers/Container.styles";

const Settings = () => {
  return <div>Settings</div>;
};

Settings.getLayout = function pageLayout(page) {
  return (
    <>
      <AppHead />
      <Navbar title={"Settings"} />
      <PageContainer>{page}</PageContainer>
      <Footer />
    </>
  );
};
export default Settings;
