import React, { FC } from "react";
import { loginIllustration, Logo } from "../../assets";
import { Input, PassWordInput } from "../../components";
import { useInput } from "../../utils/hooks";
import style from "./index.module.css";
interface ILogIn {}
const LogIn: FC<ILogIn> = () => {
  const [email, setEmail, clearEmail] = useInput("");
  const [password, setPassword, clearPassword] = useInput("");
  return (
    <section className={style.LogIn}>
      <div className={style.LogIn__left}>
        <Logo className={style.LogIn__left__logo} />
        <img
          src={loginIllustration}
          className={style.LogIn__left__illustration}
        />
      </div>
      <div className={style.LogIn__right}>
        <h2 className={style.LogIn__right__heading}>Welcome!</h2>
        <p className={style.LogIn__right__details}>Enter details to login.</p>
        <Input
          {...{
            value: email,
            setValue: setEmail,
            clearValue: clearEmail,
            placeholder: "Email",
            type: "email",
          }}
        />
        <PassWordInput
          {...{
            value: password,
            setValue: setPassword,
            clearValue: clearPassword,
            placeholder: "Password",
            type: "password",
          }}
        />
      </div>
    </section>
  );
};

export default LogIn;
