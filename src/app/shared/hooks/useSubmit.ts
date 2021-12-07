import {Cita,Citas} from 'app/feature/Citas/interfaces';
import { saveDate } from 'app/core/redux/acciones/Dates/DatesActions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { validateEmptyInputs } from '../utils/formValidation/ValidarCamposVacios';
import { validateQuantityDates } from '../utils/formValidation/ValidateQuantityDates';
import { validateSameHours } from '../utils/formValidation/ValidateSameHours';
import { validateWeekend } from '../utils/validateWeekend';

interface Props {
    formValues:Cita,
    allDates:Citas[]
    reset: () => void
}

export const useSubmit=(props:Props)=>{
    const {formValues,allDates,reset} = props;
    const dispatch = useDispatch();
    const [error, setError] = useState(false);
    const [msg, setMsg] = useState('');
    const {fechaHora}=formValues;

    interface FormEvent{
        preventDefault:()=>void;
    }
    const handleSubmit=(e:FormEvent)=>{
        e.preventDefault();
        //validate empty fields
        const isEmptyFields = validateEmptyInputs(formValues);
         if(isEmptyFields){
            setError(true);
            setMsg('Todos los campos son obligatorios');
            return;
        }

        //validate if is weekend
        const isWeekend = validateWeekend(fechaHora);
        if(isWeekend){
            setError(true);
            setMsg('Recuerda que solo puedes agregar citas de lunes a viernes');
            return; 
        }
        //validate max quantity
        const isEnoughDates = validateQuantityDates(formValues,allDates);
        if(isEnoughDates){
            setError(true);
            setMsg('Solo puedes agregar 5 citas que corresponda al mismo dia');
            return; 
        }

        const isBetweenDate = validateSameHours(formValues,allDates);
        if(isBetweenDate){
            setError(true);
            setMsg('No puedes agregar 2 citas a la misma hora,recuerda que cada cita tiene una duración de 2 horas.');
            return; 
        }
        //save in the db        
        setError(false);
        dispatch(saveDate(formValues));
        reset();
    };

    return{
        error,
        msg,
        handleSubmit
    };
};
