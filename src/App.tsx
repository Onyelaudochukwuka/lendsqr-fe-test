import React, { FC, Fragment, useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Login, UserDashboard } from "./pages";
import Dashboard from "./pages/UserDashboard/UserDashboard";
const App: FC = () => {
  return (
    <Fragment>
      <MoveToTop />
      <Routes>
        <Route path="/logIn" element={<Login />} />
        <Route path="/dashboard/users" element={<UserDashboard />} />
      </Routes>
    </Fragment>
  );
};
const MoveToTop = () => {
  const navigate = useNavigate()
  const { hash, pathname } = useLocation();
  console.log(pathname)
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
