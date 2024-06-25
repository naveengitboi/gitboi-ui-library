

import React from 'react';
import { commonStyles, commonProps } from '../../Styles/CommonStyledProps';
import styled from 'styled-components';

interface ButtonProps extends commonProps{
    children?: React.ReactNode;
    onClick?: () => void;
    varient?: 'contained' | 'outline' | 'text';
}

const StyledBtn = styled.button<ButtonProps>`
    ${commonStyles}
    cursor: ${(props) => props.onClick ? '' : 'pointer'};
    padding: ${(props) => props.padding ? props.padding : '0.5rem 1.25rem'};
    border-radius: ${(props) => props.bRadius ? props.bRadius : '0.25rem'} ;
    background-color: ${(props) => {
        if(props.varient === 'contained'){
            return 'white'
        }
        else{
            return 'transparent'
        }
    }};

    color: ${(props) => {
        if(props.color){
            return props.color
        }
        if(props.varient === 'contained'){
            return 'black'
        }
        else{
            return 'white'
        }
    }};

    border: ${(props) => {
        if(props.borderColor){
            return `${props.bSize}px solid ${props.borderColor}` 
        }
        if(props.varient === 'outline'){
            return `1px solid ${props.borderColor ? props.borderColor : 'white'}`
        }
        
    }};


    ${(props) => props.customStyles}
    
`


const Button = (props:ButtonProps) => {
    const {children, onClick, ...rest} = props

    return (
        <StyledBtn {...rest} onClick={onClick}>
            
            {children}
            
            </StyledBtn>
    )
}

export default Button