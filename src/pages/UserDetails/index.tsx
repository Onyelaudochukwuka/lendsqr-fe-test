import React, { FC } from "react";
import { Link } from "react-router-dom";
import { LeftArrow } from "../../assets";
import { Layout, UserDetailSummary, UserInfo } from "../../components";
import style from "./index.module.css";
interface IUserDetails {}
const UserDetails: FC<IUserDetails> = () => {
  return (
    <Layout className={style.UserDetails}>
      <Link to={"/dashboard/users"}>
        <div className={style.UserDetails__back}>
          <LeftArrow className={style.UserDetails__back__icon} />{" "}
          <span className={style.UserDetails__back__text}>Back to Users</span>
        </div>
      </Link>
          <div className={style.UserDetails__container}>
              <h2 className={style.UserDetails__container__heading}>User Details</h2>
        <div className={style.UserDetails__container__buttons}>
          <button className={`${style.UserDetails__container__buttons__button} ${style.UserDetails__container__buttons__button__blacklist}`}>Blacklist User</button>
          <button className={`${style.UserDetails__container__buttons__button} ${style.UserDetails__container__buttons__button__activate}`}>Activate User</button>
        </div>
          </div>
      <UserDetailSummary />
      <UserInfo />
    </Layout>
  );
};

export default UserDetails;
