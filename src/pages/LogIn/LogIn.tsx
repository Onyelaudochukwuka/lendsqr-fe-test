import React, { FC, useState } from "react";
import { loginIllustration, Logo } from "../../assets";
import { Input, PassWordInput } from "../../components";
import { useInput } from "../../utils/hooks";
import style from "./index.module.css";
interface ILogIn {}
const LogIn: FC<ILogIn> = () => {
  const [email, setEmail, clearEmail] = useInput("");
  const [password, setPassword, clearPassword] = useInput("");
  const [emailError, setEmailError] = useState(true);
  const [passWordError, setPassWordError] = useState(true);
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
        <div className={style.LogIn__right__form}>
          <Input
            {...{
              value: email,
              setValue: setEmail,
              clearValue: clearEmail,
              placeholder: "Email",
              type: "email",
              error: emailError,
              errorMessage: "Please enter a valid email",
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
          <span className={style.LogIn__right__form__forgot}>
            Forgot PASSWORD?
          </span>
          <button className={style.LogIn__right__form__button}>Login</button>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
