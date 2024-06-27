import styled, { css } from "styled-components";
import { commonProps } from "../CommonStyledProps";

export interface ButtonProps extends commonProps{
  variant?: "text" | "outlined" | "contained";
   children: React.ReactNode | React.ReactNode[];
  endIcon?: React.ReactNode | React.ReactNode[];
  startIcon?: React.ReactNode | React.ReactNode[];
  onClick: () => void;
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
  padding: 0.25rem 1.25rem;
  color:#90caf9;
`;


//noraml button




