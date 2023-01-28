import React from "react";
import AppLayout from "../layouts/AppLayout";

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
    <AppLayout title={"About Us"} headTitle={"About Page"}>
      {page}
    </AppLayout>
  );
};
