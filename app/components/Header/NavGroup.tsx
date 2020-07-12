import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import Link from '../Link';
import c from './header.scss';

interface Props {
  links: NavLink[];
  name: string;
  className?: string;
}

const NavGroup: FunctionComponent<Props> = ({ name, links, className }: Props) => (
  <div className={classnames(className, c.group)}>
    <div className={c.title}>{name}</div>
    <div className={c.links}>
      {links.map(({ title, url }) => (
        <Link key={title} to={url}>{title}</Link>
      ))}
    </div>
  </div>
);

NavGroup.defaultProps = {
  className: undefined,
};

export default NavGroup;
