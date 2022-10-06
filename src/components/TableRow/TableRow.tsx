import moment from "moment";
import React, { FC, useState } from "react";
import { SideMenu } from "../../assets";
import { Status } from "../../utils/redux/apiConnection";
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
  const [dropDown, setDropdown] = useState<boolean>(false);
  return (
    <div className={style.TableRow}>
      <div className={style.TableRow__elements}>{orgName}</div>
      <div className={style.TableRow__elements}>{userName}</div>
      <div className={style.TableRow__elements}>{email}</div>
      <div className={style.TableRow__elements}>{phoneNumber}</div>
      <div className={style.TableRow__elements}>{moment(createdAt).format("MMMM D YYYY, h:mm:ss A")}</div>
      <div className={style.TableRow__container}><span className={`${style.TableRow__container__status} ${status === Status.active ? style.TableRow__container__status__active : status === Status.inactive ? style.TableRow__container__status__inactive : ""}`}>{status}</span></div>
      <span className={style.TableRow__menu} onClick={() => setDropdown(prev => !prev)}><SideMenu className={style.TableRow__menu__icon} /></span>
      {dropDown && <div className={style.TableRow__dropdown}>
        <div className={style.TableRow__dropdown__item}>Edit</div>
        <div className={style.TableRow__dropdown__item}>Delete</div>
      </div>}
    </div>
  );
};

export default TableRow;
