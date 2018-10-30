import React from 'react'
import Link from './link.js'
import c from './sidebar.scss'

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
		blog: [],
		games: [
			{ title: 'snake', url: '/snake' },
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

export default class Sidebar extends React.Component {
	render() {
		return (
			<div className={c.sidebar}>
				<h1>maya vera</h1>
				<h2>
					<Link to="mailto:maya@mayavera.me">
					{'<maya@mayavera.me>'}
					</Link>
				</h2>
			<Nav/>
			</div>
		)
	}
}
