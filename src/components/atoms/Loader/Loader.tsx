import React, { FC } from "react";
import { Loading } from "../../../assets";
import style from "./index.module.css";
interface ILoader {}
const Loader: FC<ILoader> = () => {
  return <Loading className={style.Loader} />;
};

export default Loader;
