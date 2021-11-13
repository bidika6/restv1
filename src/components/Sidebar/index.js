import React from "react"
import {
    SidebarLink,
    SidebarRoute,
    SideBtnWrap,
    SidebarContainer,
    SidebarMenu,
    CloseIcon,
    Icon
} from "./SidebarElements";


const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick = {toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to ='/'>Menu</SidebarLink>
                <SidebarLink to ='/'>Contact</SidebarLink>
                <SidebarLink to ='/'>Reviews</SidebarLink>
                <SidebarLink to ='/'>Reservations</SidebarLink>
            </SidebarMenu>
<SideBtnWrap>
    <SidebarRoute to='/'>Order Now</SidebarRoute>
</SideBtnWrap>
        </SidebarContainer>
    )
};


export default Sidebar;
