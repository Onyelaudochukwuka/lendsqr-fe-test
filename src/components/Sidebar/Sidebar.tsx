import React, { FC } from "react"
import { SideBarLink } from "../";
import { BriefCase } from "../../assets";
import style from "./index.module.css";
interface ISidebar {
    className: string;
}
const Sidebar: FC<ISidebar> = ({className}) => {
    return (
        <div className={`${style.Sidebar} ${className}`}>
            <div className={style.Sidebar__switch}><BriefCase className={style.Sidebar__switch_icon} />  <span>Switch Organization</span>  </div>
        </div>

    );
}

export default Sidebar;