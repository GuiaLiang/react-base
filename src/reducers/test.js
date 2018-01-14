import Immutable from 'immutable'
import * as actionTypes from '@/constants/actions/test'

const initalState = Immutable.Map({
	list: Immutable.List([])
})

export default function test(state = initalState, action) {
	switch(action.type) {
		case actionTypes.TEST_ADD_ACTION:
			return state.update('list', list => list.push(action.payload))

		default:
			return state
	}
}