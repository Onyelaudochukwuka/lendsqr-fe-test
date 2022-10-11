import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';

import { SelectDate, SelectInput } from '..';
import { Input } from '../..';
import { Filter } from '../../../assets';
import { useInput } from '../../../utils/hooks';
import { FilteredQuery } from '../../molecules/Table';

import style from './index.module.css';

interface ITableHeader {
  orgNames: string[];
  setFilterQuery: Dispatch<SetStateAction<FilteredQuery>>;
}
interface Heading {
  value: string;
  mobile?: boolean;
}
const heading: Required<Heading[]> = [
  {
    value: 'Organization',
  },
  {
    value: 'Username',
    mobile: true,
  },
  {
    value: 'Email',
  },

  {
    value: 'Phone Number',
  },
  {
    value: 'Date Joined',
    mobile: true,
  },
  {
    value: 'Status',
    mobile: true,
  },
];

const TableHeader: FC<ITableHeader> = ({
  orgNames,
  setFilterQuery,
}) => {
  const [toggleFilter, setToggleFilter] = useState<boolean>(false);
  const [selectedOrg, setSelectedOrg] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [userNameFilter, setUserNameFilter, clearNameFilter] = useInput<string>('');
  const [emailFilter, setEmailFilter, clearEmailFilter] = useInput<string>('');
  const [numberFilter, setNumberFilter, clearNumberFilter] = useInput<number>(0);
  const [dateFilter, setDateFilter, clearDateFilter] = useInput<string>('');
  const [detailsHeight, setDetailsHeight] = useState(0);
  const itemsEl = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setDetailsHeight(itemsEl.current?.scrollHeight ?? 0);
  }, [itemsEl]);
  useEffect(() => {
    setFilterQuery({
      orgName: selectedOrg,
      userName: String(userNameFilter),
      email: String(emailFilter),
      phoneNumber: Number(numberFilter),
      createdAt: String(dateFilter),
      status: selectedStatus,
    });
  }, [
    selectedOrg,
    selectedStatus,
    userNameFilter,
    emailFilter,
    numberFilter,
    dateFilter,
    setFilterQuery,
  ]);
  return (
    <div className={style.TableHeader} data-testid="table-header-container">
      <div className={style.TableHeader__heading}>
        {heading.map((prop) => (
          <div
            className={`${style.TableHeader__heading__container}  ${
              !!prop.mobile && style.TableHeader__heading__container__display
            }`}
            key={`tableHeader-${prop.value}`}
            data-testid="table-heading"
          >
            <span className={style.TableHeader__heading__container__content}>
              {prop.value}
            </span>
            <Filter
              className={style.TableHeader__heading__container__icon}
              onClick={() => setToggleFilter((props) => !props)}
              data-testid="table-filter"
            />
          </div>
        ))}
      </div>

      <div
        ref={itemsEl}
        style={{ height: toggleFilter ? `${detailsHeight}px` : 0 }}
        className={`${style.TableHeader__filter} ${
          toggleFilter && style.TableHeader__filter__active
        }`}
        data-testid="table-filter-container"
      >
        <div className={style.TableHeader__filter__container}>
          <div className={style.TableHeader__filter__container__input}>
            <SelectInput
              {...{
                selectedData: selectedOrg,
                setSelectedData: setSelectedOrg,
                data: orgNames,
                label: 'Organization',
                placeholder: 'Select',
              }}
              className={style.TableHeader__filter__container__input__text}
            />
            <Input
              {...{
                label: 'Username',
                placeholder: 'Username',
                value: String(userNameFilter),
                setValue: setUserNameFilter,
                clearValue: clearNameFilter,
                type: 'text',
              }}
              className={`${style.TableHeader__filter__container__input__text} ${style.TableHeader__filter__container__input__display}`}
            />
            <Input
              {...{
                label: 'Email',
                placeholder: 'Email',
                value: String(emailFilter),
                setValue: setEmailFilter,
                clearValue: clearEmailFilter,
                type: 'email',
              }}
              className={style.TableHeader__filter__container__input__text}
            />
            <Input
              {...{
                label: 'Phone Number',
                placeholder: 'Phone Number',
                value: Number(numberFilter),
                setValue: setNumberFilter,
                clearValue: clearNumberFilter,
                type: 'number',
              }}
              className={style.TableHeader__filter__container__input__text}
            />
            <SelectDate
              {...{
                label: 'Date',
                placeholder: 'Date',
                value: String(dateFilter),
                setValue: setDateFilter,
                clearValue: clearDateFilter,
                type: 'date',
              }}
              className={`${style.TableHeader__filter__container__input__text} ${style.TableHeader__filter__container__input__text__display}`}
            />
            <SelectInput
              {...{
                selectedData: selectedStatus,
                setSelectedData: setSelectedStatus,
                data: ['Active', 'Inactive', 'Pending', 'Blacklisted'],
                label: 'Status',
                placeholder: 'Select',
              }}
              className={style.TableHeader__filter__container__input__display}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
