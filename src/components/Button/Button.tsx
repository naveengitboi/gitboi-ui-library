import React, { ReactNode } from "react";

import { Btngbl, ButtonProps } from '../../Styles'


const Button = (props:ButtonProps) => {
  const { children, onClickEvent, startIcon, endIcon, ...rest } = props;
  return (
    <Btngbl {...rest}>
      {startIcon} {children} {endIcon}
    </Btngbl>
  );
};

export default Button;
