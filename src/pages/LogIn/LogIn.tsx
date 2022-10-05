import React, { FC } from "react"
import style from "./index.module.css"
interface ILogIn {

}
const LogIn: FC<ILogIn> = () => {
    return (
        <section className={style.LogIn}>
            LogIn
        </section>

    );
}

export default LogIn;