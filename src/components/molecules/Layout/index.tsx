import React, { FC, ReactNode, useState } from "react";
import { Navbar, Sidebar } from "../..";
import style from "./index.module.css";
interface ILayout {
  children: ReactNode;
  className: string;
}
const Layout: FC<ILayout> = ({ children, className, ...props }) => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <section className={style.Layout}>
      <Navbar
        className={style.Layout__nav}
        {...{ showSideBar, setShowSideBar }}
      />
      <Sidebar className={`${style.Layout__sidebar} ${showSideBar && style.Layout__sidebar__active}`} />
      <section {...props} className={`${className} ${style.Layout__body}`}>
        {children}
      </section>
    </section>
  );
};

export default Layout;
