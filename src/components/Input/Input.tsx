import React, { ChangeEvent, FC } from "react";

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
      <input {...{ placeholder, value, type }} onChange={setValue} />
    </div>
  );
};

export default Input;
