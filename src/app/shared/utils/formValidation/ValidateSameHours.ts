import { Cita,Citas } from '../../../feature/Citas/interfaces/index';
export const validateSameHours =(newDate:Cita,allDates:Citas[])=>{
    const addNewDate = new Date(newDate.fechaHora).getTime();
    const miliseconds = 1000;
    const seconds = 60;
    const minutes =60;
    const hours = 2;
    const convertValue = hours * minutes * seconds * miliseconds;
    const resp = allDates.map( ({fechaHora}) =>{
        const currentDate = new Date(fechaHora).getTime();
        const currentAddHours = new Date(currentDate + convertValue).getTime();
        if( addNewDate >= currentDate && addNewDate <= currentAddHours){
            return true;
        }else{
            return false;
        }       
    });
    return resp.includes(true);
};
