import React, { FC } from 'react';

import style from './index.module.css';

interface IUsersStats {
  Icon: FC<{ className: string }>;
  heading: string;
  count: number;
}
const UsersStats: FC<IUsersStats> = ({ Icon, heading, count }) => (
  <div className={style.UsersStats}>
    <Icon className={style.UsersStats__icon} data-testid="icon" />
    <span className={style.UsersStats__heading} data-testid="heading">{heading}</span>
    <span className={style.UsersStats__count} data-testid="count">{count.toLocaleString()}</span>
  </div>
);

export default UsersStats;
