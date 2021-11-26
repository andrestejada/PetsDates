import { ADD_DATE, DatesDispatchTypes, GET_ALL_DATES } from '../../acciones/Dates/DatesTypes';
import {Dates, dateReducer,  } from './DateReducer';
import { Citas} from '../../../../feature/Citas/interfaces/index';

describe('test dates reducer', () => {
    const initialState:Dates={
        allDates:[]
    };
    const newDate={
        id:12345,
        nombrePropietario:'Juanito',
        nombreMascota:'coco',
        tipoServicio:'regular',
        tarifa:20000,
        fechaHora:'2021-12-01T16:00',
        observaciones:'Pelo corto',
    };
    it('debe de retornar el estado por defecto', () => {
        const actionDefaultState:DatesDispatchTypes = {type:''};
        const defaultState = dateReducer(initialState,actionDefaultState);

        expect(defaultState).toEqual(initialState);
        expect(defaultState.allDates.length).toBe(0);
    });
    it('debe de retornar el producto agregado', () => {
        const actionAddNewDate:DatesDispatchTypes = {
            type:ADD_DATE,
            payload:newDate
        };
        const statePlusNewDate = dateReducer(initialState,actionAddNewDate);
        expect(statePlusNewDate).toEqual({...initialState,allDates:[...initialState.allDates,newDate]});
        expect(statePlusNewDate.allDates.length).toBe(1);
    });
    it('debe de obtener todas la citas', () => {
        const dates:Citas[] =[newDate,newDate];

        const actionGetAllDates:DatesDispatchTypes ={
            type:GET_ALL_DATES,
            payload:dates
        };
        const stateWithAllDates= dateReducer(initialState,actionGetAllDates);
        expect(stateWithAllDates.allDates.length).toBe(2);
        expect(stateWithAllDates).toEqual({...initialState,allDates:dates});
    });
});