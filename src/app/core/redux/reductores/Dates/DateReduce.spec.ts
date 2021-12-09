import { ADD_DATE,DELETE_DATE, DatesDispatchTypes, GET_ALL_DATES,  } from '../../acciones/Dates/DatesTypes';
import {Dates, dateReducer,  } from './DateReducer';
import { Citas} from '../../../../feature/Citas/interfaces/index';

describe('test dates reducer', () => {
    const initialState:Dates={
        allDates:[]
    };
    const Date={
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
            payload:Date
        };
        const statePlusNewDate = dateReducer(initialState,actionAddNewDate);
        expect(statePlusNewDate).toEqual({...initialState,allDates:[...initialState.allDates,Date]});
        expect(statePlusNewDate.allDates.length).toBe(1);
    });
    it('debe de obtener todas la citas', () => {
        const dates:Citas[] =[Date,Date];
        const actionGetAllDates:DatesDispatchTypes ={
            type:GET_ALL_DATES,
            payload:dates
        };
        const totalDate = 2;
        const stateWithAllDates= dateReducer(initialState,actionGetAllDates);
        expect(stateWithAllDates.allDates.length).toBe(totalDate);
        expect(stateWithAllDates).toEqual({...initialState,allDates:dates});
    });
    it('should be return the state without the delete date', () => {
        const initialStateDelete:Dates={
            allDates:[Date]
        };
        const actionDeleteDate:DatesDispatchTypes={
            type:DELETE_DATE,
            payload:Date.id
        };

        const stateWithoutDate = dateReducer(initialStateDelete,actionDeleteDate);
        expect(stateWithoutDate.allDates.length).toBe(0);
        expect(stateWithoutDate).toEqual({...initialStateDelete,allDates:[]});
        expect(stateWithoutDate).toEqual({ allDates: [] });
        expect(stateWithoutDate.allDates).toEqual([]);
        expect(stateWithoutDate.allDates).not.toBe(undefined);
    });
});
