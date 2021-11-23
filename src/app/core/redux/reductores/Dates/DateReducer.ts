import { ADD_DATE, DatesDispatchTypes } from '../../acciones/Dates/DatesTypes';
import { FormCrearCitas } from '../../../../feature/Citas/components/FormularioCitas/index';

export interface Dates{
    allDates:FormCrearCitas[]
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
        default:
            return state;
    }
};