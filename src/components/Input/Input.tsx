import React, { ChangeEvent, FC } from "react";
import style from "./index.module.css";
interface IInput {
  placeholder: string;
  value: string;
  setValue: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  type: string;
  clearValue: () => void;
}
const Input: FC<IInput> = ({
  placeholder,
  value,
  setValue,
  type,
  clearValue,
}) => {
  return (
    <div>
      <input className={style.Input} {...{ placeholder, value, type }} onChange={setValue} />
    </div>
  );
};

export default Input;
