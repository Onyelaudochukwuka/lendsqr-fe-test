import React, { FC } from "react"
import style from "./index.module.css";
interface IUserDetails {

}
const UserDetails: FC<IUserDetails> = () => {
    return (
        <div className={style.UserDetails}>
            UserDetails
        </div>

    );
}

export default UserDetails;