import React from "react";
import { CbWrapper, CbWrapperProps } from "./CbStyled";

export interface CodeBlockProps extends CbWrapperProps {
    code: string;
}

const CodeBlock = (props: CodeBlockProps) => {
    const {code, ...rest} = props 
    return(
        <CbWrapper {...rest}>{code}</CbWrapper>
    )

}

export default CodeBlock;