import React, { FC } from "react"
import style from "./index.module.css";
interface ISidebar {
    className: string;
}
const Sidebar: FC<ISidebar> = ({className}) => {
    return (
        <div className={`${style.Sidebar} ${className}`}>
            SideMenu
        </div>

    );
}

export default Sidebar;