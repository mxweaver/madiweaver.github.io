import React, { FC } from 'react';
import routes from '../../routes';
import RouteGroup from './RouteGroup';
import c from './header.scss';

const Nav: FC<{}> = () => (
  <div className={c.nav}>
    {Object.entries(routes).map(([name, group]) => (
      <RouteGroup key={name} name={name} group={group} />
    ))}
  </div>
);

export default Nav;
