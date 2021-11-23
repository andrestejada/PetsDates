import { ADD_DATE, DatesDispatchTypes } from '../../acciones/Dates/DatesTypes';
import {Dates, dateReducer,  } from './DateReducer';

describe('test dates reducer', () => {
    const initialState:Dates={
        allDates:[]
    };
    it('debe de retornar el estado por defecto', () => {
        const actionDefaultState:DatesDispatchTypes = {type:''};
        const defaultState = dateReducer(initialState,actionDefaultState);

        expect(defaultState).toEqual(initialState);
        expect(defaultState.allDates.length).toBe(0);
    });
    it('debe de retornar el producto agregado', () => {

        const newDate={
            nombrePropietario:'Juanito',
            nombreMascota:'coco',
            tipoServicio:'regular',
            tarifa:20000,
            fechaHora:'2021-12-01T16:00',
            observaciones:'Pelo corto',
        };
       
        const actionAddNewDate:DatesDispatchTypes = {
            type:ADD_DATE,
            payload:newDate
        };
        const statePlusNewDate = dateReducer(initialState,actionAddNewDate);
        expect(statePlusNewDate).toEqual({...initialState,allDates:[...initialState.allDates,newDate]});
        expect(statePlusNewDate.allDates.length).toBe(1);
    });
});