import React, { FC } from "react"
import style from "./index.module.css";
interface ITable {

}
const Table: FC<ITable> = () => {
    return (
        <div className={style.Table}>
            Table
        </div>

    );
}

export default Table;