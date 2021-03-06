import { ADD_DATE,DELETE_DATE, DatesDispatchTypes, GET_ALL_DATES,  } from './DatesTypes';
import { Cita,Citas} from 'app/feature/Citas/interfaces';
import { Dispatch } from 'redux';
import { axiosIntance } from '../../../config/AxiosConfig';

export const saveDate=(date:Cita)=>{
    return async (dispatch:Dispatch<DatesDispatchTypes>)=>{
        const {data} = await  axiosIntance.post('/dates',date);
            dispatch( addNewDate(data) );
    };
};


export const addNewDate=(data:Citas):DatesDispatchTypes=>({
    type:ADD_DATE,
    payload:data
});


export const getDates=()=>{
    return async (dispatch:Dispatch<DatesDispatchTypes>)=>{
            const {data} = await  axiosIntance.get('/dates');
            dispatch( getAllDates(data) );
    };
};

export const getAllDates=(data:Citas[]):DatesDispatchTypes=>({
    type:GET_ALL_DATES,
    payload:data
});


export const deleteDateByID=(id:number)=>{
    return async(dispatch:Dispatch<DatesDispatchTypes>)=>{
        await axiosIntance.delete(`/dates/${id}`);
        dispatch(deleteDate(id));
    };
};


export const deleteDate=(id:number):DatesDispatchTypes=>({
    type:DELETE_DATE,
    payload:id
});
