import React, { ChangeEvent, FC, useRef } from "react";
import style from "./index.module.css";
interface IPassWordInput {
  placeholder: string;
  value: string;
  setValue: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  type: string;
  clearValue: () => void;
}
const PassWordInput: FC<IPassWordInput> = ({
  placeholder,
  value,
  setValue,
  type,
  clearValue,
}) => {
  const inputEl = useRef<HTMLInputElement>(null);
  return (
    <div className={style.PassWordInput}>
      <input
        ref={inputEl}
        className={style.PassWordInput__input}
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
              className={style.PassWordInput__show}
      >
        show
      </span>
    </div>
  );
};

export default PassWordInput;
