import React from 'react'
import NavGroup from './NavGroup'

const links: LinkGroups = {
  games: [
    { title: 'life', url: '/life' },
    { title: 'playground', url: '/playground' },
    { title: 'waveform', url: '/waveform' },
    { title: 'spectrum', url: '/spectrum' }
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
    <nav>
      {Object.entries(links).map(([name, links], i) => (
        <NavGroup key={i} name={name} links={links} />
      ))}
    </nav>
  )
}

export default Nav
