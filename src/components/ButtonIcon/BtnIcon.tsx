import React from "react";
import { Md16Mp } from "react-icons/md";
import { BtnIconWrapper } from "../../Styles";

import { IconProps } from "../../Styles/BtnIconStyles/IconStyled";

interface BtnIconProps extends IconProps {
  onclickEvent?: () => void;
    Icon: React.ReactNode;

}

const BtnIcon = (props: BtnIconProps) => {
    const {Icon, ...rest} = props
    return(
        <BtnIconWrapper {...rest} pulseAnimation={false}>
            {Icon}
        </BtnIconWrapper>
    )
}

export default BtnIcon;