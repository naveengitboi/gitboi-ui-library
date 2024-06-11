import React, {ReactNode} from "react";

import { Btn } from "./ButtonStyled";

interface Props{
    children:ReactNode | ReactNode[]
}

const Button:React.FC<Props> = ({children}) => {
    return(
       <Btn variant={'outlined'} >{children}</Btn>
    )
}

export default Button