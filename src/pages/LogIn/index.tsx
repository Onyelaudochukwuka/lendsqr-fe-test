import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginIllustration, Logo } from "../../assets";
import { Input, Loader, PassWordInput } from "../../components";
import { isEmail, isPassword } from "../../utils/functions";
import { useInput } from "../../utils/hooks";
import style from "./index.module.css";
const LogIn: FC = () => {
  const [email, setEmail, clearEmail] = useInput("");
  const [password, setPassword, clearPassword] = useInput("");
  const [emailError, setEmailError] = useState(false);
  const [passWordError, setPassWordError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (!isEmail(email) || !isPassword(password)) {
      if (!isEmail(email)) {
        setEmailError(true);
        setTimeout(() => {
          setEmailError(false);
        }, 3000);
      }
      if(!isPassword(password)) {
        setPassWordError(true);
        setTimeout(() => {
          setPassWordError(false);
        }, 3000);
      }
      return;
    }
   navigate("/dashboard/users")
  }
  return (
    <section className={style.LogIn}>
      <div className={style.LogIn__left}>
        <Logo className={style.LogIn__left__logo} />
        <img
          src={loginIllustration}
          className={style.LogIn__left__illustration}
          alt="SignIn illustration"
          role={"presentation"}
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
              errorMessage: "Please enter a valid email"
            }}
          />
          <PassWordInput
            {...{
              value: password,
              setValue: setPassword,
              clearValue: clearPassword,
              placeholder: "Password",
              type: "password",
              error: passWordError,
              errorMessage: "Please enter a password with an Uppercase, Lowercase, Number and a special character"
            }}
          />
          <span className={style.LogIn__right__form__forgot}>
            Forgot PASSWORD?
          </span>
          <button className={style.LogIn__right__form__button}
            onClick={handleSubmit}
          >Login</button>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
