import { take, put } from 'redux-saga/effects'

import * as actionTypes from '@/constants/actions/test'

const delay = ms => (new Promise((resolve, reject) => setTimeout(resolve, ms)))

export default function* testSaga() {
	while(true) {
		const {data} = yield take(actionTypes.TEST_ADD_REQUEST);
		yield delay(3000)
		yield put({type: actionTypes.TEST_ADD_ACTION, payload: data[0]})
	}
} 