import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

import moment from 'moment';
import { Link } from 'react-router-dom';

import {
  Activate,
  Blacklist,
  SideMenu,
  View,
} from '../../../assets';
import { ifCondition } from '../../../utils/functions';
import { STATUS } from '../../../utils/redux/apiConnection';

import style from './index.module.css';

interface ITableRow {
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  status: string;
  id: number;
  currentUserMenu: string;
  setCurrentUserMenu: Dispatch<SetStateAction<string>>;
  blackListed: string[];
  setBlacklisted: Dispatch<SetStateAction<string[]>>;
}
const TableRow: FC<ITableRow> = ({
  orgName,
  userName,
  email,
  phoneNumber,
  createdAt,
  status,
  id,
  currentUserMenu,
  setCurrentUserMenu,
  blackListed,
  setBlacklisted,
}) => {
  const [dropDown, setDropdown] = useState<boolean>(false);
  const [blacklist, setBlacklist] = useState<boolean>(false);
  useEffect(() => {
    if (blackListed.includes(userName)) {
      setBlacklist(true);
    } else {
      setBlacklist(false);
    }
  }, [blackListed, userName]);
  return (
    <div className={style.TableRow} data-testid="table-row-container">
      <div className={style.TableRow__elements} data-testid="org-name">{orgName}</div>
      <div
        className={`${style.TableRow__elements} ${style.TableRow__elements__display}`}
      >
        <Link to={`/dashboard/users/${id}`} data-testid="user-name">{userName}</Link>
      </div>
      <div className={style.TableRow__elements} data-testid="email">{email}</div>
      <div className={style.TableRow__elements} data-testid="phone-number">{phoneNumber}</div>
      <div
        className={`${style.TableRow__elements} ${style.TableRow__elements__display}`}
        data-testid="created-at"
      >
        {moment(createdAt).format('MMMM D YYYY, h:mm:ss A')}
      </div>
      <div
        className={`${style.TableRow__container} ${style.TableRow__elements} ${style.TableRow__elements__display} `}
        data-testid="status"
      >
        <span
          className={`${style.TableRow__container__status} ${
            style.TableRow__container__status__display
          } ${
            blacklist
              ? style.TableRow__container__status__blacklisted
              : ifCondition(
                status === STATUS.active,
                style.TableRow__container__status__active,
                ifCondition(
                  status === STATUS.inactive,
                  style.TableRow__container__status__inactive,
                  '',
                ),
              )}`}
        >
          {blacklist ? 'blacklisted' : status}
        </span>
      </div>
      <span
        className={style.TableRow__menu}
        onClick={() => {
          setDropdown((prev) => !prev);
          setCurrentUserMenu(userName);
        }}
        onKeyDown={() => {
          setDropdown((prev) => !prev);
          setCurrentUserMenu(userName);
        }}
        onBlur={() => setDropdown(false)}
        role="button"
        tabIndex={0}
        data-testid="menu"
      >
        <SideMenu className={style.TableRow__menu__icon} />
      </span>
      <div
        onClick={() => setDropdown(true)}
        onKeyDown={() => setDropdown(true)}
        className={`${style.TableRow__dropdown} ${
          dropDown
        && currentUserMenu === userName
        && style.TableRow__dropdown__active
        }`}
        role="button"
        tabIndex={0}
        data-testid="dropdown"
      >
        <Link
          to={`/dashboard/users/${id}`}
          className={style.TableRow__dropdown__item}
          data-testid="view"
        >
          <View className={style.TableRow__dropdown__item__icon} />
          {' '}
          <span>View Details</span>
        </Link>
        <div
          className={style.TableRow__dropdown__item}
          onClick={() => setBlacklisted((prev) => [...prev, userName])}
          onKeyDown={() => setBlacklisted((prev) => [...prev, userName])}
          role="button"
          tabIndex={0}
          data-testid="blacklist"
        >
          <Blacklist className={style.TableRow__dropdown__item__icon} />
          {' '}
          <span>Blacklist User</span>
        </div>
        <div
          className={style.TableRow__dropdown__item}
          onClick={() => setBlacklisted((prev) => prev.filter((val) => val !== userName))}
          onKeyDown={() => setBlacklisted((prev) => prev.filter((val) => val !== userName))}
          role="button"
          tabIndex={0}
          data-testid="activate"
        >
          <Activate className={style.TableRow__dropdown__item__icon} />
          {' '}
          <span>Activate User</span>
        </div>
      </div>
    </div>
  );
};

export default TableRow;
