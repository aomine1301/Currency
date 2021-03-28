import * as React from "react";
import Converter from "./Converter";
import {connect} from "react-redux";
import {getAllCurrency} from "../../redux/reducers/valuteReducer";

import {appStateType} from "../../redux/store";
import {getCurrency} from "../selectors/selectors";
import {CurrencyType} from "../../axios/typesAPI";


type mapStateProps = {
    currency: Array<CurrencyType>
}
type mapDispatchProps = {
    getAllCurrency: () => void

}
export type ConverterContainerProps = mapDispatchProps & mapStateProps

const ConverterContainer: React.FC<ConverterContainerProps> = ({getAllCurrency, currency}) => {

    console.log(currency)
    return (
        <Converter getAllCurrency={getAllCurrency} currency={currency}/>
    )
}
let mapState = (state: appStateType): mapStateProps => {
    return {
        currency: getCurrency(state)
    }
}

export default connect<mapStateProps, mapDispatchProps, {}, appStateType>
(mapState, {getAllCurrency})
(ConverterContainer)
