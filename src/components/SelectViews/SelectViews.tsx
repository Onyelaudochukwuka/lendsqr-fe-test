import React, { FC } from "react"
import style from "./index.module.css";
interface ISelectViews {

}
const SelectViews: FC<ISelectViews> = () => {
    return (
        <div className={style.SelectViews}>
            SelectViews
        </div>

    );
}

export default SelectViews;