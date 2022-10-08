import React, { FC } from "react";
import style from "./index.module.css";
interface IUserInfo {}
const UserInfo: FC<IUserInfo> = () => {
  return (
    <div className={style.UserInfo}>
      <div className={style.UserInfo__details}>
        <div className={style.UserInfo__details__heading}>
          Personal Information
        </div>
        <div className={style.UserInfo__details__container}>
          <div className={style.UserInfo__details__container__item}>
            <span className={style.UserInfo__details__container__item__label}>
              First Name
            </span>
            <span className={style.UserInfo__details__container__item__value}>
              John
            </span>
          </div>
          <div className={style.UserInfo__details__container__item}>
            <span className={style.UserInfo__details__container__item__label}>
              Phone Number
            </span>
            <span className={style.UserInfo__details__container__item__value}>
              07060780922
            </span>
          </div>
          <div className={style.UserInfo__details__container__item}>
            <span className={style.UserInfo__details__container__item__label}>
              Email Address
            </span>
            <span className={style.UserInfo__details__container__item__value}>
              grace@gmail.com
            </span>
          </div>
          <div className={style.UserInfo__details__container__item}>
            <span className={style.UserInfo__details__container__item__label}>
              Bvn
            </span>
            <span className={style.UserInfo__details__container__item__value}>
              07060780922
            </span>
          </div>
          <div className={style.UserInfo__details__container__item}>
            <span className={style.UserInfo__details__container__item__label}>
              Gender
            </span>
            <span className={style.UserInfo__details__container__item__value}>
              Female
            </span>
          </div>
          <div className={style.UserInfo__details__container__item}>
            <span className={style.UserInfo__details__container__item__label}>
              Marital status
            </span>
            <span className={style.UserInfo__details__container__item__value}>
              Single
            </span>
          </div>
          <div className={style.UserInfo__details__container__item}>
            <span className={style.UserInfo__details__container__item__label}>
              loan repayment
            </span>
            <span className={style.UserInfo__details__container__item__value}>
              40,000
            </span>
          </div>
          <div className={style.UserInfo__details__container__item}>
            <span className={style.UserInfo__details__container__item__label}>
              Type of residence
            </span>
            <span className={style.UserInfo__details__container__item__value}>
              Parent’s Apartment
            </span>
          </div>
        </div>
      </div>
      <div className={style.UserInfo__details}>
        <div className={style.UserInfo__details__heading}>
          Education and Employment
        </div>
        <div className={style.UserInfo__details__container}>
          <div
            className={`${style.UserInfo__details__container__item} ${style.UserInfo__details__container__item__edu}`}
          >
            <span className={style.UserInfo__details__container__item__label}>
              level of education
            </span>
            <span className={style.UserInfo__details__container__item__value}>
              B.Sc
            </span>
          </div>
          <div
            className={`${style.UserInfo__details__container__item} ${style.UserInfo__details__container__item__edu}`}
          >
            <span className={style.UserInfo__details__container__item__label}>
              employment status
            </span>
            <span className={style.UserInfo__details__container__item__value}>
              Employed
            </span>
          </div>
          <div
            className={`${style.UserInfo__details__container__item} ${style.UserInfo__details__container__item__edu}`}
          >
            <span className={style.UserInfo__details__container__item__label}>
              sector of employment
            </span>
            <span className={style.UserInfo__details__container__item__value}>
              FinTech
            </span>
          </div>
          <div
            className={`${style.UserInfo__details__container__item} ${style.UserInfo__details__container__item__edu}`}
          >
            <span className={style.UserInfo__details__container__item__label}>
              Duration of employment
            </span>
            <span className={style.UserInfo__details__container__item__value}>
              2 years
            </span>
          </div>
          <div
            className={`${style.UserInfo__details__container__item} ${style.UserInfo__details__container__item__edu}`}
          >
            <span className={style.UserInfo__details__container__item__label}>
              office email
            </span>
            <span className={style.UserInfo__details__container__item__value}>
              grace@lendsqr.com
            </span>
          </div>
          <div
            className={`${style.UserInfo__details__container__item} ${style.UserInfo__details__container__item__edu}`}
          >
            <span className={style.UserInfo__details__container__item__label}>
              Monthly income
            </span>
            <span className={style.UserInfo__details__container__item__value}>
              ₦200,000.00- ₦400,000.00
            </span>
          </div>
          <div
            className={`${style.UserInfo__details__container__item} ${style.UserInfo__details__container__item__edu}`}
          >
            <span className={style.UserInfo__details__container__item__label}>
              loan repayment
            </span>
            <span className={style.UserInfo__details__container__item__value}>
              40,000
            </span>
          </div>
        </div>
      </div>
      <div className={style.UserInfo__details}>
        <div className={style.UserInfo__details__heading}>Socials</div>
        <div className={style.UserInfo__details__container}>
          <div
            className={style.UserInfo__details__container__item}
          >
            <span className={style.UserInfo__details__container__item__label}>
              Twitter
            </span>
            <span className={style.UserInfo__details__container__item__value}>
              @grace_effiom
            </span>
          </div>
          <div
            className={style.UserInfo__details__container__item}
          >
            <span className={style.UserInfo__details__container__item__label}>
              Facebook
            </span>
            <span className={style.UserInfo__details__container__item__value}>
              Grace Effiom
            </span>
          </div>
          <div
            className={style.UserInfo__details__container__item}
          >
            <span className={style.UserInfo__details__container__item__label}>
              Instagram
            </span>
            <span className={style.UserInfo__details__container__item__value}>
              @grace_effiom
            </span>
          </div>
        </div>
      </div>
      <div className={style.UserInfo__details}>
        <div className={style.UserInfo__details__heading}>Guarantor</div>
        <div className={style.UserInfo__details__container}>
          <div
            className={style.UserInfo__details__container__item}
          >
            <span className={style.UserInfo__details__container__item__label}>
              full Name
            </span>
            <span className={style.UserInfo__details__container__item__value}>
              Debby Ogana
            </span>
          </div>
          <div
            className={style.UserInfo__details__container__item}
          >
            <span className={style.UserInfo__details__container__item__label}>
              Phone Number
            </span>
            <span className={style.UserInfo__details__container__item__value}>
              07060780922
            </span>
          </div>
          <div
            className={style.UserInfo__details__container__item}
          >
            <span className={style.UserInfo__details__container__item__label}>
              Email Address
            </span>
            <span className={style.UserInfo__details__container__item__value}>
              debby@gmail.com
            </span>
          </div>
          <div
            className={style.UserInfo__details__container__item}
          >
            <span className={style.UserInfo__details__container__item__label}>
              Relationship
            </span>
            <span className={style.UserInfo__details__container__item__value}>
              Sister
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
