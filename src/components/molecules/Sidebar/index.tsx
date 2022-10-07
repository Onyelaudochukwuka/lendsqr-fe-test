import React, { FC, ReactNode } from "react";
import { SideBarLink, SidebarSection } from "../..";
import {
  AuditLogs,
  BriefCase,
  FeesAndCharges,
  FeesAndPricing,
  Guarantors,
  Handshake,
  Home,
  Karma,
  LoanRequests,
  OrgDropDown,
  Preferences,
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
} from "../../../assets";
import style from "./index.module.css";
interface ISidebar {
  className: string;
}
interface SidebarElementsChildren {
  Icon: FC<{ className: string }>;
  name: string;
  to: string;
  key: string;
}
export interface SidebarElements {
  heading: string;
  children: Required<SidebarElementsChildren[]>;
}
const sidebarElements: Required<SidebarElements[]> = [
  {
    heading: "CUSTOMERS",
    children: [
      {
        Icon: Users,
        name: "Users",
        to: "/users",
        key: "users",
      },
      {
        Icon: Guarantors,
        name: "Guarantors",
        to: "/guarantors",
        key: "guarantors",
      },
      {
        Icon: Sack,
        name: "Loans",
        to: "/loans",
        key: "loans",
      },
      {
        Icon: Handshake,
        name: "Decision Models",
        to: "/decision-models",
        key: "decison-models",
      },
      {
        Icon: Savings,
        name: "Savings",
        to: "/savings",
        key: "savings",
      },
      {
        Icon: LoanRequests,
        name: "Loan Requests",
        to: "/loan-requests",
        key: "loan-requests",
      },
      {
        Icon: WhiteList,
        name: "Whitelist",
        to: "/whitelist",
        key: "whitelist",
      },
      {
        Icon: Karma,
        name: "Karma",
        to: "/karma",
        key: "karma",
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
        key: "organization",
      },
      {
        Icon: LoanRequests,
        name: "Loan Products",
        to: "/loan-products",
        key: "loan-products",
      },
      {
        Icon: SavingsProducts,
        name: "Savings Products",
        to: "/savings-products",
        key: "savings-products",
      },
      {
        Icon: FeesAndCharges,
        name: "Fees and Charges",
        to: "/fees-and-charges",
        key: "fees-and-charges",
      },
      {
        Icon: Transactions,
        name: "Transactions",
        to: "/transactions",
        key: "transactions",
      },
      {
        Icon: Services,
        name: "Services",
        to: "/services",
        key: "services",
      },
      {
        Icon: ServiceAccount,
        name: "Service Accounts",
        to: "/service-accounts",
        key: "service-accounts",
      },
      {
        Icon: Settlements,
        name: "Settlements",
        to: "/settlements",
        key: "settlements",
      },
      {
        Icon: Reports,
        name: "Reports",
        to: "/reports",
        key: "reports",
      },
    ],
  },
  {
    heading: "SETTINGS",
    children: [
      {
        Icon: Preferences,
        name: "Preferences",
        to: "/preferences",
        key: "preferences",
      },
      {
        Icon: FeesAndPricing,
        name: "Fees and Pricing",
        to: "/fees-and-pricing",
        key: "fees-and-pricing",
      },
      {
        Icon: AuditLogs,
        name: "Audit Logs",
        to: "/audit-logs",
        key: "audit-logs"
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
      <SideBarLink to="/dashboard" end>
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
