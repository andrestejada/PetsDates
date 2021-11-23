import {ADD_DATE , DatesDispatchTypes } from './DatesTypes';
import { Dispatch } from 'redux';
import { FormCrearCitas } from '../../../../feature/Citas/components/FormularioCitas';
import { axiosIntance } from '../../../config/AxiosConfig';

export const SaveDate=(date:FormCrearCitas)=>{
    return async (dispatch:Dispatch<DatesDispatchTypes>)=>{
        try {
            const {data} = await  axiosIntance.post('/dates',date);
            dispatch( addNewDate(data) );
        } catch (error) {
            console.log(error);
        }
    };
};


export const addNewDate=(data:FormCrearCitas):DatesDispatchTypes=>({
    type:ADD_DATE,
    payload:data
});