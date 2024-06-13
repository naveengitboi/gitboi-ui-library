import React, { ReactNode } from "react";

import { Btngbl, ButtonProps } from "../../Styles/ButtonStyles";

interface BtnGblProps extends ButtonProps {
  children: ReactNode | ReactNode[];
  endIcon?: ReactNode | ReactNode[];
  startIcon?: ReactNode | ReactNode[];
  onClickEvent?: () => void;
}

const Button = (props:BtnGblProps) => {
  const { children, onClickEvent, startIcon, endIcon, ...rest } = props;
  return (
    <Btngbl {...rest}>
      {startIcon} {children} {endIcon}
    </Btngbl>
  );
};

export default Button;
