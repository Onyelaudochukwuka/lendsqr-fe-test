import React, { FC } from "react"
import style from "./index.module.css";
interface ILayout {

}
const Layout: FC<ILayout> = () => {
    return (
        <div className={style.Layout}>
            Layout
        </div>

    );
}

export default Layout;