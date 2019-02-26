import React from 'react'
import Link from '../Link'
import Nav from './Nav'
import c from './NavigationOverlay.scss'

const NavigationOverlay = () => (
	<div className={c.overlay}>
		<h1>
			<Link to='/'>asura's realm</Link>
		</h1>
		<Nav />
	</div>
)

export default NavigationOverlay
