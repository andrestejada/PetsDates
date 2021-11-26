import { ADD_DATE, DELETE_DATE, DatesDispatchTypes, GET_ALL_DATES } from '../../acciones/Dates/DatesTypes';
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
        case DELETE_DATE:
            return{
                ...state,
                allDates: state.allDates.filter( (cita)=> cita.id !== action.payload)
            };
        default:
            return state;
    }
};