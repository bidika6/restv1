import React from "react";
import { MenuIcon, Nav, NavIcon, NavLink} from "./NavbarElements";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({toggle}) => {

    return (

<>
    <Nav>
        <NavLink to = '/'>Natraj Indian Cuisine</NavLink>
        <NavIcon onClick = {toggle}>
<MenuIcon>
            <GiHamburgerMenu />
</MenuIcon>


        </NavIcon>
    </Nav>
</>


    )
}

export default Navbar;
