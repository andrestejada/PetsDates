import { combineReducers } from 'redux';
import { dateReducer } from './Dates/DateReducer';
import productos from './productos/productosReductor';

export default combineReducers({ 
    productos, 
    dates:dateReducer
});
