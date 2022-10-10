import React, { FC, useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';

import { LeftArrow } from '../../assets';
import {
  Layout,
  UserInfo,
  UserDetailSummary,
} from '../../components';
import { Loader } from '../../components/atoms';
import { useGetUserQuery } from '../../utils/redux/apiConnection';

import style from './index.module.css';

interface IUserDetails { }
export interface Navigation {
  text: string;
  active: boolean;
}
const UserDetails: FC<IUserDetails> = () => {
  const { id } = useParams();
  const { data: userData, isSuccess } = useGetUserQuery(id);
  const [data, setData] = useState<any>(JSON.parse(localStorage.getItem(`user-${id}`) ?? '{}'));
  const [loading, setLoading] = useState<boolean>(!!localStorage.getItem(`user-${id}`));
  const [navigation, setNavigation] = useState<Navigation[]>([
    {
      text: 'General Details',
      active: true,
    },
    {
      text: 'Documents',
      active: false,
    },
    {
      text: 'Bank Details',
      active: false,
    },
    {
      text: 'Savings',
      active: false,
    },
    {
      text: 'App and System',
      active: false,
    },
  ]);
  useEffect(() => {
    if (isSuccess) {
      localStorage.removeItem(`user-${id}`);
      localStorage.setItem(`user-${id}`, JSON.stringify(userData));
      setData(userData);
      setLoading(true);
    }
  }, [id, isSuccess, userData]);
  return (
    <Layout className={style.UserDetails}>
      <Link to="/dashboard/users">
        <div className={style.UserDetails__back}>
          <LeftArrow className={style.UserDetails__back__icon} />
          <span className={style.UserDetails__back__text} data-testid="back-to-users">Back to Users</span>
        </div>
      </Link>
      <div className={style.UserDetails__container}>
        <h2 className={style.UserDetails__container__heading}>User Details</h2>
        <div className={style.UserDetails__container__buttons}>
          <button
            type="button"
            className={`${style.UserDetails__container__buttons__button} ${style.UserDetails__container__buttons__button__blacklist}`}
          >
            Blacklist User
          </button>
          <button
            type="button"
            className={`${style.UserDetails__container__buttons__button} ${style.UserDetails__container__buttons__button__activate}`}
          >
            Activate User
          </button>
        </div>
      </div>

      {
        loading ? (
          <>
            <UserDetailSummary data={data} {...{ navigation, setNavigation }} />
            {navigation[0].active ? <UserInfo data={data} />
              : (
                <div className={style.UserDetails__unavailable}>
                  <p className={style.UserDetails__unavailable__text}>Currently unavailable</p>
                </div>
              )}
          </>
        ) : (
          <Loader />
        )
      }
    </Layout>
  );
};

export default UserDetails;
