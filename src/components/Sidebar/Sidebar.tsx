import React, { FC, ReactNode } from "react";
import { SideBarLink, SidebarSection } from "../";
import {
  BriefCase,
  FeesAndCharges,
  Guarantors,
  Handshake,
  Home,
  Karma,
  LoanRequests,
  OrgDropDown,
  Reports,
  Sack,
  Savings,
  SavingsProducts,
  ServiceAccount,
  Services,
  Settlements,
  Transactions,
  Users,
  WhiteList,
} from "../../assets";
import style from "./index.module.css";
interface ISidebar {
  className: string;
}
type SidebarElementsChildren = {
  Icon: FC<{ className: string }>;
  name: string;
  to: string;
};
export interface SidebarElements {
  heading: string;
  children: SidebarElementsChildren[];
}
const sidebarElements: SidebarElements[] = [
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
      {
        Icon: Handshake,
        name: "Decision Models",
        to: "/decision-models",
      },
      {
        Icon: Savings,
        name: "Savings",
        to: "/savings",
      },
      {
        Icon: LoanRequests,
        name: "Loan Requests",
        to: "/loan-requests",
      },
      {
        Icon: WhiteList,
        name: "Whitelist",
        to: "/whitelist",
      },
      {
        Icon: Karma,
        name: "Karma",
        to: "/karma",
      },
    ],
  },
  {
    heading: "BUSINESSES",
    children: [
      {
        Icon: BriefCase,
        name: "Organization",
        to: "/organization",
      },
      {
        Icon: LoanRequests,
        name: "Loan Products",
        to: "/loan-products",
      },
      {
        Icon: SavingsProducts,
        name: "Savings Products",
        to: "/savings-products",
      },
      {
        Icon: FeesAndCharges,
        name: "Fees and Charges",
        to: "/fees-and-charges",
      },
      {
        Icon: Transactions,
        name: "Transactions",
        to: "/transactions",
      },
      {
        Icon: Services,
        name: "Services",
        to: "/services",
      },
      {
        Icon: ServiceAccount,
        name: "Service Accounts",
        to: "/service-accounts",
      },
      {
        Icon: Settlements,
        name: "Settlements",
        to: "/settlements",
      },
      {
        Icon: Reports,
        name: "Reports",
        to: "/reports",
      },
    ],
    },
    {
        heading: "SETTINGS",
        children: [
            {
                
            }
        ]
  }
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
      {sidebarElements.map((props) => (
        <SidebarSection {...props} />
      ))}
    </div>
  );
};

export default Sidebar;
