import React, { FC } from 'react';

import {
  DashboardActiveUsers,
  DashboardUsers,
  DashboardUsersWithLoans,
  DashboardUsersWithSavings,
} from '../../assets';
import { Layout, Table, UsersStats } from '../../components';
import { useGetUsersQuery } from '../../utils/redux/apiConnection';

import style from './index.module.css';

interface IUserDashboard {}
interface Stats {
  Icon: FC<{ className: string }>;
  heading: string;
  count: number;
}
const stats: Required<Stats[]> = [
  {
    Icon: DashboardUsers,
    heading: 'USERS',
    count: 2453,
  },
  {
    Icon: DashboardActiveUsers,
    heading: 'ACTIVE USERS',
    count: 2453,
  },
  {
    Icon: DashboardUsersWithLoans,
    heading: 'USERS WITH LOANS',
    count: 12453,
  },
  {
    Icon: DashboardUsersWithSavings,
    heading: 'USERS WITH SAVINGS',
    count: 102453,
  },
];
const UserDashboard: FC<IUserDashboard> = () => {
  const { data } = useGetUsersQuery({});
  console.log(data);
  return (
    <Layout className={style.UserDashboard}>
      <h2 className={style.UserDashboard__heading}>Users</h2>
      <div className={style.UserDashboard__stats}>
        {stats.map((props) => (
          <UsersStats {...props} />
        ))}
      </div>
      <Table />
    </Layout>
  );
};

export default UserDashboard;
