import React, { ChangeEvent, FC } from "react";
import style from "./index.module.css";
interface IInput {
  placeholder: string;
  value: string;
  setValue: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  type: string;
  clearValue: () => void;
  error: boolean;
  errorMessage: string;
}
const Input: FC<IInput> = ({
  placeholder,
  value,
  setValue,
  type,
    clearValue,
    error,
    errorMessage
}) => {
  return (
    <div className={style.Input}>
      <input
        className={style.Input__input}
        {...{ placeholder, value, type }}
        onChange={setValue}
          />
          {error && <p className={style.Input__error}>{errorMessage}</p>}
    </div>
  );
};

export default Input;
