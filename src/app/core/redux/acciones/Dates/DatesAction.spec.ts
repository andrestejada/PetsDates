import { ADD_DATE, DatesDispatchTypes } from './DatesTypes';
import { SaveDate, addNewDate } from './DatesActions';
import thunk ,{ThunkDispatch} from 'redux-thunk';
import { FormCrearCitas } from '../../../../feature/Citas/components/FormularioCitas/index';
import createMockStore from 'redux-mock-store';



type DispatchExts = ThunkDispatch<State, void, DatesDispatchTypes>;

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = createMockStore<State,DispatchExts>(middlewares);

interface State{
    dates:{
        allDates:FormCrearCitas[]
    }
}
const initialState:State={
    dates:{
        allDates:[]
    }
};
const store = mockStore(initialState);

describe('testing action dates', () => {
    const newDate={
        nombrePropietario:'Juanito',
        nombreMascota:'coco',
        tipoServicio:'regular',
        tarifa:20000,
        fechaHora:'2021-12-01T16:00',
        observaciones:'Pelo corto',
    };
    it('action add new date', () => {
        const action = addNewDate(newDate);
        expect(action).toEqual({
            type:ADD_DATE,
            payload:newDate
        });
    });

    it('testing saveDate', async() => {

       await store.dispatch( SaveDate(newDate));
       const action = store.getActions();
       expect(action[0]).toEqual({
           type:ADD_DATE,
           payload:{
               ...newDate,
               id:expect.any(Number)
           }
       });
    });
});