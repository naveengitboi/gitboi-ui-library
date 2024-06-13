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
}


export const commonCss = css`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`