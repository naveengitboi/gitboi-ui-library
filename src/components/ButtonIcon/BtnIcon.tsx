import React from "react";
import { Md16Mp } from "react-icons/md";
import { BtnIconWrapper } from "../../Styles";

import { IconProps } from "../../Styles/BtnIconStyles/IconStyled";

interface BtnIconProps extends IconProps {
  onclickEvent?: () => void;
    children: React.ReactNode;

}

const BtnIcon = (props: BtnIconProps) => {
    const {children, ...rest} = props
    return(
        <BtnIconWrapper {...rest} pulseAnimation={false}>
            {children}
        </BtnIconWrapper>
    )
}

export default BtnIcon;