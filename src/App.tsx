import React, { FC, Fragment, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Login } from "./pages";
const App: FC = () => {
  return (
    <Fragment>
      <MoveToTop />
      <Routes>
        <Route path="/logIn" element={<Login />} />
      </Routes>
    </Fragment>
  );
};
const MoveToTop = () => {
  const navigate = useNavigate()
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/") {
      navigate("/logIn")
    }
    if (!!hash) return;

    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default App;
