import styled, { css } from "styled-components";
import { commonProps } from "../CommonStyledProps";
export interface ButtonProps extends commonProps{
  variant?: "text" | "outlined" | "contained";
}

export const BasicButtonStyles = css`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size:16px;
  border-radius: 0.25rem;
  text-align: center;
  text-decoration: none;
`;


//noraml button

const Btngbl = styled.button<ButtonProps>`


  ${BasicButtonStyles}

  width: ${(props) => (props.w ? props.w : "auto")};
  height: ${(props) => (props.h ? props.h : "auto")};

  background-color: ${(props) => {
    if (props.variant === "contained") {
      return props.bgColor ? props.bgColor : "#45648d";
    } else {
      return "transparent";
    }
  }};

  border: ${(props) => {
    if (props.variant === "outlined") {
      return `${props.bSize ? `${props.bSize}px` : `2px`} solid ${
        props.borderColor ? props.borderColor : "#45648d"
      }`;
    } else {
      return "none";
    }
  }};

  border-radius: ${(props) => (props.bRadius ? props.bRadius : "0.25rem")};

  color: ${(props) => (props.color ? props.color : "")};

  padding: 15px 32px;

  font-size: ${(props) => (props.fSize ? `${props.fSize}` : `16px`)};
  transition: all ${(props) => (props.transTime ? props.transTime : "0.3s")};


  &:hover {
        background-color: ${(props) =>
        props.hoverBgColor ? props.hoverBgColor : ""};
        color: ${(props) => (props.hoverColor ? props.hoverColor : "")};
        border-color: ${(props) =>props.hoverBorderColor ? props.hoverBorderColor : props.hoverBgColor};
    }
   
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.gapBw || 5}px;

  & > svg {
    font-size: ${(props) => props.svgSize || "16px"};
    color: ${(props) => props.svgColor || "white"};
    transition: transform 0.3s;
  }

  &:hover > svg {
    
    color: ${(props) => props.hoverSvgColor || props.hoverColor};
    ${(props) => {
       
      if (props.hoverAll) {
        return `transform:  translateX(${props.hoverMove}) rotate(${props.hoverRotate}) scale(${props.hoverScale})`;
      } else if (props.hoverRotate) {
        return `transform: rotate(${props.hoverRotate})`;
      } else if (props.hoverMove) {
        return `transform: translateX(${props.hoverMove})`;
      } else if (props.hoverScale) {
        return `transform: scale(${props.hoverScale})`;
      }

    }}
  }

  
    &&{
        ${(props) => props.customStyles}
    }


`;



export { Btngbl };
