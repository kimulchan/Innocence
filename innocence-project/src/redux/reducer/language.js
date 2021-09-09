import { ADD_LANGUAGE } from "../actions/language";


const languageReducer=(state=[],action)=>{
    switch(action.type){
        case ADD_LANGUAGE:
            return [...state,action.path]
        default:
            return state;
    }
}

export default languageReducer