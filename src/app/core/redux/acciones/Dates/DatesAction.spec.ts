import { ADD_DATE, DatesDispatchTypes, GET_ALL_DATES } from './DatesTypes';
import {GetDates, SaveDate, addNewDate, getAllDates,} from './DatesActions';
import thunk ,{ThunkDispatch} from 'redux-thunk';
import { Citas } from '../../../../feature/Citas/interfaces/index';
import createMockStore from 'redux-mock-store';



type DispatchExts = ThunkDispatch<State, void, DatesDispatchTypes>;

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = createMockStore<State,DispatchExts>(middlewares);

interface State{
    dates:{
        allDates:Citas[]
    }
}
const initialState:State={
    dates:{
        allDates:[]
    }
};
let store = mockStore(initialState);
describe('testing action dates', () => {
    beforeEach(()=>{
        store = mockStore(initialState);
    });
    const newDate={        
        nombrePropietario:'Juanito',
        nombreMascota:'coco',
        tipoServicio:'regular',
        tarifa:20000,
        fechaHora:'2021-12-01T16:00',
        observaciones:'Pelo corto',
    };
    const DateWithID={ 
        id:123456,       
        nombrePropietario:'Juanito',
        nombreMascota:'coco',
        tipoServicio:'regular',
        tarifa:20000,
        fechaHora:'2021-12-01T16:00',
        observaciones:'Pelo corto',
    };
    it('testing the sync action addNewDate', () => {
        const action = addNewDate(DateWithID);
        expect(action).toEqual({
            type:ADD_DATE,
            payload:DateWithID
        });
    });

    it('testing async action saveDate', async() => {

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

    it('testing sync action getAllDates', () => {
        const action = getAllDates([DateWithID,DateWithID]);
        
        expect(action).toEqual({
            type:GET_ALL_DATES,
            payload:[DateWithID,DateWithID]
        });
    });

    it('testing async action getAllDates', async() => {

        await store.dispatch( GetDates());
        const action = store.getActions();
        expect(action[0]).toEqual({
            type:GET_ALL_DATES,
            payload:expect.any(Array)
        });
     });
});