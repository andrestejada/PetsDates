import { Cita, Citas } from '../../../feature/Citas/interfaces/index';
import { compareSameDates } from '../compareSameDates';

export const validateQuantityDates =(date:Cita,allDates:Citas[])=>{
    const maxQuanityDates=5;
    const quantityOfDates = compareSameDates(allDates,date);
    if(quantityOfDates < maxQuanityDates){
        return false;
    }else{
        return true;
    }        
};
