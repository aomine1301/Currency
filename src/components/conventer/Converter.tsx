import * as React from 'react'
import classes from './conventer.module.css'
import {ConverterContainerProps} from "./ConverterContainer";



const Converter:React.FC<ConverterContainerProps> = ({getAllCurrency,currency})=>{

    return(
        <div className={classes.container}>
            <button onClick={()=>getAllCurrency}>click</button>

            <ul>
                {Object.keys(currency).map((k,idx)=>{
                    return(
                        <li key={idx}>{k}</li>
                    )
                })}
            </ul>

            Converter
        </div>
    )
}
export default Converter
