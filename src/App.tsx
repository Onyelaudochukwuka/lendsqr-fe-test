import React, { FC, Fragment, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
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
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (!!hash) return;
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default App;
