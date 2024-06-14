import styled from "styled-components";
import { commonCss } from "../CommonStyledProps";
import { commonProps } from "../../Styles/CommonStyledProps";

export interface InfoTextProps extends commonProps{
    code?:string,
    svg?: React.ReactNode;
    heading?: string;
    content?: string;
    type?: 'error' | 'warning' |'success' | 'note'   
}


const InfoWrapper = styled.div`
    ${commonCss}
    color: #fff;
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    padding: 20px;
    border-radius: 10px;
    box-sizing: border-box;
    width: fit-content;

    

    border: 1px solid #604800;
    background-color: #3b3219;
    
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