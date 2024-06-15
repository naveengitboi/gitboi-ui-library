import styled from "styled-components";
import { commonCss, commonProps } from "../../Styles/CommonStyledProps";


const SidebarContainer = styled.div`
    ${commonCss}
    background-color: #020617;
    color: #fff;
    height: 80vh;
    box-sizing: border-box;
    width: 280px;

    * > svg{
        font-size: 1.85rem;
        color: #fff;
    }
`;

const SidebarWrapper = styled.div`
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

const SidebarMenu = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;


`;


const SidebarLink = styled.a<commonProps>`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    text-decoration: none;
    color: #fff;
    transition: 0.3s;
    padding: 0 1rem;
    margin: 0.25rem 0;
    justify-content: space-between;
    position: relative;
    border: 2px solid red;
`;

const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;

`;
const SidebarButton = styled.button<commonProps>`
    ${commonCss}
    background-color: none;
    background: none;
    border: none;
    cursor: pointer;
`;


export { SidebarContainer, SidebarWrapper, SidebarHeader, SidebarMenu, SideBtnWrap, SidebarLink, SidebarButton }
