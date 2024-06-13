import React from "react";
import { InfoWrapper, InfoSvg, InfoContent,InfoContentDetails, InfoContentHeading } from "../../Styles/InfoStyles";
import { MdWarning } from "react-icons/md";
import CodeBlock from "../CodeBlock";

const InfoText = () => {

    return(
        <InfoWrapper>
            <InfoSvg>
                <MdWarning />
            </InfoSvg>
            <InfoContent>
                <InfoContentHeading>Unstyled</InfoContentHeading>
                <InfoContentDetails>There is a known issue with translating a page using Chrome tools when a Loading Button is present. After the page is translated, the application crashes when the loading state of a Button changes. To prevent this, ensure that the contents of the Loading Button are nested inside any HTML element, such as a

                    <CodeBlock >
                        const x = 5;
                    </CodeBlock>
                </InfoContentDetails>
            </InfoContent>
        </InfoWrapper>
    )
}

export default InfoText;