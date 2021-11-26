import { Citas} from '../../../../feature/Citas/interfaces/index';

export const ADD_DATE = 'ADD_DATE';
export const GET_ALL_DATES = 'GET_ALL_DATES';

interface AccionAddDate {
  type: typeof ADD_DATE;
  payload: Citas;  
}
interface AccionGetDates {
  type: typeof GET_ALL_DATES;
  payload: Citas[];  
}

interface AccionDefaultState {  
  type: ''
}


export type DatesDispatchTypes  =
  | AccionAddDate
  | AccionGetDates
  | AccionDefaultState
 
