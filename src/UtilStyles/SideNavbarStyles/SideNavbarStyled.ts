import styled from "styled-components";
import { commonCss, commonProps } from "../../Styles/CommonStyledProps";

interface SidebarProps extends commonProps {
    openBar: boolean;
}

const SidebarContainer = styled.div<SidebarProps>`
    ${commonCss}
    background-color: ${(props) => {
        return props.bgColor || '#020617'
    }};

    color: #fff;
    height: 80vh;
    box-sizing: border-box;
    transition: all 0.25s ease ;
    width: ${({ openBar }) => (openBar ? '250px' : 'fit-content')};
    
    * > svg{
        font-size: 1.85rem;
        color: #fff;
    }
    border-radius: 0.5rem;
`;

const SidebarWrapper = styled.div<SidebarProps>`
    ${commonCss}
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

`;

const SidebarHeader = styled.div`

    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    
`;
const SidebarLogo = styled.div`
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
`;
const SidebarClose = styled.div<SidebarProps>`
    position: absolute;
    right: 0;
    display: ${({ openBar }) => (openBar ? 'block' : 'none')};
    cursor: pointer;
    
`;
const SidebarMenu = styled.div`
    display: flex;
    flex-direction: column;
   
`;


const SidebarLink = styled.a<commonProps>`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    text-decoration: none;
    color: #fff;
    transition: 0.3s;
    /* padding: 0 1rem; */
    margin: 0.25rem 0;
    justify-content: space-between;
    position: relative;
`;


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
const SidebarLinkLabel = styled.p<SidebarProps>`
    position: absolute;
    font-size: 1.5rem;
    color: #fff;
    box-sizing: border-box;
    
    margin: 0;
    right:0%;
    transition: all 0.25s ease ;


    opacity: ${({ openBar }) => (openBar ? '0.5' : '0')};
    display: ${({ openBar }) => (openBar ? 'block' : 'none')};
    z-index: 0;


`;


const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
const SidebarButton = styled.button<commonProps>`
    ${commonCss}
    background-color: none;
    background: none;
    border: none;
    cursor: pointer;
`;


export { SidebarContainer, SidebarWrapper, SidebarHeader, SidebarMenu, SideBtnWrap, SidebarLink, SidebarButton , SidebarClose, SidebarLogo, SidebarSvg, SidebarLinkLabel}
