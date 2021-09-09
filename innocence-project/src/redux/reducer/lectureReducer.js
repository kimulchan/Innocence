import { ADD_LECTURE } from "../actions/lecture";

const lectureReducer=(state=[],action)=>{
    switch(action.type){
        case ADD_LECTURE:
            return [...state,action.path]
        default:
            return state;
    }
}

export default lectureReducer;