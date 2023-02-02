import React from "react";
import { Outlet } from "react-router";
import { ScrollToTop } from "../app/scroll";
import Footer from "../component/Footer";
import Nav from "../component/Nav";

const AppLayout = () => {
  ScrollToTop();
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
