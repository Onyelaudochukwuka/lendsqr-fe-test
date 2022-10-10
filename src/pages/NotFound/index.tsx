/* eslint-disable */
import React, { FC } from 'react';
import { Link } from "react-router-dom";
import { Notfound } from "../../assets";
import style from './index.module.css';
interface INotFound { }
const NotFound: FC<INotFound> = () => {
    return <div className={style.NotFound}>
        <Notfound className={style.NotFound__illustration} />
        <p className={style.NotFound__details} data-testid="page-not-found">Opps! Page Not Found</p>
        <Link to="/dashboard" className={style.NotFound__button}>Back To Home</Link>
    </div>;
};

export default NotFound;
