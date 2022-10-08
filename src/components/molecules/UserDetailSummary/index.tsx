import React, { FC } from "react";
import { avatar } from "../../../assets";
import style from "./index.module.css";
interface IUserDetailSummary {}
const UserDetailSummary: FC<IUserDetailSummary> = () => {
  return (
    <div className={style.UserDetailSummary}>
      <div className={style.UserDetailSummary__container}>
              <div className={style.UserDetailSummary__container__left}>
                  
          <img
            src={avatar}
            alt="user"
            className={style.UserDetailSummary__container__left__image}
                  />
                  <div
                  className={style.UserDetailSummary__container__left__details}
                  >
                      <div className={style.UserDetailSummary__container__left__details__name}>Grace Effiom</div>
                      <div className={style.UserDetailSummary__container__left__details__accountId}>LSQFf587g90</div>

                  </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailSummary;
