import { Provider } from 'react-redux'
import { createStore,combineReducers } from 'redux'
import categoryReducer from './reducer/category';
import languageReducer from './reducer/language';
import lectureReducer from './reducer/lectureReducer';
import AllRouter from '../Route';
const rootReducer = combineReducers({categoryReducer,languageReducer,lectureReducer});

const store = createStore(rootReducer);
const index=()=>{
    return (
        <Provider store={store}>
            <AllRouter></AllRouter>
        </Provider>
    );
}

export default index;