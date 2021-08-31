import React, { useReducer } from 'react';

const reducer =(state,action)=>{
    switch(action.type){
        case 'increment':
            return {count:state.count +1}
        case 'decrement':
            return {count:state.count -1}
        default:
            return state
    }
}

function TestReducer (){
    const [state, dispatch]=useReducer(reducer,{count:0})
    const increment =()=>{
        dispatch({type:'increment'})
    }
    const decrement =()=>{
        dispatch({type:'decrement'})
    }
    return (
        <div>
            <button onClick={increment}>증가</button>
            <h1>{state.count}</h1>
            <button onClick={decrement}>감소</button>

        </div>
    )
}

export default TestReducer;