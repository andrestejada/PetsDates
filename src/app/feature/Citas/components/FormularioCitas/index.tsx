import { Button, FormControl, InputLabel, Select, TextField } from '@material-ui/core';
import React, { FormEvent, useEffect, useState } from 'react';
import Alert from '@material-ui/lab/Alert';
import { FormContainer } from './styles';
import { SaveDate } from '../../../../core/redux/acciones/Dates/DatesActions';
import { UseForm } from '../../../../shared/hooks/useForm';
import { ValidateEmptyInputs } from '../../../../shared/utils/ValidarCamposVacios';
import { calcRate } from '../../../../shared/utils/calcRate';
import { useDispatch } from 'react-redux';


export interface FormCrearCitas{
    nombrePropietario:string;
    nombreMascota:string;
    tipoServicio:string;
    tarifa:number;
    fechaHora:string;
    observaciones:string;
}
export const FormularioCitas = () => {
    const dispatch = useDispatch();
    const initialValues:FormCrearCitas={
        nombrePropietario:'Andres',
        nombreMascota:'sol',
        tipoServicio:'basico',
        tarifa:10000,
        fechaHora:'2021-12-01T16:00',
        observaciones:'pelo corto',
    };
    const [error, setError] = useState<Boolean>(false);
    const [msg, setMsg] = useState<String>('');
    const [formValues,handleOnChange,reset,setValues] = UseForm<FormCrearCitas>(initialValues);
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
        const isEmptyFields = ValidateEmptyInputs(formValues);
        if(isEmptyFields){
            setError(true);
            setMsg('Todos los campos son obligatorios');
            return;
        }
        dispatch(SaveDate(formValues));
        setError(false);
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
                    label="Age"
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
            {
                error &&
                <Alert 
                    severity="error"
                    id="alerta"
                >{msg}
                </Alert>
            }
        </FormContainer>
    );
};
