import { ADD_DATE, DatesDispatchTypes, GET_ALL_DATES } from './DatesTypes';
import { Cita,Citas} from 'app/feature/Citas/interfaces';
import { Dispatch } from 'redux';
import { axiosIntance } from '../../../config/AxiosConfig';

export const SaveDate=(date:Cita)=>{
    return async (dispatch:Dispatch<DatesDispatchTypes>)=>{
        try {
            const {data} = await  axiosIntance.post('/dates',date);
            dispatch( addNewDate(data) );
        } catch (error) {
            console.log(error);
        }
    };
};


export const addNewDate=(data:Citas):DatesDispatchTypes=>({
    type:ADD_DATE,
    payload:data
});


export const GetDates=()=>{
    return async (dispatch:Dispatch<DatesDispatchTypes>)=>{
        try {
            const {data} = await  axiosIntance.get('/dates');
            dispatch( getAllDates(data) );
        } catch (error) {
            console.log(error);
        }
    };
};

export const getAllDates=(data:Citas[]):DatesDispatchTypes=>({
    type:GET_ALL_DATES,
    payload:data
});
