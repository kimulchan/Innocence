import { Provider } from 'react-redux'
import { createStore,combineReducers } from 'redux'

import UserRouter from '../Route/userRouter';
const rootReducer = combineReducers({});

const index=()=>{
    return (
        <Provider store={createStore(rootReducer)}>
            <UserRouter></UserRouter>
        </Provider>
    );
}