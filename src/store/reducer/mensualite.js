import {TABLE,MENSUALITE} from "../action/mensualite";
const initialState = {
   List:[],
   NewList:[],
   Table:[],
}
const mensualiteReducer = (state = initialState, action) =>{
    switch (action.type) {
       
        case MENSUALITE:
            return {
                ...state,
                List: action.payload.List,
                NewList: action.payload.List,

            };
            case TABLE:
                return {
                 
                    ...state,
                    Table: action.payload.table,
    
                };
        default:
            return state;
    }
}
export default mensualiteReducer;