import { Cita } from '../../feature/Citas/interfaces/index';
export const compareSameDates=(dates:Cita[],currentDate:Cita)=>{
    const current = new Date(currentDate.fechaHora).toLocaleDateString();
    let counter = 0;
    dates.forEach( ({fechaHora}) => {
        const date = new Date(fechaHora).toLocaleDateString();
        (current === date) && counter++;        
    });
    return counter;
};
