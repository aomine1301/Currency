import axios from 'axios'
import {CurrencyDataType} from "./typesAPI";

const API_KEY = 'wcQP8IKD2cKgy6gDajRCxZZSYryMid5s9uR5'
const instance = axios.create({
    // withCredentials: true,
    baseURL: `https://currencyapi.net/api/v1/currencies`,

})

// https://currencyapi.net/api/v1/currencies?key=wcQP8IKD2cKgy6gDajRCxZZSYryMid5s9uR5&output=JSON



export const API = {
    getAllCurrency() {
        return (
            axios.get<CurrencyDataType>
            (`https://currencyapi.net/api/v1/currencies
            ? key=wcQP8IKD2cKgy6gDajRCxZZSYryMid5s9uR5
            & output=JSON`)
                .then(res => {
                        console.log(res.data)
                    return res.data
                }
                )
        )
    }

}
