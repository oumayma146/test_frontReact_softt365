import axios from "axios";
export const CAPITAL ='CAPITAL';
export const MONTANT ='MONTANT';

export const getCapital = () => {
    return async (dispatch) =>{
        const response = await axios.get('http://127.0.0.1:8000/api/capital')
        dispatch({type:CAPITAL,payload:{capitalList:response.data}});
    };
}
export const getMontant = () => {
    return async (dispatch) =>{
        const response = await axios.get('http://127.0.0.1:8000/api/list-montant')
        dispatch({type:MONTANT,payload:{montantList:response.data}});
    };
}

export const AddMontant= (montant,fond) => {
    return async () =>{
        let formData  = new FormData();
        formData.append("montant_achat", montant);
        formData.append("fonds_propre",fond);
        const response = await axios({
            method: "POST",
            url: `http://127.0.0.1:8000/api/calcule`,
             data: formData,
             "Content-Type": "multipart/form-data" 
            })
    
    };
}

