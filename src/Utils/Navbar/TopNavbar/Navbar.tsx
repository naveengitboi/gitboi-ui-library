
import React from 'react';
import { NavbarButton, NavbarButtonGroup, NavbarContainer, NavbarDropDownItem, NavbarLogo, NavbarLogoText, NavbarMenu, NavbarMenuItem, NavbarWrapper } from '../../../UtilStyles';



const Navbar = () => {

    return (
        <NavbarContainer fontWeight={500}>
            <NavbarWrapper seperationType='trisect'>
                <NavbarLogo>
                    <NavbarLogoText>GitBoi</NavbarLogoText>
                </NavbarLogo>
                
                <NavbarMenu>
                    <NavbarMenuItem >Home</NavbarMenuItem>
                    <NavbarMenuItem>About</NavbarMenuItem>
                    <NavbarDropDownItem>Services</NavbarDropDownItem>
                    <NavbarMenuItem>Contact</NavbarMenuItem>
                    <NavbarMenuItem>Contact</NavbarMenuItem>
                </NavbarMenu>

                <NavbarButtonGroup>
                    <NavbarButton>Sign In</NavbarButton>
                    <NavbarButton>Sign In</NavbarButton>
                </NavbarButtonGroup>

            </NavbarWrapper>
        </NavbarContainer>
    )
}

export default Navbar;