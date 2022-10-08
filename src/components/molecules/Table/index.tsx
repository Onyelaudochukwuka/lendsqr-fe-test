import React, { FC, useEffect, useState } from "react";
import { LeftNavigation, RightNavigation } from "../../../assets";
import style from "./index.module.css";
import { useGetUsersQuery } from "../../../utils/redux/apiConnection";
import { Loader, SelectViews, TableHeader, TableRow } from "../..";
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
  const { data: rows, isLoading } = useGetUsersQuery({});
  const [filteredData, setFilteredData] = useState<any>(rows ?? []);
  const [select, setSelect] = useState<number>(10);
  const [blackListed, setBlacklisted] = useState<string[]>(
    JSON.parse(window.localStorage.getItem("blackListed") ?? "[]")
  );
  const [filterQuery, setFilterQuery] = useState<FilteredQuery>({
    orgName: [],
    userName: "",
    email: "",
    phoneNumber: 0,
    createdAt: "",
    status: [],
  });
  const [beginQuery, setBeginQuery] = useState<boolean>(false);
  const orgNames:string[] = !!rows ? rows.map((data: any) => String(data.orgName)) :  [""];
  const [data, setData] = useState(filteredData);
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [currentUserMenu, setCurrentUserMenu] = useState<string>("");
  const limit = !!rows
    ? Math.round(!!filteredData ? filteredData.length / select : 0)
    : 0;
  const indexArr = [...Array(limit + 1).keys()].splice(1);
  const currentData = [
    indexArr.slice(
      currentIndex + 3 > indexArr.length
        ? indexArr.length - 4
        : currentIndex - 1,
      currentIndex + 3 > indexArr.length
        ? indexArr.length - 2
        : currentIndex + 1
    ),
    indexArr.slice(indexArr.length - 2),
  ];
  const value = currentData.map((items) =>
    items.map((item) => ({ value: item, active: item === currentIndex }))
  );
  useEffect(() => {
    if (!!filterQuery) {
      setBeginQuery(
        (!!filterQuery.orgName && filterQuery.orgName?.length > 0) ||
          !!filterQuery.userName ||
          !!filterQuery.email ||
          !!filterQuery.phoneNumber ||
          !!filterQuery.createdAt ||
          (!!filterQuery.status && filterQuery.status?.length > 0)
      );
    }
  }, [filterQuery]);
  useEffect(() => {
    console.log(beginQuery);
    if (beginQuery) {
      setFilteredData(
        rows?.filter(
          (row: any) =>
            filterQuery.orgName?.includes(row.orgName) ||
            (filterQuery.userName === ""
              ? false
              : row.userName.toLowerCase()?.includes(filterQuery.userName?.toLowerCase())) ||
            (filterQuery.email === ""
              ? false
              : row.email.toLowerCase()?.includes(filterQuery.email?.toLowerCase())) ||
            filterQuery.phoneNumber === row.phoneNumber ||
            filterQuery.createdAt === row.createdAt ||
            filterQuery.status
              ?.map((val) => val.toLowerCase())
              .includes(row.status)
        )
      );
    } else {
      setFilteredData(rows);
    }
  }, [filterQuery, rows, blackListed, beginQuery]);
  console.log(filteredData);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    localStorage.removeItem("blackListed");
    localStorage.setItem(
      "blackListed",
      JSON.stringify([...new Set(blackListed)])
    );
  }, [blackListed]);
  console.log(window.localStorage.getItem("blackListed"));
  useEffect(() => {
    if (filteredData) {
      setData(
        filteredData?.filter(
          (_: unknown, index: number) =>
            index >= select * currentIndex - select &&
            index < select * currentIndex
        )
      );
    }
  }, [filteredData, select, currentIndex]);
  useEffect(() => {
    setCurrentIndex(1);
  }, [select]);

  return (
    <>
      <div className={style.Table}>
        <TableHeader {...{ orgNames, setFilterQuery }} />
        {!isLoading ? (
          <div className={style.Table__row}>
            {data?.map((data: any) => (
              <TableRow
                {...{
                  ...data,
                  currentUserMenu,
                  setCurrentUserMenu,
                  blackListed,
                  setBlacklisted,
                }}
              />
            ))}
          </div>
        ) : (
          <Loader />
        )}
      </div>
      <div className={style.Table__footer}>
        <div className={style.Table__footer__select}>
          <span>Showing </span>
          <SelectViews {...{ select, setSelect }} />
          <span>out of 1000</span>
        </div>
        <div className={style.Table__footer__navigation}>
          <div
            className={style.Table__footer__navigation__icon}
            onClick={() =>
              setCurrentIndex((prev) => (prev - 1 > 0 ? prev - 1 : prev))
            }
          >
            <LeftNavigation
              className={style.Table__footer__navigation__icon__left}
            />
          </div>
          <div className={style.Table__footer__navigation__details}>
            {value[0].map(({ value, active }) => (
              <div
                key={`firstIndex-${value}`}
                onClick={() => setCurrentIndex(value)}
                className={`${style.Table__footer__navigation__details__unit} ${
                  active &&
                  style.Table__footer__navigation__details__unit__active
                }`}
              >
                {value}
              </div>
            ))}
            <span className={style.Table__footer__navigation__details__unit}>
              ...
            </span>
            {value[1].map(({ value, active }) => (
              <div
                key={`firstIndex-${value}`}
                onClick={() => setCurrentIndex(value)}
                className={`${style.Table__footer__navigation__details__unit} ${
                  active &&
                  style.Table__footer__navigation__details__unit__active
                }`}
              >
                {value}
              </div>
            ))}
          </div>
          <div
            className={style.Table__footer__navigation__icon}
            onClick={() =>
              setCurrentIndex((prev) => (prev + 1 > limit ? prev : prev + 1))
            }
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
