import { FormCrearCitas } from 'app/feature/Citas/components/FormularioCitas';

export const ADD_DATE = 'ADD_DATE';

interface AccionAddDate {
  type: typeof ADD_DATE;
  payload: FormCrearCitas;  
}

interface AccionDefaultState {  
  type: ''
}


export type DatesDispatchTypes  =
  | AccionAddDate
  | AccionDefaultState
 
