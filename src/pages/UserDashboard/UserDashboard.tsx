import React, { FC } from "react";
import { Layout, UsersStats } from "../../components";
import style from "./index.module.css";
import { useGetUsersQuery } from "../../utils/redux/apiConnection";
import {
  DashboardActiveUsers,
  DashboardUsers,
  DashboardUsersWithLoans,
  DashboardUsersWithSavings,
} from "../../assets";
interface IUserDashboard {}
interface Stats {
  Icon: FC<{ className: string }>;
  heading: string;
  count: number;
}
const stats: Stats[] = [
  {
    Icon: DashboardUsers,
    heading: "USERS",
    count: 2453,
  },
  {
    Icon: DashboardActiveUsers,
    heading: "ACTIVE USERS",
    count: 2453,
  },
  {
    Icon: DashboardUsersWithLoans,
    heading: "USERS WITH LOANS",
    count: 12453,
    },
    {
        Icon: DashboardUsersWithSavings,
        heading: "USERS WITH SAVINGS",
        count: 102453
  }
];
const UserDashboard: FC<IUserDashboard> = () => {
  return (
    <Layout className={style.UserDashboard}>
      <h2 className={style.UserDashboard__heading}>Users</h2>
      <div className={style.UserDashboard__stats}>
              {
                    stats.map((props) => (<UsersStats {...props} />))
        }
      </div>
    </Layout>
  );
};

export default UserDashboard;
