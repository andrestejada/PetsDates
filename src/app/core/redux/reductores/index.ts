import { combineReducers } from 'redux';
import { dateReducer } from './Dates/DateReducer';
import productos from './productos/productosReductor';


const rootReducer = combineReducers({ 
    productos, 
    dates:dateReducer
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;