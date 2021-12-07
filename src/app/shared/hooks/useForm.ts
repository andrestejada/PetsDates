import { calcRate } from '../utils/calcRate';
import {  useState } from 'react';

export const useForm = <T extends Object>( initialState:T ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    };

    interface OnChange{
        target:{
            name?: string | number | any ;
            value: unknown;
        }
    }
    const handleInputChange = ({target}:OnChange) => {   
        //const name = target.name as keyof typeof values;
        setValues({
            ...values,
            [target.name ]: target.value
        });      
     
    };

    const changeRate =(value:string)=>{
        setValues({
            ...values,
            tarifa:calcRate(value)
        });
    };

    return [ values, handleInputChange, reset ,changeRate]as const;

};
