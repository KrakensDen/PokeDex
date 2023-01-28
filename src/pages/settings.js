import React from "react";
import AppHead from "../layouts/AppHead";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer/Footer";
import { PageContainer } from "../components/styled/containers/Container.styles";
import AppLayout from "../layouts/AppLayout";

const Settings = () => {
  return <div>Settings</div>;
};

Settings.getLayout = function pageLayout(page) {
  return (
    <AppLayout title={"Settings"} headTitle={"Settings"}>
      {page}
    </AppLayout>
  );
};
export default Settings;
