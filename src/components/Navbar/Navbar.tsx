import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Logo, Notification } from "../../assets";
import { useInput } from "../../utils/hooks";
import Input from "../Input/Input";
import style from "./index.module.css";
interface INavbar {
  className: string;
}
const Navbar: FC<INavbar> = ({ className }) => {
  const [search, changeSearch, clearSearch] = useInput("");
  return (
    <div className={`${style.Navbar} ${className}`}>
      <Logo className={style.Navbar__logo} />
          <Input
            className={style.Navbar__search}
        {...{
          placeholder: "Search",
          type: "text",
          value: search,
          setValue: changeSearch,
          clearValue: clearSearch,
        }}
          />
          <div className={style.Navbar__info}>
              <Link to="/Dashboard" className={style.Navbar__info__docs}><span>Docs</span></Link>
              <Notification className={style.Navbar__info__notification} />
          </div>
    </div>
  );
};

export default Navbar;
