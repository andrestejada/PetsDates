import { act, renderHook } from '@testing-library/react-hooks';
import { datesTest, newDate } from '../fixture/dates';
import { Provider } from 'react-redux';
import React from 'react';
import createMockStore from 'redux-mock-store';
import { saveDate } from '../../core/redux/acciones/Dates/DatesActions';
import thunk from 'redux-thunk';
import { useSubmit } from './useSubmit';

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = createMockStore(middlewares);
const store = mockStore({});
store.dispatch = jest.fn();
const reset = jest.fn();
jest.mock('../../core/redux/acciones/Dates/DatesActions',()=>({
    saveDate:jest.fn()
}));


describe('testing in the hook use submit', () => {
    const componentWrapper =({children}:any)=> <Provider store={store}>{children}</Provider>;    
    const wrapperHook = renderHook(
        ()=>useSubmit({ formValues: newDate, allDates: datesTest, reset }),
        {wrapper:componentWrapper}
    );
    it('should be a correct type of value', () => {
    const { result } = wrapperHook;
    const { error, handleSubmit, msg } = result.current;
    expect(error).toBe(false);
    expect(msg).toBe('');
    expect(typeof error).toBe('boolean');
    expect(typeof msg).toBe('string');
    expect(typeof handleSubmit).toBe('function');
  });

  it('should be show the msg inputs empty and the error true', () => {
    const formValues={
        nombrePropietario: '',
        nombreMascota: '',
        tipoServicio: '',
        tarifa: 10000,
        fechaHora: '',
        observaciones: '',
    };  
    const wrapperHook = renderHook(
        ()=>useSubmit({ formValues, allDates: datesTest, reset }),
        {wrapper:componentWrapper}
    );
    const { result } = wrapperHook;
    const {handleSubmit} = result.current;
    act(()=>{
        handleSubmit({ preventDefault(){} });
    });
    const {error,msg} = result.current;
    expect(error).toBe(true);
    expect(msg).toBe('Todos los campos son obligatorios');
  });
  it('should be show the msg only dates during the week and the error true', () => {
    const formValues={
        nombrePropietario: 'Andres',
        nombreMascota: 'Sol',
        tipoServicio: 'basico',
        tarifa: 10000,
        fechaHora: '2021-12-11T16:00',
        observaciones: 'niguna',
    };  
    const wrapperHook = renderHook(
        ()=>useSubmit({ formValues, allDates: datesTest, reset }),
        {wrapper:componentWrapper}
    );
    const { result } = wrapperHook;
    const {handleSubmit} = result.current;
    act(()=>{
        handleSubmit({ preventDefault(){} });
    });
    const {error,msg} = result.current;
    expect(msg).toBe('Recuerda que solo puedes agregar citas de lunes a viernes');
    expect(error).toBe(true);
  });
  it('should be show the msg only 5 dates per day and the error to be true', () => {
    const wrapperHook = renderHook(
        ()=>useSubmit({ formValues:newDate, allDates: datesTest, reset }),
        {wrapper:componentWrapper}
    );
    const { result } = wrapperHook;
    const {handleSubmit} = result.current;
    act(()=>{
        handleSubmit({ preventDefault(){} });
    });
    const {error,msg} = result.current;
    expect(error).toBe(true);
    expect(msg).toBe('Solo puedes agregar 5 citas que corresponda al mismo dia');
  });
  it('should be show the msg no dates in the same time and the error to be true', () => {
    const datesTest= [
        {
          id: 1,
          nombrePropietario: 'Andres',
          nombreMascota: 'sol',
          tipoServicio: 'basico',
          tarifa: 10000,
          fechaHora: '2021-12-01T16:00',
          observaciones: 'pelo corto',
        }];    
    const wrapperHook = renderHook(
        ()=>useSubmit({ formValues:newDate, allDates: datesTest, reset }),
        {wrapper:componentWrapper}
    );
    const { result } = wrapperHook;
    const {handleSubmit} = result.current;
    act(()=>{
        handleSubmit({ preventDefault(){} });
    });
    const {error,msg} = result.current;
    expect(error).toBe(true);
    expect(msg).toBe('No puedes agregar 2 citas a la misma hora,recuerda que cada cita tiene una duración de 2 horas.');
  });
  it('should be pass the validation a the error to be false, call reset and call the dispatch', () => {    
    const formValues={
        nombrePropietario: 'Andres',
        nombreMascota: 'Sol',
        tipoServicio: 'basico',
        tarifa: 10000,
        fechaHora: '2021-12-07T16:00',
        observaciones: 'niguna',
    };
    const wrapperHook = renderHook(
        ()=>useSubmit({ formValues, allDates: datesTest, reset }),
        {wrapper:componentWrapper}
    );
    const { result } = wrapperHook;
    const {handleSubmit} = result.current;
    act(()=>{
        handleSubmit({ preventDefault(){} });
    });
    const {error} = result.current;
    expect(error).toBe(false);
    expect(reset).toHaveBeenCalled();
    expect(reset).toHaveBeenCalledTimes(1);
    expect(saveDate).toHaveBeenCalled();
    expect(saveDate).toHaveBeenCalledTimes(1);
  });

});
