import React, { FC } from "react";
import { Link } from "react-router-dom";
import { DropDown, Logo, Notification, Search, userImage } from "../../../assets";
import { useInput } from "../../../utils/hooks";
import Input from "../Input";
import style from "./index.module.css";
interface INavbar {
  className: string;
}
const Navbar: FC<INavbar> = ({ className }) => {
  const [search, changeSearch, clearSearch] = useInput("");
  return (
    <div className={`${style.Navbar} ${className}`}>
      <div className={style.Navbar__left}>
        <Logo className={style.Navbar__left__logo} />
        <div className={style.Navbar__left__search}>
        <Input
          className={style.Navbar__left__search__input}
          {...{
            placeholder: "Search",
            type: "text",
            value: search,
            setValue: changeSearch,
            clearValue: clearSearch,
          }}
          />
          <div className={style.Navbar__left__search__searchbar}><Search className={style.Navbar__left__search__searchbar__icon} /></div>
          </div>
      </div>
      <div className={style.Navbar__right}>
        <Link to="/Dashboard" className={style.Navbar__right__docs}>
          <span>Docs</span>
        </Link>
        <Notification className={style.Navbar__right__notification} />
        <div className={style.Navbar__right__user}>
          <img
            src={userImage}
            alt="userImage"
            className={style.Navbar__right__user__avatar}
          />
          <span className={style.Navbar__right__user__info}>
            <p className={style.Navbar__right__user__info__name}>Adedeji</p>
            <DropDown className={style.Navbar__right__user__info__icon} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;