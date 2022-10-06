import React, { FC } from "react"
import { DashboardUsers } from "../../assets";
import style from "./index.module.css";
interface IUsersStats {

}
const UsersStats: FC<IUsersStats> = () => {
    return (
        <div className={style.UsersStats}>
            <DashboardUsers className={style.UsersStats__icon} />
            
            
            
        </div>

    );
}

export default UsersStats;