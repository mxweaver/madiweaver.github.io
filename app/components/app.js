import React from 'react'
import Sidebar from './sidebar'
import c from './app.scss'

export default class App extends React.Component {
	render() {
		return (
			<div className={c.app}>
				<Sidebar/>
			</div>
		)
	}
}
