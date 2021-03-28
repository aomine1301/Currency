import {createStore,combineReducers,applyMiddleware,compose} from'redux'
import thunkMiddleware from "redux-thunk"
import currencyReducer from "./reducers/valuteReducer";



const reducers =  combineReducers(
    {
        curReducer: currencyReducer,

    }
)

type RootReducerType = typeof reducers
export type appStateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))


