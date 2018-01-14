import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'

import { createLogger } from 'redux-logger'

// test redux-promise处理异步请求action
// import promiseMiddleware from 'redux-promise';

// test redux-saga处理异步请求action
import createSagaMiddleware from 'redux-saga';
import rootSaga from '@/async/saga'

import reducers from '@/reducers'

import RouterMap from './RouterMap'

import registerServiceWorker from './registerServiceWorker';

const loggerMiddleware  = createLogger()

const sagaMiddleware = createSagaMiddleware()

let middleware = [sagaMiddleware, loggerMiddleware]

const composeEnhancers =
	typeof window === 'object' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
	  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
	}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
);

let store = createStore(
	reducers,
	{}, /* preloadedState, 初始化state */
	enhancer
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
	<Provider store={store}>
		<RouterMap />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
