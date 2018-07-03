import {combineReducers} from 'redux';
import {EXPORT_MEMES} from '../action/index'; 
function memes(state=[],action){
    switch(action.type){
        case EXPORT_MEMES:
          return action.memes;
        default:
          return state;
    }
}
const rootReducer =combineReducers({
    memes
});
export default rootReducer;