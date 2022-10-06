import React, { FC } from "react";
import { Filter } from "../../assets";
import style from "./index.module.css";
import moment from "moment";
import { TableRow } from "../";
interface ITable {}
const heading: string[] = [
  "Organization",
  "Name",
  "Email",
  "Phone Number",
  "Date Joined",
  "Status",
];
const row = [
  {
    orgName: "Lendsqr",
    userName: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneNumber: "08078903721",
    createdAt: "May 15, 2020 10:00 AM",
    status: "Inactive",
  },{
    orgName: "Lendsqr",
    userName: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneNumber: "08078903721",
    createdAt: "May 15, 2020 10:00 AM",
    status: "Inactive",
  }
];
const Table: FC<ITable> = () => {
  console.log(
    moment("2072-12-27T03:44:22.522Z").format("MMMM D YYYY, h:mm:ss A")
  );
  return (
    <div className={style.Table}>
      <div className={style.Table__header}>
        {heading.map((head) => (
          <div className={style.Table__header__heading}>
            <span className={style.Table__header__heading__content}>
              {head}
            </span>
            <Filter className={style.Table__header__heading__icon} />
          </div>
        ))}
      </div>
      <div className={style.Table__row}>
        {row.map((data) => (<TableRow {...data} />))}
      </div>
    </div>
  );
};

export default Table;
