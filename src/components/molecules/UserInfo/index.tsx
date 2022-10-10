import React, { FC } from 'react';

import { Response } from '../../../utils/redux/apiConnection';

import style from './index.module.css';

interface IUserInfo {
  data?: Response;
}
const UserInfo: FC<IUserInfo> = ({ data }) => (
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
          <span className={style.UserInfo__details__container__item__value} data-testid="user-first-name">
            {data?.profile.firstName}
          </span>
        </div>
        <div className={style.UserInfo__details__container__item}>
          <span className={style.UserInfo__details__container__item__label}>
            Phone Number
          </span>
          <span className={style.UserInfo__details__container__item__value} data-testid="user-phone-number">
            {data?.phoneNumber}
          </span>
        </div>
        <div className={style.UserInfo__details__container__item}>
          <span className={style.UserInfo__details__container__item__label}>
            Email Address
          </span>
          <span className={style.UserInfo__details__container__item__value} data-testid="user-email">
            {data?.email}
          </span>
        </div>
        <div className={style.UserInfo__details__container__item}>
          <span className={style.UserInfo__details__container__item__label}>
            Bvn
          </span>
          <span className={style.UserInfo__details__container__item__value} data-testid="user-bvn">
            {data?.profile.bvn}
          </span>
        </div>
        <div className={style.UserInfo__details__container__item}>
          <span className={style.UserInfo__details__container__item__label}>
            Gender
          </span>
          <span className={style.UserInfo__details__container__item__value} data-testid="user-gender">
            {data?.profile.gender}
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
          <span className={style.UserInfo__details__container__item__value} data-testid="user-loan">
            {`${data?.profile.currency}${data?.education.loanRepayment}`}
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
          <span className={style.UserInfo__details__container__item__value} data-testid="user-education-level">
            {data?.education.level}
          </span>
        </div>
        <div
          className={`${style.UserInfo__details__container__item} ${style.UserInfo__details__container__item__edu}`}
        >
          <span className={style.UserInfo__details__container__item__label}>
            employment status
          </span>
          <span className={style.UserInfo__details__container__item__value} data-testid="user-employment-status">
            {data?.education.employmentStatus}
          </span>
        </div>
        <div
          className={`${style.UserInfo__details__container__item} ${style.UserInfo__details__container__item__edu}`}
        >
          <span className={style.UserInfo__details__container__item__label}>
            sector of employment
          </span>
          <span className={style.UserInfo__details__container__item__value} data-testid="user-sector">
            {data?.education.sector}
          </span>
        </div>
        <div
          className={`${style.UserInfo__details__container__item} ${style.UserInfo__details__container__item__edu}`}
        >
          <span className={style.UserInfo__details__container__item__label}>
            Duration of employment
          </span>
          <span className={style.UserInfo__details__container__item__value} data-testid="user-employment-duration">
            {data?.education.duration}
          </span>
        </div>
        <div
          className={`${style.UserInfo__details__container__item} ${style.UserInfo__details__container__item__edu}`}
        >
          <span className={style.UserInfo__details__container__item__label}>
            office email
          </span>
          <span className={style.UserInfo__details__container__item__value} data-testid="user-education-official-email">
            {data?.education.officeEmail}
          </span>
        </div>
        <div
          className={`${style.UserInfo__details__container__item} ${style.UserInfo__details__container__item__edu}`}
        >
          <span className={style.UserInfo__details__container__item__label}>
            Monthly income
          </span>
          <span className={style.UserInfo__details__container__item__value} data-testid="user-education-monthly-income">
            {`${data?.profile.currency}${data?.education.monthlyIncome[1]} - ${data?.profile.currency}${data?.education.monthlyIncome[0]}`}
          </span>
        </div>
        <div
          className={`${style.UserInfo__details__container__item} ${style.UserInfo__details__container__item__edu}`}
        >
          <span className={style.UserInfo__details__container__item__label}>
            loan repayment
          </span>
          <span className={style.UserInfo__details__container__item__value} data-testid="user-education-loan">
            {`${data?.profile.currency}${data?.education.loanRepayment}`}
          </span>
        </div>
      </div>
    </div>
    <div className={style.UserInfo__details}>
      <div className={style.UserInfo__details__heading}>Socials</div>
      <div className={style.UserInfo__details__container}>
        <div className={style.UserInfo__details__container__item}>
          <span className={style.UserInfo__details__container__item__label}>
            Twitter
          </span>
          <span className={style.UserInfo__details__container__item__value} data-testid="user-twitter">
            {data?.socials.twitter}
          </span>
        </div>
        <div className={style.UserInfo__details__container__item}>
          <span className={style.UserInfo__details__container__item__label}>
            Facebook
          </span>
          <span className={style.UserInfo__details__container__item__value} data-testid="user-facebook">
            {data?.socials.facebook}
          </span>
        </div>
        <div className={style.UserInfo__details__container__item}>
          <span className={style.UserInfo__details__container__item__label}>
            Instagram
          </span>
          <span className={style.UserInfo__details__container__item__value} data-testid="user-instagram">
            {data?.socials.instagram}
          </span>
        </div>
      </div>
    </div>
    <div className={style.UserInfo__details}>
      <div className={style.UserInfo__details__heading}>Guarantor</div>
      <div className={style.UserInfo__details__container}>
        <div className={style.UserInfo__details__container__item}>
          <span className={style.UserInfo__details__container__item__label}>
            full Name
          </span>
          <span className={style.UserInfo__details__container__item__value} data-testid="guarantor-name">
            {`${data?.guarantor.firstName} ${data?.guarantor.lastName}`}
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
          <span className={style.UserInfo__details__container__item__value} data-testid="guarantor-email">
            {data?.guarantor.address}
          </span>
        </div>
        <div className={style.UserInfo__details__container__item}>
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
UserInfo.defaultProps = {
  data: undefined,
};
export default UserInfo;
