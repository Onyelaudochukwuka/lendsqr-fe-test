import React, { FC } from "react";
import { DashboardUsers } from "../../assets";
import style from "./index.module.css";
interface IUsersStats {
  Icon: FC<{ className: string }>;
  heading: string;
  count: number;
}
const UsersStats: FC<IUsersStats> = ({ Icon, heading, count }) => {
  return (
    <div className={style.UsersStats}>
      <Icon className={style.UsersStats__icon} />
          <span className={style.UsersStats__heading}>{heading}</span>
      <span className={style.UsersStats__count}>{count.toLocaleString()}</span>
    </div>
  );
};

export default UsersStats;
