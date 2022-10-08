import React, { Dispatch, FC, SetStateAction } from "react";
import { avatar, Star, UnStar } from "../../../assets";
import { Navigation } from "../../../pages/UserDetails";
import { Response } from "../../../utils/redux/apiConnection";
import style from "./index.module.css";
interface IUserDetailSummary {
  data?: Response;
  navigation: Navigation[];
  setNavigation: Dispatch<SetStateAction<Navigation[]>>;
}

const UserDetailSummary: FC<IUserDetailSummary> = ({ data, navigation, setNavigation }) => {
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
              {data?.profile.firstName} {data?.profile.lastName}
            </p>
            <p
              className={
                style.UserDetailSummary__container__left__details__accountId
              }
            >
              {data?.accountNumber}
            </p>
          </div>
        </div>
        <div className={style.UserDetailSummary__container__divider}></div>
        <div className={style.UserDetailSummary__container__center}>
          <div>User’s Tier</div>
          <div className={style.UserDetailSummary__container__center__stars}>
            {[...Array(data?.tier).keys()].map((data) => (
              <Star
                className={style.UserDetailSummary__container__center__star}
              />
            ))}
            {[...Array(3 - (!!data?.tier ? data?.tier : 0)).keys()].map((data) => (
              <UnStar
                className={style.UserDetailSummary__container__center__star}
              />
            ))}
          </div>
        </div>
        <div className={style.UserDetailSummary__container__divider}></div>
        <div className={style.UserDetailSummary__container__right}>
          <p className={style.UserDetailSummary__container__right__amount}>
            {`${data?.profile.currency}${data?.accountBalance}`}
          </p>
          <p className={style.UserDetailSummary__container__right__bank}>
            {data?.profile.bvn}/Providus Bank
          </p>
        </div>
      </div>
      <div className={style.UserDetailSummary__navigation}>
        {navigation.map(({ text, active }) => (
          <div
            onClick={() =>
              setNavigation((prev) =>
                prev.map(({ text: textVal }) => ({
                  text: textVal,
                  active: textVal === text,
                }))
              )
            }
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
