import React, { FC } from "react"
import style from "./index.module.css";
interface INavbar {

}
const Navbar: FC<INavbar> = () => {
    return (
        <div className={style.Navbar}>
            Navbar
        </div>

    );
}

export default Navbar;