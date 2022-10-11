import React, { FC, useEffect, useState } from 'react';

import {
  LeftNavigation,
  RightNavigation,
} from '../../../assets';
import { useGetUsersQuery } from '../../../utils/redux/apiConnection';
import {
  Loader,
  SelectViews,
  TableHeader,
  TableRow,
} from '../../atoms';

import style from './index.module.css';

interface ITable {}
export interface FilteredQuery {
  orgName?: string[];
  userName?: string;
  email?: string;
  phoneNumber?: number;
  createdAt?: string;
  status?: string[];
}
const Table: FC<ITable> = () => {
  const { data: rows, isLoading, isError } = useGetUsersQuery({});
  const [filteredData, setFilteredData] = useState<any>(rows ?? []);
  const [select, setSelect] = useState<number>(10);
  const [blackListed, setBlacklisted] = useState<string[]>(
    JSON.parse(window.localStorage.getItem('blackListed') ?? '[]'),
  );
  const [filterQuery, setFilterQuery] = useState<FilteredQuery>({
    orgName: [],
    userName: '',
    email: '',
    phoneNumber: 0,
    createdAt: '',
    status: [],
  });
  const [beginQuery, setBeginQuery] = useState<boolean>(false);
  const orgNames:string[] = rows ? rows.map((data: any) => String(data.orgName)) : [''];
  const [data, setData] = useState(filteredData);
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [currentUserMenu, setCurrentUserMenu] = useState<string>('');
  const limit = rows
    ? Math.ceil(filteredData ? filteredData.length / select : 0)
    : 0;
  const indexArr = [...Array(limit + 1).keys()].splice(1);
  const currentData = [
    indexArr.slice(
      currentIndex + 3 >= indexArr.length
        ? indexArr.length - (indexArr.length === 3 ? 3 : 4)
        : currentIndex - 1,
      currentIndex + 3 >= indexArr.length
        ? indexArr.length - 2
        : currentIndex + 1,
    ),
    indexArr.slice(indexArr.length - 2),
  ];
  const value = currentData.map((items) => items.map((item) => ({
    value: item,
    active: item === currentIndex,
  })));
  useEffect(() => {
    if (filterQuery) {
      setBeginQuery(
        (!!filterQuery.orgName && filterQuery.orgName?.length > 0)
        || !!filterQuery.userName
        || !!filterQuery.email
        || !!filterQuery.phoneNumber
        || !!filterQuery.createdAt
        || (!!filterQuery.status && filterQuery.status?.length > 0),
      );
    }
  }, [filterQuery]);
  useEffect(() => {
    if (beginQuery) {
      setFilteredData(
        rows?.filter(
          (row: any) => filterQuery.orgName?.includes(row.orgName)
            || (filterQuery.userName === ''
              ? false
              : row.userName.toLowerCase()?.includes(filterQuery.userName?.toLowerCase()))
            || (filterQuery.email === ''
              ? false
              : row.email.toLowerCase()?.includes(filterQuery.email?.toLowerCase()))
            || filterQuery.phoneNumber === row.phoneNumber
            || filterQuery.createdAt === row.createdAt
            || filterQuery.status
              ?.map((val) => val.toLowerCase())
              .includes(row.status)
            || (filterQuery.status?.includes('Blacklisted') && blackListed?.includes(row.userName)),
        ),
      );
    } else {
      setFilteredData(rows);
    }
  }, [filterQuery, rows, blackListed, beginQuery]);

  useEffect(() => {
    localStorage.removeItem('blackListed');
    localStorage.setItem(
      'blackListed',
      JSON.stringify([...new Set(blackListed)]),
    );
  }, [blackListed]);
  useEffect(() => {
    if (filteredData) {
      setData(
        filteredData?.filter(
          (_: unknown, index: number) => index >= select * currentIndex - select
            && index < select * currentIndex,
        ),
      );
    }
  }, [filteredData, select, currentIndex]);
  useEffect(() => {
    setCurrentIndex(1);
  }, [select]);
  if (isError) {
    return (
      <div className={style.Table__servererror}>
        <h1 className={style.Table__servererror__heading}>Unable To reach servers :(</h1>
        <p className={style.Table__servererror__text}>Try refreshing the page</p>
      </div>
    );
  }
  if (isLoading) {
    return (<Loader />);
  }
  return (
    <>
      <div className={style.Table}>
        <TableHeader {...{ orgNames, setFilterQuery }} />
        <div className={style.Table__row}>
          {data?.map((details: any) => (
            <TableRow
              key={`tableRow-${details.id}`}
              {...{
                ...details,
                currentUserMenu,
                setCurrentUserMenu,
                blackListed,
                setBlacklisted,
              }}
            />
          ))}
        </div>
      </div>
      <div className={style.Table__footer}>
        <div className={style.Table__footer__select}>
          <span>Showing </span>
          <SelectViews {...{ select, setSelect, setCurrentIndex }} />
          <span>
            out of
            {' '}
            {filteredData ? filteredData.length : 100}
          </span>
        </div>
        <div className={style.Table__footer__navigation}>
          <div
            className={style.Table__footer__navigation__icon}
            onClick={() => setCurrentIndex((prev) => (prev - 1 > 0 ? prev - 1 : prev))}
            onKeyDown={() => setCurrentIndex((prev) => (prev - 1 > 0 ? prev - 1 : prev))}
            role="button"
            tabIndex={0}
          >
            <LeftNavigation
              className={style.Table__footer__navigation__icon__left}
            />
          </div>
          <div className={style.Table__footer__navigation__details}>
            {value[0].map(({ value: index, active }) => (
              <div
                key={`bottomNavigation-${index}`}
                onClick={() => setCurrentIndex(index)}
                onKeyDown={() => setCurrentIndex(index)}
                className={`${style.Table__footer__navigation__details__unit} ${
                  active && style.Table__footer__navigation__details__unit__active
                }`}
                role="button"
                tabIndex={0}
              >
                {index}
              </div>
            ))}
            <span className={style.Table__footer__navigation__details__unit}>
              ...
            </span>
            {value[1].map(({ value: index, active }) => (
              <div
                key={`bottomNavigation-${index}`}
                onClick={() => setCurrentIndex(index)}
                onKeyDown={() => setCurrentIndex(index)}
                className={`${style.Table__footer__navigation__details__unit} ${
                  active && style.Table__footer__navigation__details__unit__active
                }`}
                role="button"
                tabIndex={0}
              >
                {index}
              </div>
            ))}
          </div>
          <div
            className={style.Table__footer__navigation__icon}
            onKeyDown={() => setCurrentIndex((prev) => (prev + 1 > limit ? prev : prev + 1))}
            onClick={() => setCurrentIndex((prev) => (prev + 1 > limit ? prev : prev + 1))}
            role="button"
            tabIndex={0}
          >
            <RightNavigation
              className={style.Table__footer__navigation__icon__right}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
