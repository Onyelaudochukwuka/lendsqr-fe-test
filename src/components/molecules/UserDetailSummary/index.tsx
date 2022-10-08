import React, { FC, useState } from "react";
import { avatar, Star, UnStar } from "../../../assets";
import style from "./index.module.css";
interface IUserDetailSummary {}
interface Navigation {
  text: string;
  active: boolean;
}
const UserDetailSummary: FC<IUserDetailSummary> = () => {
    const [navigation, setNavigation] = useState<Navigation[]>([
        {
            text: "General Details",
            active: true,
        },
        {
            text: "Documents",
            active: false
        },
        {
            text: "Bank Details",
            active: false
        },
        {
            text: "Savings",
            active: false
        },
        {
            text: "App and System",
            active: false
        },
    ])
  let tier = 1;
  return (
    <div className={style.UserDetailSummary}>
      <div className={style.UserDetailSummary__container}>
        <div className={style.UserDetailSummary__container__left}>
          <img
            src={avatar}
            alt="user"
            className={style.UserDetailSummary__container__left__image}
          />
          <div className={style.UserDetailSummary__container__left__details}>
            <p
              className={
                style.UserDetailSummary__container__left__details__name
              }
            >
              Grace Effiom
            </p>
            <p
              className={
                style.UserDetailSummary__container__left__details__accountId
              }
            >
              LSQFf587g90
            </p>
          </div>
        </div>
        <div className={style.UserDetailSummary__container__divider}></div>
        <div className={style.UserDetailSummary__container__center}>
          <div>User’s Tier</div>
          <div className={style.UserDetailSummary__container__center__stars}>
            {[...Array(tier).keys()].map((data) => (
              <Star
                className={style.UserDetailSummary__container__center__star}
              />
            ))}
            {[...Array(3 - tier).keys()].map((data) => (
              <UnStar
                className={style.UserDetailSummary__container__center__star}
              />
            ))}
          </div>
        </div>
        <div className={style.UserDetailSummary__container__divider}></div>
        <div className={style.UserDetailSummary__container__right}>
          <p className={style.UserDetailSummary__container__right__amount}>
            ₦200,000.00
          </p>
          <p className={style.UserDetailSummary__container__right__bank}>
            9912345678/Providus Bank
          </p>
        </div>
      </div>
      <div className={style.UserDetailSummary__navigation}>
        {navigation.map(({ text, active }) => (
            <div
                onClick={() => setNavigation(prev => prev.map(({ text: textVal }) => ({
                    text: textVal,
                    active: textVal === text
                }))) }
            className={`${style.UserDetailSummary__navigation__elem} ${
              active && style.UserDetailSummary__navigation__elem__active
            }`}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDetailSummary;
