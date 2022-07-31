import React from "react";
import { LayoutContainer } from "./Layout.styled";

const Layout = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
