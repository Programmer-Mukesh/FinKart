import React from "react";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ marginTop: "80px" }}>{children}</main>
    </div>
  );
};

export default Layout;
