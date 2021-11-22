export const calcRate=(rate:string)=>{
    switch (rate) {
        case 'basico':
            return 10000 ;
        case 'regular':
            return 20000 ;
        case 'premium':
            return 30000 ;    
        default:
            return 0;
    }
};