import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { pressedKeysReducer } from './store/currentlyPressedKeys/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { currentOctaveReducer } from './store/currentOctave/reducer';

const rootReducer = combineReducers({
    pressedKeysReducer,
    currentOctaveReducer,
});

const store = createStore(rootReducer, composeWithDevTools(),);

ReactDOM.render(
    (
        <Provider store={store}>
            <App />
        </Provider>
    ),
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
