export const validateWeekend=(date:string)=>{
    const saturday =6 ;
    const sunday = 0;
    const dayOfWeekeen = saturday | sunday ;
    const currentDate = new Date(date);    
    if(currentDate.getDay() === dayOfWeekeen){   
        return true;
    }else{
        return false;
    }
};
