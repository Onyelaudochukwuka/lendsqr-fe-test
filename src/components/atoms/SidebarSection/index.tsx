import React, { FC } from 'react';

import { SidebarElements } from '../../molecules/Sidebar';
import SideBarLink from '../SideBarLink';

import style from './index.module.css';

interface ISidebarSection {}
const SidebarSection: FC<ISidebarSection & SidebarElements> = ({
  heading,
  children,
}) => (
  <div className={style.SidebarSection} data-testid={`sidebar-elements-${heading}`}>
    <p className={style.SidebarSection__heading} data-testid={`sidebar-elements-heading-${heading}`}>{heading}</p>
    {children.map(({ Icon, name, to }) => (
      <SideBarLink to={`/dashboard${to}`} key={`sidebarSelection-${to}`}>
        <Icon className={style.SidebarSection__icon} />
        <span data-testid={`sidebar-children-text-${name}`}>{name}</span>
      </SideBarLink>
    ))}
  </div>
);

export default SidebarSection;
