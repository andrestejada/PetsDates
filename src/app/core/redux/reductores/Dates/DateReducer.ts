import { ADD_DATE, DatesDispatchTypes, GET_ALL_DATES } from '../../acciones/Dates/DatesTypes';
import { Citas } from '../../../../feature/Citas/interfaces/index';

export interface Dates{
    allDates:Citas[]
}
const initialState:Dates={
    allDates:[]
};


export const dateReducer=(state:Dates=initialState,action:DatesDispatchTypes):Dates=>{
    switch (action.type) {
        case ADD_DATE:            
            return{
                ...state,
                allDates:[...state.allDates,action.payload]
            };    
        case GET_ALL_DATES:
            return{
                ...state,
                allDates:action.payload
            };
        default:
            return state;
    }
};