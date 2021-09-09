import { ADD_CATEGORY } from "../actions/category";

const categoryReducer =(state=[],action)=>{
    switch(action.type){
        case ADD_CATEGORY:
            return [...state,action.category];
        default:
            return state;
    }
}

export default categoryReducer;