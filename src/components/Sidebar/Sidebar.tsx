import React, { FC, ReactNode } from "react";
import { SideBarLink } from "../";
import {
  BriefCase,
  Guarantors,
  Home,
  OrgDropDown,
  Sack,
  Users,
} from "../../assets";
import style from "./index.module.css";
interface ISidebar {
  className: string;
}
type CustomersChildren = {
  Icon: FC<{ className: string }>;
  name: string;
  to: string;
};
interface Customers {
  heading: string;
  children: CustomersChildren[];
}
const customers: Customers[] = [
  {
    heading: "CUSTOMERS",
    children: [
      {
        Icon: Users,
        name: "Users",
        to: "/users",
      },
      {
        Icon: Guarantors,
        name: "Guarantors",
        to: "/guarantors",
      },
      {
        Icon: Sack,
        name: "Loans",
        to: "/loans",
      },
    ],
  },
];
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
        {customers.map(({ heading,children }) => (
      <div className={style.Sidebar__container}>
                <p className={style.Sidebar__container}>{ heading }</p>
        {children.map(({ Icon, name, to }) => (
          <SideBarLink to={to}>
            <Icon className={style.Sidebar__container__icon} />
            <span>{name}</span>
            </SideBarLink>
        ))}
      </div>
        ))}
    </div>
  );
};

export default Sidebar;
