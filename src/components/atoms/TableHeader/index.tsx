import React, { FC, useEffect, useRef, useState } from "react";
import { Filter } from "../../../assets";
import { Input, SelectDate, SelectInput } from "../../";
import style from "./index.module.css";
import { useInput } from "../../../utils/hooks";
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
  const [userNameFilter, setUserNameFilter, clearNameFilter] = useInput<string>("");
  const [emailFilter, setEmailFilter, clearEmailFilter] = useInput<string>("");
  const [numberFilter, setNumberFilter, clearNumberFilter] = useInput<number>(0);
  const [dateFilter, setDateFilter, clearDateFilter] = useInput<string>("");
  const [detailsHeight, setDetailsHeight] = useState(0);
  const itemsEl = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setDetailsHeight(itemsEl.current?.scrollHeight ?? 0);
  }, [itemsEl]);
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
      
      <div
        ref={itemsEl}
        style={{ height: toggleFilter ? `${detailsHeight}px` : 0 }}
        className={`${style.TableHeader__filter} ${toggleFilter && style.TableHeader__filter__active}`}>
          <div className={style.TableHeader__filter__container}>
            <div className={style.TableHeader__filter__container__input}>
              <SelectInput
                {...{
                  selectedData: selectedOrg,
                  setSelectedData: setSelectedOrg,
                  data: orgNames,
                  label: "Organization",
                  placeholder: "Select",
                }}
            />
            
            <Input 
              {...{
                label: "Username",
                placeholder: "Username",
                value: String(userNameFilter),
                setValue: setUserNameFilter,
                clearValue: clearNameFilter,
                type: "text",
              }}
              className={style.TableHeader__filter__container__input__text}
            />
            <Input 
              {...{
                label: "Email",
                placeholder: "Email",
                value: String(emailFilter),
                setValue: setEmailFilter,
                clearValue: clearEmailFilter,
                type: "email",
              }}
              className={style.TableHeader__filter__container__input__text}
            />
            <Input 
              {...{
                label: "Phone Number",
                placeholder: "Phone Number",
                value: Number(numberFilter),
                setValue: setNumberFilter,
                clearValue: clearNumberFilter,
                type: "number",
              }}
              className={style.TableHeader__filter__container__input__text}
            />
            <SelectDate 
              {...{
                label: "Date",
                placeholder: "Date",
                value: String(dateFilter),
                setValue: setDateFilter,
                clearValue: clearDateFilter,
                type: "date",
              }}
              className={style.TableHeader__filter__container__input__text}
            />
            <SelectInput
              {...{
                selectedData: selectedOrg,
                setSelectedData: setSelectedOrg,
                data: ["Active", "Inactive", "Pending", "Blacklisted"],
                label: "Status",
                placeholder: "Select",
              }}
            />
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default TableHeader;
