export const validateWeekend=(date:string)=>{
    const currentDate = new Date(date);    
    if(currentDate.getDay() === 6 || currentDate.getDay() === 0 ){   
        return true;
    }else{
        return false;
    }
};