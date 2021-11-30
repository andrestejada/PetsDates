import CardCitas from '../CardCitas/index';
import { Citas } from '../../../interfaces/index';
import { DatesContainer } from './styles';
import React from 'react';

interface Props{
    dates:Citas[]
}
const ContenedorCitas = ({dates}:Props) => {    
    return (
        <DatesContainer>
            {
                dates.map( (cita)=>(
                    <CardCitas
                        key={cita.id}
                        nombreMascota={cita.nombreMascota}
                        nombrePropietario={cita.nombrePropietario}
                        tarifa={cita.tarifa}
                        fechaHora={cita.fechaHora}
                        id={cita.id}
                        observaciones={cita.observaciones}
                        tipoServicio={cita.tipoServicio}                       
                    />
                ))
            }
        </DatesContainer>
    );
};

export default ContenedorCitas;
