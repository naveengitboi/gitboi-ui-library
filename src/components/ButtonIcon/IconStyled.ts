import styled, { css } from "styled-components";


export interface IconProps {
  variant?: "text" | "outlined" | "contained";
  type?: "error" | "success" | "warning" | "casual";
  bgColor?:string;
  bRadius?: string;
  pd?: string;

  hoverBgColor?: string;
  hoverColor?: string;
  width?: string;
  height?: string;


  svgSize?: string;
  svgColor?: string;
  hoverSvgColor?: string;
  hoverRotate?: string;
  hoverMove?: string;
  hoverAll?: boolean;
  hoverScale?: string;
}

export const BtnIconWrapper = styled.button<IconProps>`

  width: ${(props) => (props.width ? props.width : "75px")};
  height: ${(props) => (props.height ? props.height : "75px")};

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

  padding: ${(props) => (props.pd ? props.pd : '15px')};
  



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
