import React, { FC } from 'react';

import { Layout } from '../../components';

import style from './index.module.css';

interface IUnavailable {}
const Unavailable: FC<IUnavailable> = () => (
  <Layout className={style.Unavailable}>
    <div className={style.Unavailable__container}>
      <h1 className={style.Unavailable__container__heading} data-testid="page-unavailable">
        This Page Is Currently Unavailable
      </h1>
      <p className={style.Unavailable__container__text}>
        Check in Later
      </p>
    </div>
  </Layout>
);

export default Unavailable;
