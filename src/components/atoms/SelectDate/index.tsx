import React, {
  ChangeEvent,
  FC,
  useRef,
} from 'react';

import {
  DateIcon,
} from '../../../assets';

import style from './index.module.css';

interface ISelectDate {
  placeholder: string;
  value: string | number;
  setValue: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  type: string;
  clearValue: () => void;
  className?: string;
  label?: string;
}
const SelectDate: FC<ISelectDate> = ({
  placeholder,
  value,
  setValue,
  type,
  className,
  label,
}) => {
  const inputEl = useRef<HTMLInputElement>(null);
  return (
    <div className={`${style.SelectDate} ${className}`}>
      {!!label && <div className={style.SelectDate__label}>{label}</div>}
      <div className={style.SelectDate__container}>
        <input
          ref={inputEl}
          className={`${style.SelectDate__container__input} ${className}`}
          {...{ placeholder, value, type: value === '' ? 'text' : type }}
          onChange={setValue}
          onFocus={() => inputEl.current?.setAttribute('type', 'date')}
          data-testid="select-date"
        />
        { value === '' && <DateIcon className={style.SelectDate__container__icon} data-testid="date-icon" />}
      </div>
    </div>
  );
};
SelectDate.defaultProps = {
  className: '',
  label: '',
};
export default SelectDate;
