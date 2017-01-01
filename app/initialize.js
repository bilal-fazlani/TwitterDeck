/**
 * Created by bilalmf on 01/01/17.
 */
import getInitialState from './initialState'
import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import TwitterDeckApp from './components/twitterDeckApp'
import rootReducer from './reducers/rootReducer'
import reactDOM from 'react-dom'
import {composeWithDevTools} from 'redux-devtools-extension'
//import injectTapEventPlugin from 'react-tap-event-plugin';

//injectTapEventPlugin();

let initialState = getInitialState();
let enhancer=composeWithDevTools();

let store = createStore(rootReducer, initialState, enhancer);

console.log(store)

if (module.hot) {
    module.hot.accept('./reducers/rootReducer', () => {
        store.replaceReducer(require('./reducers/rootReducer').default);
    });
    module.hot.accept();

    module.hot.dispose((data) => {
        data.counter = store.getState();
        [].slice.apply(document.querySelector('#app').children).forEach(function(c) { c.remove() });
    });
}

const load = () => {
    reactDOM.render(
        <Provider store={store} >
            <TwitterDeckApp />
        </Provider>,
        document.querySelector("#app")
    )
}

if (document.readyState !== 'complete') {
    document.addEventListener('DOMContentLoaded', load);
} else {
    load();
}

