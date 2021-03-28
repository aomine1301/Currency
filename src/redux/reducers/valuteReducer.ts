import {appStateType} from "../store";
import {ThunkAction} from 'redux-thunk'
import {StatusEnum} from "./typesReducer";
import {CurrencyBodyType, CurrencyType} from "../../axios/typesAPI";
import {API} from "../../axios/allCurrencyAPI";

const CURRENCY_LOADED = 'CURRENCY_LOADED'

type CURRENCY_LOADED = {
    type: typeof CURRENCY_LOADED
    payload: any
}

export type ActionsTypeCurrencyReducer = CURRENCY_LOADED

type ThunkType = ThunkAction<Promise<void>, appStateType, unknown, ActionsTypeCurrencyReducer>

type getStateType = () => appStateType

// type StateType = {
//     defaultCurrency: string
//     currency: CurrencyType | null
// }

const initialState = {
    currency: [] as Array<CurrencyType>
}
export type InitialStateCurrencyReducerType = typeof initialState

const currencyReducer = (state = initialState, action: ActionsTypeCurrencyReducer)
    :InitialStateCurrencyReducerType => {
    switch (action.type) {
        case CURRENCY_LOADED:
            return {
                currency: {...action.payload}
            }
        default:
            return state
    }

    return state

}
//action
export const setAllCurrency = (currencies:CurrencyType):ActionsTypeCurrencyReducer => ({
    type: CURRENCY_LOADED,
    payload:currencies
})

//thunk
export const getAllCurrency = ():ThunkType =>
    async (dispatch
           ,getState:getStateType) => {

        let currencyData;
        currencyData = await API.getAllCurrency()
        if (currencyData.valid === true) {
            let currencies = currencyData.currencies
            dispatch(setAllCurrency(currencies))
        }

}
export default currencyReducer
