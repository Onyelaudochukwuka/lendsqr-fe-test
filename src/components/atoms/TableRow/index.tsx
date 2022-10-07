import moment from "moment";
import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Activate, Blacklist, SideMenu, View } from "../../../assets";
import { Status } from "../../../utils/redux/apiConnection";
import style from "./index.module.css";
interface ITableRow {
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  status: string;
  id: number;
}
const TableRow: FC<ITableRow> = ({
  orgName,
  userName,
  email,
  phoneNumber,
  createdAt,
  status,
  id
}) => {
  const [dropDown, setDropdown] = useState<boolean>(false);
  return (
    <div className={style.TableRow}>
      <div className={style.TableRow__elements}>{orgName}</div>
      <div className={style.TableRow__elements}><Link to={`/dashboard/users/${id}`}>{userName}</Link></div>
      <div className={style.TableRow__elements}>{email}</div>
      <div className={style.TableRow__elements}>{phoneNumber}</div>
      <div className={style.TableRow__elements}>
        {moment(createdAt).format("MMMM D YYYY, h:mm:ss A")}
      </div>
      <div className={`${style.TableRow__container} ${style.TableRow__elements}`}>
        <span
          className={`${style.TableRow__container__status} ${
            status === Status.active
              ? style.TableRow__container__status__active
              : status === Status.inactive
              ? style.TableRow__container__status__inactive
              : ""
          }`}
        >
          {status}
        </span>
      </div>
      <span
        className={style.TableRow__menu}
        onClick={() => setDropdown((prev) => !prev)}
      >
        <SideMenu className={style.TableRow__menu__icon} />
      </span>
      <div className={`${style.TableRow__dropdown} ${dropDown && style.TableRow__dropdown__active }`}>
          <div className={style.TableRow__dropdown__item}>
            <View className={style.TableRow__dropdown__item__icon} />{" "}
            <span>View Details</span>
          </div>
          <div className={style.TableRow__dropdown__item}>
            <Blacklist className={style.TableRow__dropdown__item__icon} />{" "}
            <span>Blacklist User</span>
          </div>
          <div className={style.TableRow__dropdown__item}>
            <Activate className={style.TableRow__dropdown__item__icon} />{" "}
            <span>Activate User</span>
          </div>
        </div>
    </div>
  );
};

export default TableRow;
