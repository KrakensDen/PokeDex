import React from "react";
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
