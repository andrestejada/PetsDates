import CardCitas from '../CardCitas/index';
import { Citas } from '../../../interfaces/index';
import { DatesContainer } from './styles';
import React from 'react';
import { SinCitas } from '../SinCitas';

interface Props{
    dates:Citas[]
}
const ContenedorCitas = ({dates}:Props) => {    
    return (
        <DatesContainer>
            {
                dates.length                  
                ?dates.map( (cita)=>(
                    <CardCitas
                        key={cita.id}
                        {...cita}                       
                    />
                ))
                :<SinCitas/>
            }
        </DatesContainer>
    );
};

export default ContenedorCitas;
