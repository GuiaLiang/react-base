import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import App from './App'

class RouterMap extends Component {
	render() {
		return (
			<Router>
				<div>
					{/* <Commonn-Header /> */}
					<Switch>
						<Route exact path="/" component={App} />
					</Switch>
					{/* <Commonn-Footer /> */}
				</div>
			</Router>
		)
	}
}

export default RouterMap