
import styled from "styled-components";

import { commonCss, commonProps, commonStyles } from "../../Styles/CommonStyledProps";

import { BasicButtonStyles } from "../../Styles/ButtonStyles/ButtonStyled";

interface NavbarProps extends commonProps{
   type?: "fixed" | "static";
   seperationType?: 'bisect' | 'trisect';
    children?: React.ReactNode;
    logo?: string;
}

const NavbarContainer = styled.div<NavbarProps>`
    ${commonCss}
    ${commonStyles}
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => (props.bgColor ? props.bgColor : "#151d20")};
    color: ${(props) => (props.color ? props.color : "#90caf9")};
    position: ${(props) => (props.type === "fixed" ? "fixed" : "static")};

    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};

    z-index: 1000;
    top: 0;
    left: 0;
    transition: all 0.3s;
    margin: 0;
    box-sizing: border-box;
`

const NavbarWrapper = styled.div<NavbarProps>`

    
    
    display: flex;
    align-items: center;
    justify-content: ${(props) => (props.seperationType === 'trisect' ? 'space-between' : 'start')};
    width: 100%;
    padding:0 2rem;
`

const NavbarLogo = styled.div<NavbarProps>`
    font-size: 24px;
    font-weight: 600;
`
const NavbarLogoText = styled.p<NavbarProps>`
    color: #90caf9;

`

const NavbarMenu = styled.ul<NavbarProps>`
    display: flex;
    list-style: none;
    margin-left: 20px;
`

const NavbarMenuItem = styled.li<NavbarProps>`
    margin: 0 10px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        color: ${(props) => (props.hoverColor ? props.hoverColor : "#fff")};
        text-decoration: underline;
    }
`

const NavbarDropDownItem = styled(NavbarMenuItem)`
    position: relative;
    &:hover {
        & ul {
            display: block;
        }
    }
`

const NavbarButtonGroup = styled.div<NavbarProps>`
    display: flex;
`

const NavbarButton = styled.button<NavbarProps>`
    ${BasicButtonStyles}
   
    box-sizing: border-box;
    transition: all 0.3s;
    &:hover {
        background-color: #45648d;
    }
`



export {NavbarContainer, NavbarWrapper, NavbarLogo, NavbarMenu, NavbarMenuItem, NavbarDropDownItem, NavbarButtonGroup, NavbarButton, NavbarLogoText} 