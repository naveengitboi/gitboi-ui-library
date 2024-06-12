import styled from "styled-components";


export interface CbWrapperProps {
  bgColor?: string;
  borderColor?: string;
  borderRadius?: string;
  padding?: string;
  bSize?:number;
  color?: string;

}


export const CbWrapper = styled.span<CbWrapperProps>`

  background-color: ${props => props.bgColor || '#0f171f'};
  border: ${props => props.bSize || 1}px
  solid ${props => props.borderColor || '#0f171f'};
  border-radius: ${props => props.borderRadius || '5px'};
  padding: ${props => props.padding || '5px 10px'};
  color: ${props => props.color || '#fff'};

`;