import React, { FC } from "react"
import style from "./index.module.css";
interface INavbar {
 className: string;
}
const Navbar: FC<INavbar> = ({className}) => {
    return (
        <div className={`${style.Navbar} ${className}`}>
            Navbar
        </div>

    );
}

export default Navbar;