import React, { ChangeEvent, FC, useRef } from "react";
import style from "./index.module.css";
interface IPassWordInput {
  placeholder: string
  value: string
  setValue: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  type: string
  clearValue: () => void
  error: boolean
  errorMessage: string
}

const PassWordInput: FC<IPassWordInput> = ({
  placeholder,
  value,
  setValue,
  type,
  clearValue,
  error,
  errorMessage
}) => {
  const inputEl = useRef<HTMLInputElement>(null);
  return (
    <div className={style.PassWordInput}>
    <div className={style.PassWordInput__container}>
      <input
        ref={inputEl}
          className={style.PassWordInput__container__input}
        {...{ placeholder, value, type }}
        onChange={setValue}
      />
      <span
        onClick={() => {
          if (inputEl.current) {
            inputEl.current.type =
              inputEl.current.type === type ? "text" : "password";
          }
              }}
          className={style.PassWordInput__container__show}
      >
        show
      </span>
    </div>
      {error && <p className={style.PassWordInput__error}>{errorMessage}</p>}
    </div>
  );
};

export default PassWordInput;
