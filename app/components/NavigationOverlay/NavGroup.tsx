import React from 'react'
import Link from '../Link'
import c from './NavGroup.scss'

interface Props {
  name: string
  links: Link[]
}

const NavGroup = ({ name, links, ...props }: Props) => (
  <div {...props}>
    <div>{name}</div>
    <div className={c.navGroup}>
      {links.map(({ title, url }) => (
        <Link key={title} to={url}>{title}</Link>
      ))}
    </div>
  </div>
)

export default NavGroup
