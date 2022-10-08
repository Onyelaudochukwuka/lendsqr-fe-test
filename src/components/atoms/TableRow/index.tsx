import moment from "moment";
import React, { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Activate, Blacklist, SideMenu, View } from "../../../assets";
import { STATUS } from "../../../utils/redux/apiConnection";
import style from "./index.module.css";
interface ITableRow {
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  status: string;
  id: number;
  currentUserMenu: string;
  setCurrentUserMenu: Dispatch<SetStateAction<string>>;
  blackListed: string[];
  setBlacklisted: Dispatch<SetStateAction<string[]>>;
}
const TableRow: FC<ITableRow> = ({
  orgName,
  userName,
  email,
  phoneNumber,
  createdAt,
  status,
  id,
  currentUserMenu,
  setCurrentUserMenu,
  blackListed,
  setBlacklisted
}) => {
  const [dropDown, setDropdown] = useState<boolean>(false);
  const [blacklist, setBlacklist] = useState<boolean>(false);
  useEffect(() => {
    if (blackListed.includes(userName)) {
      setBlacklist(true);
    } else {
      setBlacklist(false);
    }
  }, [blackListed, userName]);
  return (
    <div className={style.TableRow}>
      <div className={style.TableRow__elements}>{orgName}</div>
      <div className={`${style.TableRow__elements} ${style.TableRow__elements__display}`}><Link to={`/dashboard/users/${id}`}>{userName}</Link></div>
      <div className={style.TableRow__elements}>{email}</div>
      <div className={style.TableRow__elements}>{phoneNumber}</div>
      <div className={`${style.TableRow__elements} ${style.TableRow__elements__display}`}>
        {moment(createdAt).format("MMMM D YYYY, h:mm:ss A")}
      </div>
      <div className={`${style.TableRow__container} ${style.TableRow__elements} ${style.TableRow__elements__display} `}>
        <span
          className={`${style.TableRow__container__status} ${style.TableRow__container__status__display} ${
              blacklist
            ?
            style.TableRow__container__status__blacklisted
            :
            status === STATUS.active
              ? style.TableRow__container__status__active
              : status === STATUS.inactive
              ? style.TableRow__container__status__inactive
              : ""
          }`}
        >
           {blacklist ? "blacklisted" : status}
        </span>
      </div>
      <span
        className={style.TableRow__menu}
        onClick={() => {
          setDropdown((prev) => !prev)
          setCurrentUserMenu(userName)
        }}
        tabIndex={5}
        onBlur={() => setDropdown(false)}
      >
        <SideMenu className={style.TableRow__menu__icon} />
      </span>
      <div
        onClick={() => setDropdown(true)}
        className={`${style.TableRow__dropdown} ${(dropDown && currentUserMenu === userName) && style.TableRow__dropdown__active}`}>
          <div className={style.TableRow__dropdown__item}>
            <View className={style.TableRow__dropdown__item__icon} />{" "}
            <span>View Details</span>
          </div>
        <div className={style.TableRow__dropdown__item} onClick={() => setBlacklisted(prev => [...prev, userName])}>
            <Blacklist className={style.TableRow__dropdown__item__icon} />{" "}
            <span>Blacklist User</span>
          </div>
        <div className={style.TableRow__dropdown__item} onClick={() => setBlacklisted(prev => prev.filter(val => val !== userName))}>
            <Activate className={style.TableRow__dropdown__item__icon} />{" "}
            <span>Activate User</span>
          </div>
        </div>
    </div>
  );
};

export default TableRow;
