import * as React from "react";
import classes from './header.module.css'
import {Link} from 'react-router-dom'


const Header = () => {
    return (
        <div className={classes.container}>
            <Link to="/main">Главная</Link>
            <Link to="/conv">Конветер</Link>
            <Link to="/info">Информация о компании</Link>
        </div>
    )
}

export default Header
