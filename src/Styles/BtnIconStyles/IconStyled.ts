import styled, { css, keyframes } from "styled-components";

import { commonProps, commonStyles } from "../CommonStyledProps";
export interface IconProps extends commonProps {
  variant?: "text" | "outlined" | "contained";
  type?: "error" | "success" | "warning" | "casual";

  pulseAnimation?: boolean;

  pulseBgColor?: string;
}


const pulse = keyframes`
  100%{
    transform: scale(1.5);
    opacity: 0;
  }

`;


export const BtnIconWrapper = styled.button<IconProps>`

  width: ${(props) => (props.w ? props.w : "75px")};
  height: ${(props) => (props.h ? props.h : "75px")};

  background-color: ${(props) => {

      switch(props.type){
        case 'error':
          return'#e74034'
        case 'success':
          return '#66bb6a'
        case 'warning':
          return '#f5c400'
        default:
          props.bgColor
      }

  }};

  border: ${(props) => {
    if (props.variant === "outlined") {
      return `2px solid ${
        props.bgColor ? props.bgColor : "#45648d"
      }`;
    } else {
      return "none";
    }
  }};

  border-radius: ${(props) => (props.bRadius ? props.bRadius : "50%")};
 padding: ${(props) => (props.padding ? props.padding : '15px')};
  
position: relative;

  
  &::before, &::after{
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${props => props.pulseBgColor ? props.pulseBgColor : ''};
    position: absolute;
    top: 0;
    left:0;
    z-index: -1;
    animation: ${(props) => props.pulseAnimation ? pulse : ''} 1.5s infinite;
  }
  &::after{
    animation-delay: 0.75s;
  }




  display: flex;
  justify-content:center;
  align-items:center;

  :hover {
    background-color: ${(props) =>{
      switch(props.type){
        case 'error':
          return'#e74034'
        case 'success':
          return '#66bb6a'
        case 'warning':
          return '#f5c400'
        default:
          props.bgColor || "#45648d"
      }
    }};
    color: ${(props) => (props.hoverColor ? props.hoverColor : "")};
  }



  & > svg {
    font-size: ${(props) => props.svgSize || "28px"};

    color: ${(props) => props.svgColor || ""};

    transition: transform 0.3s;
  }


`;


