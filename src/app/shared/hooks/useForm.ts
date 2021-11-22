import { ChangeEvent,  useState } from 'react';

export const UseForm = <T extends Object>( initialState:T ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    };

    const handleInputChange = (e:ChangeEvent<HTMLInputElement |HTMLSelectElement |HTMLTextAreaElement |{ name?: string; value: unknown }>) => {   
        const name = e.target.name as keyof typeof values;
        setValues({
            ...values,
            [name ]: e.target.value
        });      
     
    };

    return [ values, handleInputChange, reset ,setValues]as const;

};