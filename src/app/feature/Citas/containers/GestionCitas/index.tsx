import ConsultarCitas from '../../components/ConsultasCitas/index';
import { FormularioCitas } from '../../components/FormularioCitas/index';
import Grid from '@material-ui/core/Grid';
import React from 'react';

export const GestionCitas = () => {
    return (
        <>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <h2>Gestiona tus citas</h2>
                <FormularioCitas/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <h2>Consulta tus citas</h2>
                <ConsultarCitas/>
            </Grid>
        </Grid>
        </>
    );
};
