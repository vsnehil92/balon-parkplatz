import {combineReducers} from 'redux';
import LocationReducer from './locationReducer';

const reducers = combineReducers({
    location: LocationReducer
});

export default reducers;
