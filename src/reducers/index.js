import { combineReducers } from 'redux'

import test from './test'


// 当在不同的reducers中，如果action type有一样的话，则两者都会执行相关的reduce操作，
// 即两个不同的state会同时受到影响
// 假设有reducer1（signUp）和reducer2（signIn），
// 两个reducer都有action type（'CHANGE_USERNAME'）,
// 你会发现在其中一个view中修改username，另外一个username也会跟着改变

export default combineReducers({
	test
})