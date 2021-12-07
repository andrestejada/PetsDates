import {
  Button,
  FormControl,
  InputLabel,
  Select,
  TextField,
} from '@material-ui/core';
import React, {  useEffect } from 'react';
import Alert from '@material-ui/lab/Alert';
import { Cita } from '../../interfaces/index';
import { FormContainer } from './styles';
import { RootState } from '../../../../core/redux/reductores/index';
import { useForm } from '../../../../shared/hooks/useForm';
import { useSelector } from 'react-redux';
import { useSubmit } from 'app/shared/hooks/useSubmit';

export const FormularioCitas = () => {
  const allDates = useSelector((state: RootState) => state.dates.allDates);
  const initialValues: Cita = {
    nombrePropietario: '',
    nombreMascota: '',
    tipoServicio: '',
    tarifa: 0,
    fechaHora: '',
    observaciones: '',
  };

  const [formValues, handleOnChange, reset, changeRate] =
    useForm<Cita>(initialValues);
  const { error, handleSubmit, msg } = useSubmit({
    formValues,
    allDates,
    reset,
  });
  const {
    nombrePropietario,
    nombreMascota,
    tipoServicio,
    tarifa,
    fechaHora,
    observaciones,
  } = formValues;

  useEffect(() => {
    changeRate(tipoServicio);
    // eslint-disable-next-line
  }, [tipoServicio]);
  return (
    <FormContainer onSubmit={handleSubmit}>
      {error && (
        <Alert severity="error" data-testid="alerta">
          {msg}
        </Alert>
      )}
      <TextField
        type="text"
        id="outlined-required"
        label="Nombre del Propietario"
        variant="outlined"
        name="nombrePropietario"
        onChange={handleOnChange}
        value={nombrePropietario}
      />
      <TextField
        name="nombreMascota"
        onChange={handleOnChange}
        id="outlined-required"
        label="Nombre de la mascota"
        variant="outlined"
        value={nombreMascota}
      />
      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-age-native-simple">
          Tipo de servicio
        </InputLabel>
        <Select
          native
          name="tipoServicio"
          onChange={handleOnChange}
          value={tipoServicio}
        >
          <option aria-label="None" value="" />
          <option value="basico">Basico</option>
          <option value="regular">Regular</option>
          <option value="premium">Premium</option>
        </Select>
      </FormControl>
      <TextField
        InputProps={{
          readOnly: true,
        }}
        id="outlined-required"
        label="Tarifa"
        variant="outlined"
        name="tarfia"
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
        name="fechaHora"
        onChange={handleOnChange}
        value={fechaHora}
      />
      <TextField
        id="outlined-multiline-static"
        label="Observaciones"
        multiline
        variant="outlined"
        name="observaciones"
        onChange={handleOnChange}
        value={observaciones}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        data-testid="submit"
      >
        Guardar Citas
      </Button>
    </FormContainer>
  );
};
