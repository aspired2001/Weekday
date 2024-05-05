// rootReducer.js
import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import jobReducer from './jobReducer';

const rootReducer = combineReducers({
    filters: filterReducer,
    jobs: jobReducer,
});

export default rootReducer;
