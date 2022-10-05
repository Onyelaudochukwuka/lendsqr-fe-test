import React, { FC, ReactNode } from "react";
import { Navbar, Sidebar } from "../";
import style from "./index.module.css";
interface ILayout {
  children: ReactNode;
  className: string;
}
const Layout: FC<ILayout> = ({ children, className, ...props }) => {
  return (
    <section className={style.Layout}>
      <Navbar className={style.Layout__nav} />
      <Sidebar className={style.Layout__sidebar} />
      <section {...props} className={`${className} ${style.Layout__body}`}>{children}</section>
    </section>
  );
};

export default Layout;
