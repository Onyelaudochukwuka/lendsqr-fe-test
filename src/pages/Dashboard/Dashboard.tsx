import React, { FC } from "react"
import { Layout } from "../../components";
import style from "./index.module.css";
interface IDashboard {

}
const Dashboard: FC<IDashboard> = () => {
    return (
        <Layout className={style.Dashboard}>
                Dashboard
        </Layout>

    );
}

export default Dashboard;