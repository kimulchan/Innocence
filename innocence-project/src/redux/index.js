import { Provider } from 'react-redux'
import { createStore,combineReducers } from 'redux'

import UserRouter from '../Route/userRouter';
const rootReducer = combineReducers({});

const store = createStore(rootReducer);
const index=()=>{
    return (
        <Provider store={store}>
            <UserRouter></UserRouter>
        </Provider>
    );
}