import React, { FC, useEffect, useState } from "react";
import { Filter, LeftNavigation, RightNavigation } from "../../../assets";
import style from "./index.module.css";
import { useGetUsersQuery } from "../../../utils/redux/apiConnection";
import { SelectViews, TableRow } from "../..";
interface ITable {}
interface Heading {
  value: string;
  mobile?: boolean;
}
const heading: Required<Heading[]> = [
  {
    value: "Organization",
  },
  {
    value: "Username",
    mobile: true,
  },
  {
    value: "Email",
  },

  {
    value: "Phone Number",
  },
  {
    value: "Date Joined",
    mobile: true,
  },
  {
    value: "Status",
    mobile: true,
  },
];

const Table: FC<ITable> = () => {
  const { data: rows, isLoading } = useGetUsersQuery({});
  const [select, setSelect] = useState<number>(10);
  const [blackListed, setBlacklisted] = useState<string[]>(
    JSON.parse(window.localStorage.getItem("blackListed") ?? "[]")
  );

  const [data, setData] = useState(rows);
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [currentUserMenu, setCurrentUserMenu] = useState<string>("");
  const limit = !!rows ? Math.round(rows?.length / select) : 0;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    localStorage.removeItem("blackListed");
    localStorage.setItem(
      "blackListed",
      JSON.stringify([...new Set(blackListed)])
    );
  }, [blackListed]);
  console.log(window.localStorage.getItem("blackListed"));
  useEffect(() => {
    if (rows) {
      setData(
        rows.filter(
          (_: unknown, index: number) =>
            index >= select * currentIndex - select &&
            index < select * currentIndex
        )
      );
    }
  }, [rows, select, currentIndex]);
  useEffect(() => {
    setCurrentIndex(1);
  }, [select]);

  return (
    <>
      <div className={style.Table}>
        <div className={style.Table__header}>
          {heading.map((prop) => (
            <div className={`${style.Table__header__heading}  ${!!prop.mobile && style.Table__header__heading__display}`}>
              <span className={style.Table__header__heading__content}>
                {prop.value}
              </span>
              <Filter className={style.Table__header__heading__icon} />
            </div>
          ))}
        </div>
        <div className={style.Table__row}>
          {!isLoading &&
            data?.map((data: any) => (
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
