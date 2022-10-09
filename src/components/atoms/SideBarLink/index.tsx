import React, { FC, ReactNode } from 'react';

import { NavLink } from 'react-router-dom';

import style from './index.module.css';

interface ISideBarLink {
  children: ReactNode;
  to: string;
  className?: string;
  end?: boolean;
}
const SideBarLink: FC<ISideBarLink> = ({ children, className, ...props }) => (
  <NavLink
    className={({ isActive }) => `${style.SideBarLink} ${className} ${
      isActive ? style.SideBarLink__active : ''
    }`}
    {...props}
  >
    {children}
  </NavLink>
);
SideBarLink.defaultProps = {
  className: '',
  end: false,
};
export default SideBarLink;
