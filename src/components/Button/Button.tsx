import React, {ReactNode, ReactSVG, ReactSVGElement} from "react";
import {Md16Mp} from 'react-icons/md'
import { Btngbl ,ButtonWithIcon} from "./ButtonStyled";
import { ButtonWithIconProps } from "./ButtonStyled";

interface BtnGblProps extends ButtonWithIconProps{
    children:ReactNode | ReactNode[],
    endIcon?: ReactNode | ReactNode[],
    startIcon?: ReactNode | ReactNode[],
}


const Button:React.FC<BtnGblProps> = (props) => {
    return(
       <ButtonWithIcon {...props} >{props.startIcon} {props.children} {props.endIcon}</ButtonWithIcon>
    )
}

export default Button