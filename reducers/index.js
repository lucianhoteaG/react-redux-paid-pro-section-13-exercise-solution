import { combineReducers } from 'redux';
import searchReducer from './search';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    router: routerReducer,
    search: searchReducer,
});
