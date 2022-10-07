import React, { Dispatch, FC, SetStateAction } from "react";
import { OrgDropDown } from "../../../assets";
import style from "./index.module.css";
interface ISelectInput {
    selectedData: string[];
    setSelectedData: Dispatch<SetStateAction<string[]>>;
    data: string[];
    label: string;
    placeholder: string;
}
const SelectInput: FC<ISelectInput> = ({ selectedData, data, label, placeholder, setSelectedData }) => {
    return (
        <div className={style.SelectInput}>
            <div className={style.SelectInput__label}> Organization </div>
            <div className={style.SelectInput__content}>
                <span className={style.SelectInput__text}>{selectedData.length > 0 ? selectedData.toLocaleString().replace(",", (val) => `${val} `) : placeholder}</span>
                <OrgDropDown className={style.SelectInput__icon} />
            </div>
            <div className={style.SelectInput__details}>
                {[
                    "All",
                    "Active",
                    "Inactive",
                    "All",
                    "Active",
                    "Inactive",
                    "All",
                    "Active",
                    "Inactive",
                    "All",
                    "Active",
                    "Inactive",
                ].map((prop) => (
                    <div
                        className={`${style.SelectInput__details__container} ${style.SelectInput__details__container__active}`}
                    >
                        {prop}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SelectInput;
