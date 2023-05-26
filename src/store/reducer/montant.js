import {MONTANT,CAPITAL} from "../action/montant";
const initialState = {
   capitalList:[],
   montantList:[],
   NewCapitaList:[],
   NewMontantList:[],
}
const montantReducer = (state = initialState, action) =>{
    switch (action.type) {
       
        case CAPITAL:
            return {
                ...state,
                capitalList: action.payload.capitalList,
                NewCapitaList: action.payload.capitalList,

            };
            case MONTANT:
            return {
                ...state,
                montantList: action.payload.montantList,
                NewMontantList: action.payload.montantList,

            };
        default:
            return state;
    }
}
export default montantReducer;