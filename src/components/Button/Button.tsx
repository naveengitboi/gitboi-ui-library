import React, {ReactNode} from "react";

interface Props{
    children:ReactNode | ReactNode[]
}

const Button:React.FC<Props> = ({children}) => {
    return(
       <button>Purnima Au Btn {children}</button>
    )
}

export default Button