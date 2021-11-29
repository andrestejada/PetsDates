import { Cita } from '../../feature/Citas/interfaces/index';
export const compareSameDates=(dates:Cita[],currentDate:Cita)=>{
    const current = new Date(currentDate.fechaHora).toLocaleDateString();
    let counter:number = 0;
    dates.map( ({fechaHora}) => {
        const date = new Date(fechaHora).toLocaleDateString();
        (current === date) && counter++;        
    });
    return counter;
};