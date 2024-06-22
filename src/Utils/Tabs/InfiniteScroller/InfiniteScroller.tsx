import React, {useEffect, useRef, useState} from "react"
import styled, {keyframes} from "styled-components"
import { commonCss } from "../../../Styles/CommonStyledProps"


interface ScrollItemProps {
    scrollWidth?: number | undefined;
    count?: number | undefined;
    numberofItems?: number | undefined;
    totalDuration?: number |undefined;
}

const ScrollerContainer = styled.div<ScrollItemProps>`
    ${commonCss}
    box-sizing: border-box;
    height: 100px;
`

const scrollLeft = (stwidth:number|undefined) => keyframes<ScrollItemProps>`
    
    to{
        left: -${stwidth}px;
    }


`

const ScrollerWrapper = styled.div<ScrollItemProps>`
  height: 100%;
    position: relative;
    overflow: hidden;
    mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
`

const ScrollItem = styled.div<ScrollItemProps>`
    background-color: green;
    height: 100%;
    width: 200px;
    animation: ${(props) => scrollLeft(props.scrollWidth)} linear infinite;
    animation-duration: ${(props)=> `${props.totalDuration}s`};
    animation-delay: ${(props)=> `-${(props.totalDuration/props.numberofItems)*(props.numberofItems - props.count)}s`}; 
    border-radius: 0.25rem;
    position: absolute;
    left: ${(props) => {
        return(
            `max(calc(${props.scrollWidth} * ${props.numberofItems}px), 100%)`
        )
    }};
`

const scrollItemsList = [
    {
        id: 1,
        title: "Item 1"
    },
    {
        id: 2,
        title: "Item 2"
    },
    {
        id: 3,
        title: "Item 3"
    }
    ,
    {
        id: 4,
        title: "Item 3"
    }
    ,
    {
        id: 5,
        title: "Item 3"
    }
]


const InfinteScroller = () => {
    const [scrollItemWidth, setScrollItemWidth] = useState<number>(0)

    const scrollItemRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
         if(scrollItemRef?.current){
            const {width} = scrollItemRef?.current?.getBoundingClientRect() 
            console.log(typeof width, width)
            setScrollItemWidth(width)

         }
    }, [])
    
    return(
        <ScrollerContainer>
            <ScrollerWrapper>
                {
                    scrollItemsList.map((item, idx) => (
                        <ScrollItem key={item.id} ref={scrollItemRef} scrollWidth={scrollItemWidth} count={(idx+1)} numberofItems={scrollItemsList.length} totalDuration={5} >{item.title}</ScrollItem>
                    ))
                }
            </ScrollerWrapper>
        </ScrollerContainer>
    )
}

export default InfinteScroller