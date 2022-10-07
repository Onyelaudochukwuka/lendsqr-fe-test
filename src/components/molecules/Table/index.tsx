import React, { FC, useEffect, useState } from "react";
import { Filter } from "../../../assets";
import style from "./index.module.css";
import { useGetUsersQuery } from "../../../utils/redux/apiConnection";
import { SelectViews, TableRow } from "../..";
interface ITable {}
const heading: string[] = [
  "Organization",
  "Name",
  "Email",
  "Phone Number",
  "Date Joined",
  "Status",
];
const Table: FC<ITable> = () => {
  const { data: rows, isLoading } = useGetUsersQuery({});
  const [select, setSelect] = useState<number>(100);
  const [data, setData] = useState(rows);
  useEffect(() => {
    if (rows) {
      setData(rows.slice(0, select));
    }
  }, [rows, select]);
  return (
    <>
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
        {!isLoading && data?.map((data: any) => <TableRow {...data} />)}
      </div>
      </div>
      <div className={style.Table__footer}>
        <div className={style.Table__footer__select}>
          <span>Showing </span>
          <SelectViews {...{ select, setSelect }} /> <span>out of 1000</span>
        </div>
        
      </div>
    </>
  );
};

export default Table;
