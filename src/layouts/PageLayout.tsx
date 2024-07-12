import React from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";

export const PageLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};
