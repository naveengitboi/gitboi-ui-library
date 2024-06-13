import React from "react";
import { Md16Mp } from "react-icons/md";
import { BtnIconWrapper } from "./IconStyled";


import { IconProps } from "./IconStyled";

interface BtnIconProps extends IconProps {
  onclickEvent?: () => void;
    Icon: React.ReactNode;

}

const BtnIcon = (props: BtnIconProps) => {
    const {Icon, ...rest} = props
    return(
        <BtnIconWrapper {...rest}>
            {Icon}
        </BtnIconWrapper>
    )
}

export default BtnIcon;