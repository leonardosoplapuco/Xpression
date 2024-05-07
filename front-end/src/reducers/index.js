import { combineReducers } from 'redux';
import socketReducer from './socketReducer';

const rootReducer = combineReducers({
    socket: socketReducer,
});

export default rootReducer;
