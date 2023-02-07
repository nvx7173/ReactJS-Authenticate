import React, { FC } from "react";
import Header from "../Header";


const Layout: FC = (props: any) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default Layout;