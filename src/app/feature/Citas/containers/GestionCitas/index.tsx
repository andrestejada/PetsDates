import { FormularioCitas } from '../../components/FormularioCitas/index';
import Grid from '@material-ui/core/Grid';
import React from 'react';

export const GestionCitas = () => {
    return (
        <>
        <h1>Gestiona tus citas</h1>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <FormularioCitas/>
            </Grid>
            <Grid item xs={12} sm={6}>
            consultas
            </Grid>
        </Grid>
        </>
    );
};
