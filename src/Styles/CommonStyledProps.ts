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

  activeBlendMode?:Boolean;
  blendMode?:string;
}


export const commonCss = css`
  
`