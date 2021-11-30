import Alert from '@material-ui/lab/Alert';
import React from 'react';

export const SinCitas = () => {
    return (
        <>
         <Alert severity="info" data-testid='alert' >No hay citas aun, empieza creando una</Alert>   
        </>
    );
};
