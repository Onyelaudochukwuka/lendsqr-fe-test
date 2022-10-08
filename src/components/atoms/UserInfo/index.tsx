import React, { FC } from "react"
import style from "./index.module.css";
interface IUserInfo {

}
const UserInfo: FC<IUserInfo> = () => {
    return (
        <div className={style.UserInfo}>
            UserInfo
        </div>

    );
}

export default UserInfo;