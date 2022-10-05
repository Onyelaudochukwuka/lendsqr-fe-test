import React, { FC } from "react"
import style from "./index.module.css";
interface ILoader {

}
const Loader: FC<ILoader> = () => {
    return (
        <div className={style.blockName}>
            Loader
        </div>

    );
}

export default Loader;