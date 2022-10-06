import React, { FC, useEffect, useState } from "react";
import { Filter } from "../../assets";
import style from "./index.module.css";
import moment from "moment";
import { TableRow } from "../";
import { useGetUsersQuery } from "../../utils/redux/apiConnection";
interface ITable {}
const heading: string[] = [
  "Organization",
  "Name",
  "Email",
  "Phone Number",
  "Date Joined",
  "Status"
];
const Table: FC<ITable> = () => {
  const { data: rows, isLoading } = useGetUsersQuery({});
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
      {/* <div className={style.Table__row}>
        {!isLoading && rows?.map((data: any) => <TableRow {...data} />)}
      </div> */}
<div></div>
    </div>
  );
};

export default Table;
