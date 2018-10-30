import React from 'react'
import { Route } from 'react-router-dom'
import Sidebar from './sidebar'
import Intro from './intro'
import c from './app.scss'

export default class App extends React.Component {
	render() {
		return (
			<div className={c.app}>
				<Sidebar/>
				<div className={c.content}>
					<Route exact path="/" component={Intro}/>
				</div>
			</div>
		)
	}
}
