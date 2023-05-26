import axios from "axios";
export const MENSUALITE ='MENSUALITE';
export const MONTANT ='MONTANT';
export const TABLE ='TABLE';

export const getMensualite = () => {
    return async (dispatch) =>{
        const response = await axios.get('http://127.0.0.1:8000/api/list-mensualite')
        dispatch({type:MENSUALITE,payload:{List:response.data}})
    };
  
}
export const AddMensualite= (duree,taux,capital) => {
    return async () =>{
        let formData  = new FormData();
        formData.append("duree", duree);
        formData.append("taux_interet_annuel",taux);
        formData.append("capital",capital);
        console.log(formData);
        const response = await axios({
            method: "POST",
            url: `http://127.0.0.1:8000/api/monsualite`,
             data: formData,
             "Content-Type": "multipart/form-data" 
            })
    
    };
}
export const getTable = (id) => {
    return async (dispatch,getState) =>{
        const response = await axios.get(`http://127.0.0.1:8000/api/table/${id}`)
        dispatch({type:TABLE,payload:{table:response.data}});
    };
}