import React from "react";
import {Bars, Nav, NavIcon, NavLink} from "./NavbarElements";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {

    return (

<>
    <Nav>
        <NavLink to = '/'>Natraj Indian Cuisine</NavLink>
        <NavIcon>
            <p>Menu</p>
            <GiHamburgerMenu />

        </NavIcon>
    </Nav>
</>


    )
}

export default Navbar;
