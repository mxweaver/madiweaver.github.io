import React from 'react'
import Link from '../Link'
import Nav from './Nav'
import c from './nav.scss'

const NavigationOverlay = () => (
  <div className={c.overlay}>
    <div>
      <Link to='/'>maya vera</Link>
    </div>
    <Nav />
  </div>
)

export default NavigationOverlay
