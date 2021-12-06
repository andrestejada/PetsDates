import { ChangeEvent,  useState } from 'react';
import { calcRate } from '../utils/calcRate';

export const useForm = <T extends Object>( initialState:T ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    };

    interface OnChange{
        target:{
            value:any
            name?:any
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
