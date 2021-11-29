import { Cita, Citas } from '../../../feature/Citas/interfaces/index';
import { compareSameDates } from '../compareSameDates';

export const ValidateQuantityDates =(date:Cita,allDates:Citas[])=>{
    const quantityOfDates = compareSameDates(allDates,date);
    if(quantityOfDates < 5){
        return false;
    }else{
        return true;
    }        
};

