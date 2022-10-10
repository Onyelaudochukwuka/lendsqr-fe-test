import React, {
  FC,
  Fragment,
  useEffect,
} from 'react';

import {
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import './App.css';
import {
  Login, NotFound, Unavailable, UserDashboard, UserDetails,
} from './pages';

const MoveToTop = () => {
  const navigate = useNavigate();
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (pathname === '/') {
      navigate('/logIn');
    }
    if (hash) return;

    window.scrollTo(0, 0);
  }, [pathname, navigate, hash]);
  return null;
};

const App: FC = () => (
  <>
    <MoveToTop />
    <Routes>
      <Route path="/:path" element={<NotFound />} />
      <Route path="/logIn" element={<Login />} />
      <Route path="/dashboard" element={<Unavailable />} />
      <Route path="/dashboard/:route" element={<Unavailable />} />
      <Route path="/dashboard/users" element={<UserDashboard />} />
      <Route path="/dashboard/users/:id" element={<UserDetails />} />
    </Routes>
  </>
);
export default App;
