import React from "react";

import { MdAdd, MdAppRegistration, MdClose, MdDashboard, MdDelete, MdHome, MdMenu } from "react-icons/md";

import { SidebarContainer, SidebarWrapper, SidebarHeader, SidebarMenu, SidebarLink, SideBtnWrap, SidebarButton } from "../../../UtilStyles";
import styled from "styled-components";


const SidebarLogo = styled.div`
    padding: 0.5rem;
    border-radius: 5px;
`
const SidebarSvg = styled.div`
    border-radius: 5px;
    box-sizing: border-box;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    background-color: #1e293b;
    color:#f5f9f4;

    
`
const SidebarLinkLabel = styled.p`
    position: absolute;
    font-size: 1.5rem;
    color: #fff;
    box-sizing: border-box;
    margin: 0;
    right:0%;
    

`;
const SidebarClose = styled.div`
    position: absolute;
    right: 0;
`;
const SideNav = () => {
    return(
        <SidebarContainer>
            <SidebarWrapper>
                <SidebarHeader>
                    <SidebarLogo>
                        <MdHome/>
                    </SidebarLogo>
                    
                    <SidebarClose>
                        <MdClose/>
                    </SidebarClose>
                </SidebarHeader>
                <SidebarMenu>
                    <SidebarLink href='#'>
                        <SidebarSvg>
                            <MdHome/>
                        </SidebarSvg>
                        <SidebarLinkLabel>
                            Home
                        </SidebarLinkLabel>
                    </SidebarLink>
                    <SidebarLink href='#'>
                        <SidebarSvg>
                            <MdDashboard/>
                        </SidebarSvg>
                        <SidebarLinkLabel>
                            Dashboard
                        </SidebarLinkLabel>
                    </SidebarLink>
                    <SidebarLink href='#'>
                        <SidebarSvg>
                            <MdAdd/>
                        </SidebarSvg>
                        <SidebarLinkLabel>
                            MdAdd
                        </SidebarLinkLabel>
                    </SidebarLink>
                    <SidebarLink href='#'>
                        <SidebarSvg>
                            <MdDelete/>
                        </SidebarSvg>
                        <SidebarLinkLabel>
                            Delete
                        </SidebarLinkLabel>
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarButton >
                        <SidebarSvg>
                            <MdAppRegistration/>
                        </SidebarSvg>
                    </SidebarButton>
                    <SidebarButton >
                        <SidebarSvg>
                            <MdAppRegistration/>
                        </SidebarSvg>
                    </SidebarButton>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SideNav;