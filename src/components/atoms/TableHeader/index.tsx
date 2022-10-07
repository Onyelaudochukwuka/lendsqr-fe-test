import React, { FC, useState } from "react";
import { Filter } from "../../../assets";
import { SelectInput } from "../../";
import style from "./index.module.css";
interface ITableHeader {
  orgNames: string[];
}
interface Heading {
  value: string;
  mobile?: boolean;
}
const heading: Required<Heading[]> = [
  {
    value: "Organization",
  },
  {
    value: "Username",
    mobile: true,
  },
  {
    value: "Email",
  },

  {
    value: "Phone Number",
  },
  {
    value: "Date Joined",
    mobile: true,
  },
  {
    value: "Status",
    mobile: true,
  },
];

const TableHeader: FC<ITableHeader> = ({ orgNames, ...props }) => {
  const [toggleFilter, setToggleFilter] = useState<boolean>(false);
  const [selectedOrg, setSelectedOrg] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  return (
    <div className={style.TableHeader}>
      <div className={style.TableHeader__heading}>
        {heading.map((prop) => (
          <div
            className={`${style.TableHeader__heading__container}  ${
              !!prop.mobile && style.TableHeader__heading__container__display
            }`}
          >
            <span className={style.TableHeader__heading__container__content}>
              {prop.value}
            </span>
            <Filter
              className={style.TableHeader__heading__container__icon}
              onClick={() => setToggleFilter((props) => !props)}
            />
          </div>
        ))}
      </div>
      {true && (
        <div className={style.TableHeader__filter}>
          <div className={style.TableHeader__filter__container}>
            <div className={style.TableHeader__filter__container__input}>
              <SelectInput
                {...{
                  selectedData: selectedOrg,
                  setSelectedData: setSelectedOrg,
                  data: [""],
                  label: "Organization",
                  placeholder: "Select",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableHeader;
