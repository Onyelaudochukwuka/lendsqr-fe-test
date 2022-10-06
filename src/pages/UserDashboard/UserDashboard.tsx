import React, { FC } from "react"
import { Layout } from "../../components";
import style from "./index.module.css";
import { useGetUsersQuery } from "../../utils/redux/apiConnection";
interface IUserDashboard {

}
const UserDashboard: FC<IUserDashboard> = () => {
    return (
        <Layout className={style.UserDashboard}>
            <h2 className={style.UserDashboard__heading}>Users</h2>
            <div className={style.UserDashboard__cards}>
                
            </div>
        </Layout>

    );
}

export default UserDashboard;