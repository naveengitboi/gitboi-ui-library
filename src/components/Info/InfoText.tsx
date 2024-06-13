import React from "react";
import { InfoWrapper, InfoSvg, InfoContent,InfoContentDetails, InfoContentHeading, InfoTextProps } from "../../Styles/InfoStyles";
import { MdWarning } from "react-icons/md";
import CodeBlock from "../CodeBlock";


const InfoText = (props:InfoTextProps) => {

    const {content, heading, svg, code, ...rest} = props

    return(
        <InfoWrapper {...rest} >
            <InfoSvg>
                {svg}
            </InfoSvg>
            <InfoContent>
                <InfoContentHeading>{heading}</InfoContentHeading>
                <InfoContentDetails>
                    {content}
                    <CodeBlock >
                        const x = 5;
                    </CodeBlock>
                </InfoContentDetails>
            </InfoContent>
        </InfoWrapper>
    )
}

export default InfoText;