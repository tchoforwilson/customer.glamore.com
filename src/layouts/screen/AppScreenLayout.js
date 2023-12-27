import React from "react";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";

const AppScreenLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="main-content">{children}</main>
      <Footer />
    </>
  );
};

export default AppScreenLayout;
