import React from "react";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";

export type Props = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col h-svh">
      <Header></Header>
      <div className="h-full flex-1 overflow-auto">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default DefaultLayout;
