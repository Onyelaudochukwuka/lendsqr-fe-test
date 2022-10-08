import React, { FC, Fragment, useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Login, Unavailable, UserDashboard, UserDetails } from "./pages";
const App: FC = () => {
  return (
    <Fragment>
      <MoveToTop />
      <Routes>
        <Route path="/logIn" element={<Login />} />
        <Route path="/dashboard" element={<Unavailable />} />
        <Route path="/dashboard/:route" element={<Unavailable />} />
        <Route path="/dashboard/users" element={<UserDashboard />} />
        <Route path="/dashboard/users/:id" element={<UserDetails />} />
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
  }, [pathname, navigate, hash]);
  return null;
};

export default App;
