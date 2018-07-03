export const EXPORT_MEMES ='get_memes';
function recmeme(json){
    const {memes}=json.data;
    return{
        type:EXPORT_MEMES,
        memes
    };
}
function fetchmemes(){
    return fetch('https://api.imgflip.com/get_memes')
    .then(data=> data.json())
}
export function fetchJson(){
    return function(dispatch){
        return fetchmemes()
        .then(json=>dispatch(recmeme(json)))
    }
}