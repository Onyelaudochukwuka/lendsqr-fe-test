import React, { FC } from "react";
import { DashboardUsers } from "../../assets";
import style from "./index.module.css";
interface IUsersStats {}
const UsersStats: FC<IUsersStats> = () => {
  return (
    <div className={style.UsersStats}>
      <DashboardUsers className={style.UsersStats__icon} />
          <span className={style.UsersStats__heading}>USERS</span>
          <span className={style.UsersStats__count}>2,453</span>
    </div>
  );
};

export default UsersStats;
