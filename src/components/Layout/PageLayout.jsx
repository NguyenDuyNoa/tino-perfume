import React from "react";
import Header from "../Header";
import Navigation from "../Navigation";
import Footer from "../Footer";

const PageLayout = ({ children }) => {
  const userInfor = JSON.parse(localStorage.getItem("userInfor"));

  return (
    <div>
      <Header userInfor={userInfor} />
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
