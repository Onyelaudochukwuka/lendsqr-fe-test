import React, { FC, ReactNode } from "react";
import style from "./index.module.css";
import { NavLink } from "react-router-dom";
interface ISideBarLink {
  children: ReactNode;
  to: string;
  className?: string;
  end?: boolean;
}
const SideBarLink: FC<ISideBarLink> = ({ children, className, ...props }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `${style.SideBarLink} ${className} ${
          isActive ? style.SideBarLink__active : ""
        }`
      }
      {...props}
    >
      {children}
    </NavLink>
  );
};

export default SideBarLink;
