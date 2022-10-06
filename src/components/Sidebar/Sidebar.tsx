import React, { FC } from "react";
import { SideBarLink } from "../";
import { BriefCase, Home, OrgDropDown } from "../../assets";
import style from "./index.module.css";
interface ISidebar {
  className: string;
}
const Sidebar: FC<ISidebar> = ({ className }) => {
  return (
    <div className={`${style.Sidebar} ${className}`}>
      <div className={style.Sidebar__switch}>
        <BriefCase className={style.Sidebar__switch_icon} />{" "}
        <span>Switch Organization</span>{" "}
        <OrgDropDown className={style.Sidebar__switch__drop} />{" "}
      </div>
      <SideBarLink to="/dashboard">
              <Home className={style.Sidebar__link__icon} />
              <span>Dashboard</span>
      </SideBarLink>
    </div>
  );
};

export default Sidebar;
