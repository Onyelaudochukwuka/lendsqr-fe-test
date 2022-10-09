import React, {
  Dispatch,
  FC,
  SetStateAction,
  useState,
} from 'react';

import { avatar, Star, UnStar } from '../../../assets';
import { Navigation } from '../../../pages/UserDetails';
import { Response } from '../../../utils/redux/apiConnection';

import style from './index.module.css';

interface IUserDetailSummary {
  data?: Response;
  navigation: Navigation[];
  setNavigation: Dispatch<SetStateAction<Navigation[]>>;
}

const UserDetailSummary: FC<IUserDetailSummary> = ({
  data,
  navigation,
  setNavigation,
}) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={style.UserDetailSummary}>
      <div className={style.UserDetailSummary__container}>
        <div className={style.UserDetailSummary__container__left}>
          {!loaded && (
            <img
              src={avatar}
              alt="avatar"
              className={style.UserDetailSummary__container__left__image}
            />
          )}
          <img
            src={data?.profile.avatar || avatar}
            alt="user"
            onLoad={() => setLoaded(true)}
            className={style.UserDetailSummary__container__left__image}
          />
          <div className={style.UserDetailSummary__container__left__details}>
            <p
              className={
                style.UserDetailSummary__container__left__details__name
              }
            >
              {`${data?.profile.firstName} ${data?.profile.lastName}`}
            </p>
            <p
              className={
                style.UserDetailSummary__container__left__details__accountId
              }
            >
              {data?.accountNumber}
            </p>
          </div>
        </div>
        <div className={style.UserDetailSummary__container__divider} />
        <div className={style.UserDetailSummary__container__center}>
          <div>User’s Tier</div>
          <div className={style.UserDetailSummary__container__center__stars}>
            {[...Array(data?.tier).keys()].map(() => (
              <Star
                className={style.UserDetailSummary__container__center__star}
              />
            ))}
            {[...Array(3 - (data?.tier ? data.tier : 0)).keys()].map(
              () => (
                <UnStar
                  className={style.UserDetailSummary__container__center__star}
                />
              ),
            )}
          </div>
        </div>
        <div className={style.UserDetailSummary__container__divider} />
        <div className={style.UserDetailSummary__container__right}>
          <p className={style.UserDetailSummary__container__right__amount}>
            {`${data?.profile.currency}${data?.accountBalance}`}
          </p>
          <p className={style.UserDetailSummary__container__right__bank}>
            {data?.profile.bvn}
            /Providus Bank
          </p>
        </div>
      </div>
      <div className={style.UserDetailSummary__navigation}>
        {navigation.map(({ text, active }) => (
          <div
            onClick={() => setNavigation((prev) => prev.map(({ text: textVal }) => ({
              text: textVal,
              active: textVal === text,
            })))}
            onKeyDown={() => setNavigation((prev) => prev.map(({ text: textVal }) => ({
              text: textVal,
              active: textVal === text,
            })))}
            className={`${style.UserDetailSummary__navigation__elem} ${
              active && style.UserDetailSummary__navigation__elem__active
            }`}
            role="button"
            tabIndex={0}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};
UserDetailSummary.defaultProps = {
  data: undefined,
};
export default UserDetailSummary;
