import React, { FC } from 'react';
import Link from '../Link';
import c from './header.scss';

interface Props {
  links: NavLink[];
  name: string;
}

const NavGroup: FC<Props> = ({ name, links }: Props) => (
  <div className={c.group}>
    <div className={c.title}>{name}</div>
    <div className={c.links}>
      {links.map(({ title, url }) => (
        <Link key={title} to={url}>{title}</Link>
      ))}
    </div>
  </div>
);

export default NavGroup;
