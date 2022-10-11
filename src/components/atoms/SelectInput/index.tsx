import React, {
  Dispatch,
  FC,
  SetStateAction,
  useState,
} from 'react';

import { OrgDropDown } from '../../../assets';

import style from './index.module.css';

interface ISelectInput {
  selectedData: string[];
  setSelectedData: Dispatch<SetStateAction<string[]>>;
  data: string[];
  label: string;
  placeholder: string;
  className?: string;
}
const SelectInput: FC<ISelectInput> = ({
  selectedData,
  data,
  label,
  placeholder,
  setSelectedData,
  className,
}) => {
  const [toggleDetails, setToggleDetails] = useState<boolean>(false);
  return (
    <div
      className={`${style.SelectInput} ${
        toggleDetails && style.SelectInput__active
      } ${className}`}
    >
      <div className={style.SelectInput__label} data-testid="label">{label}</div>
      <div
        className={style.SelectInput__content}
        onClick={() => setToggleDetails((prev: boolean) => !prev)}
        onKeyDown={() => setToggleDetails((prev: boolean) => !prev)}
        role="button"
        tabIndex={0}
        data-testid="input-container"
      >
        <span className={style.SelectInput__content__text}>
          {selectedData.length > 0
            ? selectedData.toLocaleString().replace(',', (val) => `${val} `)
            : placeholder}
        </span>
        <OrgDropDown
          className={`${style.SelectInput__content__icon} ${
            toggleDetails && style.SelectInput__content__icon__active
          }`}
          data-testid="icon"
        />
      </div>
      <div
        className={`${style.SelectInput__details} ${
          toggleDetails && style.SelectInput__details__active
        }`}
      >
        {data?.map((name) => (
          <div
            onClick={() => setSelectedData((prev) => (prev.includes(name)
              ? prev.filter((item) => item !== name)
              : [...prev, name]
            ))}
            onKeyDown={() => setSelectedData((prev) => (prev.includes(name)
              ? prev.filter((item) => item !== name)
              : [...prev, name]
            ))}
            className={`${style.SelectInput__details__container} ${
              selectedData.includes(name)
              && style.SelectInput__details__container__active
            }`}
            key={`selectInput-${name}`}
            role="button"
            tabIndex={0}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};
SelectInput.defaultProps = {
  className: '',
};
export default SelectInput;
