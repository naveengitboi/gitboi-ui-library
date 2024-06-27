import React, { Attributes } from 'react'
import styled from 'styled-components'
import { commonProps, commonStyles } from '../../Styles/CommonStyledProps'
import { MdArrowRight } from 'react-icons/md'
import { HiMiniArrowRight } from "react-icons/hi2";
import { BtnIcon, Button } from '../../components';

const InputWrapper = styled.div<commonProps>`
    ${commonStyles}
    display: flex;
    align-items: center;

    padding: ${props => props.padding ? props.padding : '10px'};
    border-radius: ${props => props.bRadius ? props.bRadius : '5rem'};
    background-color: ${props => props.bgColor ? props.bgColor : '#7c93dcac'};
    &>input{
        

    }
    &>input::placeholder{
        color: #ffffff;
        text-transform: capitalize;

    }    

    ${props => props.customStyles}
    
`
const Input = styled.input<commonProps>`
        padding: 10px;
        border: none;
        outline: none;
        font-size: 1rem;
        width: max-content;
        border-radius: 3rem;
        height: 100%;
        background: none;
        color: #ffffff;
        flex-grow: 2;
        margin-left: 0.5rem;
        font-family: 'poppins';
`
const Icon = styled.div<commonProps>`
    ${commonStyles}
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &>svg{
        font-size: 20px;
    }
    border-radius: ${props => props.bRadius ? props.bRadius : '50%'};
    color: ${props => props.color ? props.color : '#839cee'};
    background-color: ${props => props.bgColor ? props.bgColor : 'white'};

    margin: ${props => props.margin ? props.margin : '0 0 0 10px'};
    
`

const InputEle = () => {
    return(
        <InputWrapper w='500px' padding='5px'>
            <Input type="text" placeholder="your Email Goes here" />
            <Icon 
            w='50px' h='50px' >
                <HiMiniArrowRight />
            </Icon>
            <Button 
            varient='contained' padding='0' bRadius='50%' w='50px' h='50px' svgSize='20px' makeCenter={true} svgColor='#839cee' margin='0 0.5rem'>
                <MdArrowRight />
            </Button>

        
        </InputWrapper>
    )
}

export default InputEle