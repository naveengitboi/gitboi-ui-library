
import React from 'react';
import { NavbarButton, NavbarButtonGroup, NavbarContainer, NavbarDropDownItem, NavbarLogo, NavbarLogoText, NavbarMenu, NavbarMenuItem, NavbarWrapper } from '../../../UtilStyles';



import Button from '../../../components/Button'

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
                    <Button variant='contained' margin='0 10px' >Sign Up</Button>
                </NavbarButtonGroup>

            </NavbarWrapper>
        </NavbarContainer>
    )
}

export default Navbar;