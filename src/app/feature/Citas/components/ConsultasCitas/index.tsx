import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContenedorCitas from './ContenedorCitas/index';
import { RootState } from '../../../../core/redux/reductores/index';
import { getDates } from '../../../../core/redux/acciones/Dates/DatesActions';


const ConsultarCitas = () => {
    const {allDates} = useSelector((state:RootState) => state.dates);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDates());
    }, [dispatch]);
    
    return (
        <>
            <ContenedorCitas
                dates={allDates}
            />
        </>
    );
};

export default ConsultarCitas;
