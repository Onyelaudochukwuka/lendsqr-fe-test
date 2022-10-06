import React, { FC } from "react"
import { Layout } from "../../components";
import style from "./index.module.css";
interface IUserDashboard {

}
const UserDashboard: FC<IUserDashboard> = () => {
    return (
        <Layout className={style.UserDashboard}>
                Dashboard
        </Layout>

    );
}

export default UserDashboard;