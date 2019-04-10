import React from 'react'
import classnames from 'classnames'
import Link from '../Link'
import c from './header.scss'

interface Props extends React.HTMLProps<HTMLDivElement>{
  name: string;
  links: NavLink[];
}

const NavGroup = ({ name, links, className, ...props }: Props) => (
  <div {...props} className={classnames(className, c.group)}>
    <div className={c.title}>{name}</div>
    <div className={c.links}>
      {links.map(({ title, url }) => (
        <Link key={title} to={url}>{title}</Link>
      ))}
    </div>
  </div>
)

export default NavGroup
