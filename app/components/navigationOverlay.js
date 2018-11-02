import React from 'react'
import Link from './link.js'
import c from './navigationOverlay.scss'

function NavGroup ({name, links, ...props}) {
	return (
		<div {...props}>
			<div>{name}</div>
			<div className={c.navlinkGroup}>
				{links.map(({title, url}) => (
					<Link key={title} to={url}>{title}</Link>
				))}
			</div>
		</div>
	)
}

function Nav() {
	const links = {
		games: [
			{ title: 'life', url: '/life' },
		],
		links: [
			{ title: 'github', url: 'https://github.com/mayavera' },
			{ title: 'linkedin', url: 'https://linkedin.com/in/mayavera' },
			{ title: 'codewars', url: 'https://www.codewars.com/users/mayavera' },
			{ title: 'stackoverflow', url: 'https://stackexchange.com/users/13452692/maya-vera' },
		],
	}

	return (
		<nav>
		{Object.entries(links).map(([name, links], i) => (
			<NavGroup key={i} name={name} links={links}/>
		))}
		</nav>
	)
}

export default class NavigationOverlay extends React.Component {
	render() {
		return (
			<div className={c.overlay}>
				<h1>
					<Link to='/'>asura's realm</Link>
				</h1>
				<Nav/>
			</div>
		)
	}
}
