import React, { FC } from "react"
import { Filter } from "../../../assets";
import style from "./index.module.css";
interface ITableHeader { };
interface Heading {
    value: string;
    mobile?: boolean;
}
const heading: Required<Heading[]> = [
    {
        value: "Organization",
    },
    {
        value: "Username",
        mobile: true,
    },
    {
        value: "Email",
    },

    {
        value: "Phone Number",
    },
    {
        value: "Date Joined",
        mobile: true,
    },
    {
        value: "Status",
        mobile: true,
    },
];

const TableHeader: FC<ITableHeader> = (props) => {
    return (
        <div className={style.TableHeader}>
            {heading.map((prop) => (
                <div className={`${style.TableHeader__heading}  ${!!prop.mobile && style.TableHeader__heading__display}`}>
                    <span className={style.TableHeader__heading__content}>
                        {prop.value}
                    </span>
                    <Filter className={style.TableHeader__heading__icon} />
                </div>
            ))}
        </div>
    );
}

export default TableHeader;