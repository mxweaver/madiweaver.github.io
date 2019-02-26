import React from 'react'
import Link from './link'
import c from './navigationOverlay.scss'

interface Link {
	title: string
	url: string
}

interface LinkGroups {
	[name: string]: Link[]
}

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

function Nav() {
	const links: LinkGroups = {
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
				<NavGroup key={i} name={name} links={links} />
			))}
		</nav>
	)
}

const NavigationOverlay = () => (
	<div className={c.overlay}>
		<h1>
			<Link to='/'>asura's realm</Link>
		</h1>
		<Nav />
	</div>
)

export default NavigationOverlay
