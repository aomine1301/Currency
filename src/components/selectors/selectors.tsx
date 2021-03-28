import {appStateType} from "../../redux/store";

export const getCurrency = (state:appStateType) => {
    return state.curReducer.currency
}
