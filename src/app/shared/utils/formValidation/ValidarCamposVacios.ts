
export const validateEmptyInputs =<T extends Object>(inputValues:T):boolean =>{
    const objectValues = Object.values(inputValues);
    const compareValues= objectValues.map( (value)=> value === '' ? true : false);
    return compareValues.includes(true);
};
