export const validateWeekend=(date:string)=>{
    const dayOfWeekeen = 6 | 0 ;
    const currentDate = new Date(date);    
    if(currentDate.getDay() === dayOfWeekeen){   
        return true;
    }else{
        return false;
    }
};
