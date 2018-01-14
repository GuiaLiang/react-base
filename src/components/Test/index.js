import React, { Component } from 'react'

import { connect } from 'react-redux'

// import * as actions from '@/actions/test'

import './style.less'

class Test extends Component {

	componentDidMount() {
		this.props.add('Fuck you!!!')
	}

	render() {
		return (
			<div className="test-container">
				<h1>
					{ this.props.test.get('list').size > 0
					  ? this.props.test.get('list').get(0)
					  : 'Hello Guia' 
					}
				</h1>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		test: state.test
	}
}

function mapDispatchToProps(dispatch) {
	// let testPromiseAsync = async(...args) => {
	// 	await new Promise((resolve, reject) => {
	// 		setTimeout(() => {
	// 			resolve()
	// 		}, 3000)
	// 	})

	// 	return actions.testAddAction(...args)
	// }
	
	return {
		// add: (...args) => dispatch(actions.testAddAction(...args))
		// add: (...args) => dispatch(testPromiseAsync(...args))
		add: (...args) => dispatch({type: 'TEST_ADD_REQUEST', data: [...args]})
	}
}

Test = connect(
	mapStateToProps,
	mapDispatchToProps
)(Test)

export default Test