import React from "react";
import { Outlet } from "react-router";
import Footer from "../component/Footer";
import Nav from "../component/Nav";

const AppLayout = () => {
  return (
    <>
      <Nav />
      <section>
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default AppLayout;
