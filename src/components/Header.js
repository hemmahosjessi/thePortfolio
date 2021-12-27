import React from "react";
import { Link } from 'react-router-dom'
import { 
    MenuIcon,
    JesIcon,
} from 'utils/styles'


export const Header = () => {

    return (
        <>
            <MenuIcon src="../images/menuicon.svg" alt="menuicon"/>
            <Link  to='/'>
                <JesIcon>Jes.</JesIcon>
            </Link>
        </>
    )
}