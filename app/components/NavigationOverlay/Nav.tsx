import React from 'react'
import NavGroup from './NavGroup'
import c from './nav.scss'

const links: LinkGroups = {
  games: [
    { title: 'life', url: '/life' },
    { title: 'playground', url: '/playground' },
    { title: 'waveform', url: '/waveform' },
    { title: 'spectrum', url: '/spectrum' },
    { title: 'motion', url: '/motion' },
  ],
  links: [
    { title: 'github', url: 'https://github.com/mayavera' },
    { title: 'linkedin', url: 'https://linkedin.com/in/mayavera' },
    { title: 'codewars', url: 'https://www.codewars.com/users/mayavera' },
    { title: 'stackoverflow', url: 'https://stackexchange.com/users/13452692/maya-vera' },
  ],
}

function Nav() {
  return (
    <div className={c.nav}>
      {Object.entries(links).map(([name, links], i) => (
        <NavGroup key={i} name={name} links={links} />
      ))}
    </div>
  )
}

export default Nav
