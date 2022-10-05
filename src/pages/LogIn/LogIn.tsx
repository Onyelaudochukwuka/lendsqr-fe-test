import React, { FC } from "react"
import style from "./index.module.css"
interface ILogIn {

}
const LogIn: FC<ILogIn> = () => {
    return (
        <section className={style.LogIn}>
            <div className={style.LogIn__left}>

            </div>
            <div className={style.LogIn__right}>
                
            </div>
        </section>

    );
}

export default LogIn;