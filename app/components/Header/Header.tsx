import React from 'react';
import Link from '../Link';
import Nav from './Nav';
import c from './header.scss';

const Header = () => (
  <div className={c.overlay}>
    <div>
      <Link to="/">maya vera</Link>
    </div>
    <Nav />
  </div>
);

export default Header;
