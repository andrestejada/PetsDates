import { Button, Card, CardContent, Typography } from '@material-ui/core';
import { ButtonContainer, TextInformation } from './styles';
import { Citas } from '../../../interfaces/index';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react';
import { deleteDateByID } from 'app/core/redux/acciones/Dates/DatesActions';
import { useDispatch } from 'react-redux';



const CardCitas = ({
  id,
  nombreMascota,
  nombrePropietario,
  tarifa,
  tipoServicio,
  fechaHora,
  observaciones
}: Citas) => {
  const dispatch = useDispatch();
  return (
    <>
      <Card>
        <CardContent>
          <Typography>
            Nombre de la Mascota:
            <TextInformation>{nombreMascota}</TextInformation>
          </Typography>
          <Typography>
            Nombre del Propietario:
            <TextInformation>{nombrePropietario}</TextInformation>
          </Typography>
          <Typography>
            Tipo de servicio
            <TextInformation> {tipoServicio} {`($${tarifa})`}</TextInformation>
          </Typography>
          <Typography>
            Fecha y Hora:
            <TextInformation>{fechaHora}</TextInformation>
          </Typography>
          <Typography>
            Observaciones:
            <TextInformation>{observaciones}</TextInformation>
          </Typography>
          <ButtonContainer>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
              onClick={()=>dispatch(deleteDateByID(id))}
            >
              Borrar
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<EditIcon />}
            >
              Editar
            </Button>
          </ButtonContainer>
        </CardContent>
      </Card>
    </>
  );
};

export default CardCitas;
