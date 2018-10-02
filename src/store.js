import { createStore } from 'redux';
import reducer from './ducks/reducer';

// redux dev tools installed

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);