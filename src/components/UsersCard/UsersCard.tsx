import React, { FC } from "react"
import style from "./index.module.css";
interface IUsersCard {

}
const UsersCard: FC<IUsersCard> = () => {
    return (
        <div className={style.UsersCard}>
            UsersCard
        </div>

    );
}

export default UsersCard;