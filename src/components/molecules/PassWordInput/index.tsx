import React, { ChangeEvent, FC, useRef } from 'react';

import style from './index.module.css';

interface IPassWordInput {
  placeholder: string;
  value: string;
  setValue: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  type: string;
  clearValue: () => void;
  error: boolean;
  errorMessage: string;
}

const PassWordInput: FC<IPassWordInput> = ({
  placeholder,
  value,
  setValue,
  type,
  error,
  errorMessage,
}) => {
  const inputEl = useRef<HTMLInputElement>(null);
  return (
    <div className={style.PassWordInput} data-testid="password-input-container">
      <div className={style.PassWordInput__container}>
        <input
          ref={inputEl}
          className={style.PassWordInput__container__input}
          {...{ value, placeholder, type }}
          onChange={setValue}
          data-testid="password-input"
        />
        <span
          onClick={() => {
            if (!value) return;
            if (inputEl.current) {
              inputEl.current.type = inputEl.current.type === type ? 'text' : 'password';
            }
          }}
          onKeyDown={() => {
            if (!value) return;
            if (inputEl.current) {
              inputEl.current.type = inputEl.current.type === type ? 'text' : 'password';
            }
          }}
          className={style.PassWordInput__container__show}
          role="button"
          tabIndex={0}
        >
          show
        </span>
      </div>
      {error && <p className={style.PassWordInput__error} data-testid="error-message">{errorMessage}</p>}
    </div>
  );
};

export default PassWordInput;
