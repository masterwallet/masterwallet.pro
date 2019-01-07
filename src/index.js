import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { configure, history } from './store';
import Debounced from './services/Debounced';

const store = configure();
store.dispatch({ type: 'SCREEN_RESIZE' });

const root = document.getElementById('root');
if (root) {
    render((
        <Provider store={store}>
            <ConnectedRouter history={history}><App /></ConnectedRouter>
        </Provider>
    ), root);
	window.addEventListener('resize', () => {
		Debounced.start('resize', () => {
			store.dispatch({type: 'SCREEN_RESIZE'})
		}, 200)
	});
}
