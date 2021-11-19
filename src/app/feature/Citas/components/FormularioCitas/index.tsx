import { FormControl, InputLabel, Select, TextField } from '@material-ui/core';
import { FormContainer } from './styles';
import React from 'react';

export const FormularioCitas = () => {
    return (
        <FormContainer>
            <TextField
                required
                id="outlined-required"
                label="Nombre del Propietario"
                variant="outlined"
            />
            <TextField
                required
                id="outlined-required"
                label="Nombre de la mascota"
                variant="outlined"
            />
            <FormControl variant="outlined" >
                <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
                <Select
                    native
                    //value={state.age}
                    //onChange={handleChange}
                    label="Age"
                    inputProps={{
                        name: 'age',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={10000}>Basico</option>
                    <option value={20000}>Regular</option>
                    <option value={30000}>Premium</option>
                </Select>
            </FormControl>
            <TextField
                InputProps={{
                    readOnly: true,
                  }}
                id="outlined-required"
                label="Tarifa"
                variant="outlined"
            />       
        </FormContainer>
    );
};
