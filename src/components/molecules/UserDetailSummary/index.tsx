import React, { FC } from "react"
import style from "./index.module.css";
interface IUserDetailSummary {

}
const UserDetailSummary: FC<IUserDetailSummary> = () => {
    return (
        <div className={style.UserDetailSummary}>
            UserDetailSummary
        </div>

    );
}

export default UserDetailSummary;