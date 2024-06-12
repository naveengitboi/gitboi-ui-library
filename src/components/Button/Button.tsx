import React, { ReactNode } from "react";

import { Btngbl, ButtonProps } from "./ButtonStyled";

interface BtnGblProps extends ButtonProps {
  children: ReactNode | ReactNode[];
  endIcon?: ReactNode | ReactNode[];
  startIcon?: ReactNode | ReactNode[];
  onClickEvent?: () => void;
}

const Button: React.FC<BtnGblProps> = (props) => {
  const { children, onClickEvent, startIcon, endIcon, ...rest } = props;
  return (
    <Btngbl {...rest}>
      {startIcon} {children} {endIcon}
    </Btngbl>
  );
};

export default Button;
