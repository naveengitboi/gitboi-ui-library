import { css } from "styled-components";

export interface commonProps {
  color?: string;
  customStyles?: any;
  fSize?: string;
  bSize?: number;
  bgColor?: string;
  borderColor?: string;
  hoverBgColor?: string;
  hoverColor?: string;
  bRadius?: string;
  transTime?: string;
  hoverBorderColor?: string;
  w?: string;
  h?: string;
  svgSize?: string;
  svgColor?: string;
  hoverRotate?: string;
  hoverMove?: string;
  hoverAll?: boolean;
  hoverScale?: string;
  gapBw?: number;
  hoverSvgColor?: string;
  margin?: string;
  padding?: string;
  fontWeight?:number;


  animationDuration?:string;
  

  activeBlendMode?:Boolean;
  blendMode?:string;
}


export const commonCss = css`
  box-sizing: border-box;
`

export const commonStyles = css<commonProps>`

  color: ${(props) => (props.color ? props.color : "blue")};
  font-size: ${(props) => (props.fSize ? props.fSize : "16px")};

  background-color: ${(props) => (props.bgColor ? props.bgColor : "")};

  border: ${(props) => (props.bSize ? `${props.bSize}px solid ${props.borderColor}` : "none")};

  border-radius: ${(props) => (props.bRadius ? props.bRadius : "0")};

  transition: ${(props) => (props.transTime ? props.transTime : "all 0.3s")};

  width: ${(props) => (props.w ? props.w : "auto")};

  height: ${(props) => (props.h ? props.h : "auto")};

  cursor: pointer;

  padding: ${(props) => (props.padding ? props.padding : "0")};



  animation-duration:${(props) => (props.animationDuration ? props.animationDuration : "1s")};

  margin: ${(props) => (props.margin ? props.margin : "0")};

  font-weight:${(props) => (props.fontWeight ? props.fontWeight : "400")};

  ${(props) => props.activeBlendMode ? `background-blend-mode: ${props.blendMode}` : ""}

  & > svg {
    font-size: ${(props) => (props.svgSize ? props.svgSize : "16px")};
    color: ${(props) => (props.svgColor ? props.svgColor : "black")};

    transition: transform 0.3s;

    &:hover {
      color: ${(props) => (props.hoverSvgColor ? props.hoverSvgColor : "")};
    }
  }

  &:hover {
    background-color: ${(props) => (props.hoverBgColor ? props.hoverBgColor : "")};
    color: ${(props) => (props.hoverColor ? props.hoverColor : "")};

    border-color: ${(props) => (props.hoverBorderColor ? props.hoverBorderColor : "")};

    transform: ${(props) => (props.hoverRotate ? `rotate(${props.hoverRotate})` : "")};

    transform: ${(props) => (props.hoverMove ? `translate(${props.hoverMove})` : "")};

    transform: ${(props) => (props.hoverScale ? `scale(${props.hoverScale})` : "")};

    transform: ${(props) => (props.hoverAll ? `rotate(${props.hoverRotate}) translate(${props.hoverMove}) scale(${props.hoverScale})` : "")};

  }
`;