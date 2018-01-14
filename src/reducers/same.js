import Immutable from 'immutable'

const initalState = Immutable.List([])

export default function test(state = initalState, action) {
	switch(action.type) {
		case 'TEST_ADD_ACTION':
			return state.push(action.data)

		default:
			return state
	}
}