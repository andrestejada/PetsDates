import { combineReducers } from 'redux';
import { dateReducer } from './Dates/DateReducer';


const rootReducer = combineReducers({     
    dates:dateReducer
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;