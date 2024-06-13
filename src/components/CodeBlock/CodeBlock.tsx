import React, {ReactNode} from "react";
import { CbWrapper, CbWrapperProps } from "./CbStyled";

export interface CodeBlockProps extends CbWrapperProps {
    children?: ReactNode | ReactNode[] |string;
}

const CodeBlock = (props: CodeBlockProps) => {
    const {children, ...rest} = props 
    return(
        <CbWrapper {...rest}>{children}</CbWrapper>
    )

}

export default CodeBlock;