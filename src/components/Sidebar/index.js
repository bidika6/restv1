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
                <SidebarLink href ='#Menu'>Menu</SidebarLink>
                <SidebarLink href ='#Featured'>Featured items</SidebarLink>
                <SidebarLink to ='/'>Reviews</SidebarLink>
                <SidebarLink href ='#reservations'>Reservations</SidebarLink>
            </SidebarMenu>
<SideBtnWrap>
    <SidebarRoute to='/'>Order Now</SidebarRoute>
</SideBtnWrap>
        </SidebarContainer>
    )
};


export default Sidebar;
