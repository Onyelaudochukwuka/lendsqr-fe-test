import React, { FC } from "react";

interface IInput {
  placeholder: string;
  value: string;
  setValue: () => void;
  label: string;
  id: string;
  type: string;
}
const Input: FC<IInput> = ({
  placeholder,
  value,
  setValue,
  label,
  id,
  type,
}) => {
    return (
        <div>
            <label></label>
        </div>
    );
};

export default Input;
