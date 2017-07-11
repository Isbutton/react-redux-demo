import { createStore } from 'redux';
import reducer from '../reducers';

export default function configureStore(initialState){
    const store = createStore(reducer,initialState);
    if(module.hot){
        module.hot.accept('../reducers',()=>{
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer);
        })
    }
    return store;
}