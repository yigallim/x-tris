import React from "react";
import Header from "./components/header";
import BackButton from "./components/back-button";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header running={false} />
      <BackButton running={false} />
      {children}
    </>
  );
};

export default Layout;
