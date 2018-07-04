import {username,password} from './secrets';
export const EXPORT_MEMES ='get_memes';
export const NEW_MEME='NEW_MEME';
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
export function newMeme(meme){
    return {
        type:NEW_MEME,
        meme
    }

}
function postMemeJson(params){
    params["username"]=username;
    params["password"]=password;
    const bodyParams =Object.keys(params).map(key=>{
        return encodeURIComponent(key) + '=' +encodeURIComponent(params[key])
    }).join('&');

    return fetch('https://api.imgflip.com/caption_image',{
        method: "POST",
        headers:{
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body: bodyParams

    }).then(response=>response.json());
}
export function createMeme(new_object){
    return function(dispatch){
        return postMemeJson(new_object)
        .then(newmeme=>dispatch(newMeme(newmeme)))
    }
}
