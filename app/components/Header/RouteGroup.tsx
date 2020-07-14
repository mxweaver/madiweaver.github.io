import React, { FC } from 'react';
import { Route } from '../../routes';
import Link from '../Link';
import c from './header.scss';

interface Props {
  group: Route[];
  name: string;
}

const RouteGroup: FC<Props> = ({ name, group }: Props) => (
  <div className={c.group}>
    <div className={c.title}>{name}</div>
    <div className={c.links}>
      {group.map(({ title, url }) => (
        <Link key={title} to={url}>{title}</Link>
      ))}
    </div>
  </div>
);

export default RouteGroup;
