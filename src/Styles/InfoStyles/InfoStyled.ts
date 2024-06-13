import styled from "styled-components";
import { commonCss } from "../CommonStyledProps";



const InfoWrapper = styled.div`
    ${commonCss}
    color: #fff;
    display: flex;
    align-items: baseline;
    justify-content: center;
    background-color: #3b3219;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #604800;
    box-sizing: border-box;
    

`

const InfoSvg = styled.span`
    &>svg {
    display: inline-block;
    color: #f5c400;
    font-size: 20px;

}
`

const InfoContent = styled.div`
    padding: 0px 10px;
`

const InfoContentHeading = styled.p`
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 5px;

`
const InfoContentDetails = styled.p`
    font-size: 16px;
`

export { InfoWrapper, InfoSvg, InfoContent, InfoContentHeading, InfoContentDetails}