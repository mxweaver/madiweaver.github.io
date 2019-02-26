import React from 'react'
import { Link as DOMLink } from 'react-router-dom'
import classnames from 'classnames'
import URI from 'urijs'
import c from './Link.scss'

interface Props {
	to: string
	className?: string
	children?: React.ReactNode
}

export function Link(props: Props) {
	props = {
		...props,
		className: classnames(this.props.className, c.link)
	}

	const uri = URI(this.props.to)

	if (uri.protocol() === '' && uri.domain() === '') {
		return <DOMLink {...props} />
	} else if (['', 'http', 'https'].includes(uri.protocol())) {
		return <a
			href={props.to}
			className={props.className}
			target='_blank'
			rel='noopener noreferrer'>
			{props.children}
		</a>
	} else {
		return <a href={props.to} className={props.className}>
			{props.children}
		</a>
	}
}
