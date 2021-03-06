/**
 * Created by bilalmf on 01/01/17.
 */
import React from 'react'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import App from './components/app'
import rootReducer from './reducers/rootReducer'
import reactDOM from 'react-dom'
import {composeWithDevTools} from 'redux-devtools-extension'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'react-intl-redux'

injectTapEventPlugin();

let enhancer=composeWithDevTools(applyMiddleware(thunk));

let store = createStore(rootReducer, enhancer);

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
            <MuiThemeProvider>
                <App />
            </MuiThemeProvider>
        </Provider>,
        document.querySelector("#app")
    )
}

if (document.readyState !== 'complete') {
    document.addEventListener('DOMContentLoaded', load);
} else {
    load();
}



