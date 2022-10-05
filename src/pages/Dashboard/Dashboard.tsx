import React, { FC } from "react"
import style from "./index.module.css";
interface IDashboard {

}
const Dashboard: FC<IDashboard> = () => {
    return (
        <div className={style.Dashboard}>
            Dashboard
        </div>

    );
}

export default Dashboard;