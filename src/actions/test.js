import * as actionTypes from '@/constants/actions/test'

export function testAddAction(payload) {
	return {
		type: actionTypes.TEST_ADD_ACTION,
		payload
	}
}