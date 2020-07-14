import React, { FC } from 'react';
import NavGroup from './NavGroup';
import c from './header.scss';

interface NavGroups {
  [name: string]: NavLink[];
}

const groups: NavGroups = {
  games: [
    { title: 'life', url: '/life' },
    { title: 'playground', url: '/playground' },
    { title: 'waveform', url: '/waveform' },
    { title: 'spectrum', url: '/spectrum' },
    // { title: 'motion', url: '/motion' },
    { title: 'animation', url: '/animation' },
  ],
  links: [
    { title: 'github', url: 'https://github.com/mayavera' },
    { title: 'linkedin', url: 'https://linkedin.com/in/mayavera' },
    { title: 'codewars', url: 'https://www.codewars.com/users/mayavera' },
    { title: 'stackoverflow', url: 'https://stackexchange.com/users/13452692/maya-vera' },
  ],
};

const Nav: FC<{}> = () => (
  <div className={c.nav}>
    {Object.entries(groups).map(([name, links]) => (
      <NavGroup key={name} name={name} links={links} />
    ))}
  </div>
);

export default Nav;
