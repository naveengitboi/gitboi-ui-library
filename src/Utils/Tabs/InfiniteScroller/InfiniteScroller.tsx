import React from "react"
import styled, {keyframes} from "styled-components"
import { commonCss } from "../../../Styles/CommonStyledProps"
import {
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
  SiGeeksforgeeks,
  SiHackerrank,
  SiHackerearth,

} from "react-icons/si";
import { GiHorseHead } from "react-icons/gi";
import { TbBrandCpp } from "react-icons/tb";

interface ScrollItemProps {
    scrollWidth?: any | undefined;
    count?: any | undefined;
    numberofItems?: any | undefined;
    totalDuration?: any |undefined;
}

const ScrollerContainer = styled.div<ScrollItemProps>`
    ${commonCss}
    box-sizing: border-box;
    mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
    border: 2px solid lime;
    overflow-x: hidden;
    width: auto;

`

const scrollLeft = keyframes<ScrollItemProps>`


`

const ScrollerWrapper = styled.div<ScrollItemProps>`
 display: flex;
  flex-wrap: nowrap;
  width: fit-content;
animation: ${scrollLeft} 5s linear infinite;  
border: 3px solid red;
  margin: 2rem 0;
`


const ScrollItem = styled.div<ScrollItemProps>`
    display: block;
  width: max-content;
  font-weight: bold;
  text-transform: uppercase;
  margin: 1rem;
    
`
const Param = styled.p`
        font-size:1.5rem;
        color:white;
        font-weight:bold;
        text-transform:uppercase;
    
`



const  scrollItemsList = [
  {
    type: "svg",
    image: <SiHackerrank />,
    name: "Hackerrank",
    link: "https://www.hackerrank.com/",
  },
  {
    type: "svg",
    image: <SiLeetcode />,
    name: "LeetCode",
    link: "https://leetcode.com/",
  },
  {
    type: "svg",
    image: <SiGeeksforgeeks />,
    name: "GFG",
    link: "https://www.geeksforgeeks.org/",
  },
  {
    type: "svg",
    image: <TbBrandCpp />,
    name: "CPP ref",
    link: "https://en.cppreference.com/w/",
  },
  {
    type: "svg",
    image: <SiCodechef />,
    name: "CodeChef",
    link: "https://www.codechef.com/",
  },
  {
    type: "svg",
    image: <GiHorseHead />,
    name: "Atcode",
    link: "https://atcoder.jp/",
  },
  {
    type: "svg",
    image: <SiHackerearth />,
    name: "Hackerearth",
    link: "https://www.hackerearth.com/",
  },
  {
    type: "svg",
    image: <SiCodeforces />,
    name: "CodeForces",
    link: "https://codeforces.com/",
  },
];



const InfinteScroller = () => {
    
    return(
        <ScrollerContainer>
            <ScrollerWrapper>
                {
                    [...scrollItemsList, ...scrollItemsList].map((item, idx) => (
                        <ScrollItem key={idx} >
                           
                           <Param>
                            {item.name}
                           </Param>
                        
                        </ScrollItem>
                    ))
                }
            </ScrollerWrapper>
        </ScrollerContainer>
    )
}

export default InfinteScroller