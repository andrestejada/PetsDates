import { Button, FormControl, InputLabel, Select, TextField } from '@material-ui/core';
import React, {  FormEvent, useEffect, useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import Alert from '@material-ui/lab/Alert';
import { Cita } from '../../interfaces/index';
import { FormContainer } from './styles';
import { RootState } from '../../../../core/redux/reductores/index';
import { calcRate } from '../../../../shared/utils/calcRate';
import { saveDate } from '../../../../core/redux/acciones/Dates/DatesActions';
import { useForm } from '../../../../shared/hooks/useForm';
import { validateEmptyInputs } from '../../../../shared/utils/formValidation/ValidarCamposVacios';
import { validateQuantityDates } from '../../../../shared/utils/formValidation/ValidateQuantityDates';
import { validateSameHours } from '../../../../shared/utils/formValidation/ValidateSameHours';
import { validateWeekend } from '../../../../shared/utils/validateWeekend';



export const FormularioCitas = () => {
    const dispatch = useDispatch();
    const allDates = useSelector((state:RootState) => state.dates.allDates);
    const initialValues:Cita={
        nombrePropietario:'',
        nombreMascota:'',
        tipoServicio:'',
        tarifa:0,
        fechaHora:'',
        observaciones:'',
    };
    const [error, setError] = useState(false);
    const [msg, setMsg] = useState('');
    const [formValues,handleOnChange,reset,setValues] = useForm<Cita>(initialValues);
    const {
        nombrePropietario,
        nombreMascota,
        tipoServicio,
        tarifa,
        fechaHora,
        observaciones,
    }=formValues;
    const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
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
    useEffect(() => {
        setValues({...formValues,tarifa:calcRate(tipoServicio)});
        // eslint-disable-next-line
    }, [tipoServicio]);
    return (
        <FormContainer
            onSubmit={handleSubmit}
        >
            {
                error &&
                <Alert 
                    severity="error"
                    id="alerta"
                >{msg}
                </Alert>
            }
            <TextField
                type='text'
                id="outlined-required"
                label="Nombre del Propietario"
                variant="outlined"
                name='nombrePropietario'
                onChange={handleOnChange}
                value={nombrePropietario}
            />
            <TextField
                name='nombreMascota'
                onChange={handleOnChange}
                id="outlined-required"
                label="Nombre de la mascota"
                variant="outlined"
                value={nombreMascota}
            />
            <FormControl variant="outlined" >
                <InputLabel htmlFor="outlined-age-native-simple">Tipo de servicio</InputLabel>
                <Select
                    native                    
                    name='tipoServicio'
                    onChange={handleOnChange}                    
                    value={tipoServicio}                    
                >
                    <option aria-label="None" value="" />
                    <option value='basico'>Basico</option>
                    <option value='regular'>Regular</option>
                    <option value='premium'>Premium</option>
                </Select>
            </FormControl>
            <TextField
                InputProps={{
                    readOnly: true,
                  }}
                id="outlined-required"
                label="Tarifa"
                variant="outlined"
                name='tarfia'
                value={tarifa}
                onChange={handleOnChange}
            />
            <TextField
                id="datetime-local"
                label="Fecha y hora de la cita"
                type="datetime-local"                     
                InputLabelProps={{
                shrink: true,
                }}
                name='fechaHora'
                onChange={handleOnChange}
                value={fechaHora}
            />  
            <TextField                
                id="outlined-multiline-static"
                label="Observaciones"
                multiline                          
                variant="outlined"
                name='observaciones'
                onChange={handleOnChange}
                value={observaciones}
            />
            <Button 
                variant="contained" 
                color="primary"
                type='submit'
                id='button'
            >
                Guardar Citas
            </Button>
            
        </FormContainer>
    );
};
