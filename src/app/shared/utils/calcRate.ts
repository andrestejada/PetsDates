export const calcRate=(rate:string)=>{
    const basicValue = 10000;
    const regularValue = 20000;
    const premiumValue = 30000;
    switch (rate) {
        case 'basico':
            return basicValue ;
        case 'regular':
            return regularValue ;
        case 'premium':
            return premiumValue ;    
        default:
            return 0;
    }
};
