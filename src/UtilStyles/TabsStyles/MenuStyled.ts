import styled, {css} from "styled-components";
import {motion} from 'framer-motion'

import { commonProps, commonStyles } from "../../Styles/CommonStyledProps";


const MenuWrapper = styled.ul<commonProps>`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 5px;
    border-radius: 2rem;
    background-color: #f5f5f5;
    color: #0a0a0a;
    border: 2px solid #0a0a0a;
    width: 500px;
    position: relative;

`;


const MenuItem = styled.li<commonProps>`
    ${commonStyles}
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 0.5rem 1.5rem;
    border-radius: 2rem;
    
    z-index: 10;
    color: #f5f5f5;
    overflow: hidden;
    list-style-type: none;
    position: relative;

    ${({activeBlendMode, blendMode}) => 
        {if(activeBlendMode){
            return css`
                mix-blend-mode: ${blendMode || "difference"};
            `
        }}
    }


    & >{
        a{
            color: #f5f5f5;
            text-decoration: none;
        }
    }
`;


const CursorElement = styled(motion.li)<commonProps>`
  position: absolute;
  
  height: 90%;
  background-color: ${({bgColor}) => bgColor || "#0a0a0a"};
  border-radius: 2rem;
  transition: all 0.3s ease;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  list-style-type: none;
`;

export {MenuWrapper, MenuItem, CursorElement};