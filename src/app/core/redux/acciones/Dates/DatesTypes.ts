import { Citas} from '../../../../feature/Citas/interfaces/index';

export const ADD_DATE = 'ADD_DATE';
export const GET_ALL_DATES = 'GET_ALL_DATES';
export const DELETE_DATE = 'DELETE_DATE';

interface AccionAddDate {
  type: typeof ADD_DATE;
  payload: Citas;  
}
interface AccionGetDates {
  type: typeof GET_ALL_DATES;
  payload: Citas[];  
}

interface AcctionDeleteDate{
  type: typeof DELETE_DATE,
  payload:number
}
interface AccionDefaultState {  
  type: ''
}


export type DatesDispatchTypes  =
  | AcctionDeleteDate
  | AccionAddDate
  | AccionGetDates
  | AccionDefaultState;
 