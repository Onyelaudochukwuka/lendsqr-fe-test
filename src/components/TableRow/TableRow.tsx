import moment from "moment";
import React, { FC } from "react";
import style from "./index.module.css";
interface ITableRow {
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  status: string;
}
const TableRow: FC<ITableRow> = ({
  orgName,
  userName,
  email,
  phoneNumber,
  createdAt,
  status,
}) => {
  return (
    <div className={style.TableRow}>
      <div>{orgName}</div>
      <div>{userName}</div>
      <div>{email}</div>
      <div>{phoneNumber}</div>
      <div>{moment(createdAt).format("MMMM D YYYY, h:mm:ss A")}</div>
      <div className={style.TableRow__status}>{status}</div>
    </div>
  );
};

export default TableRow;
