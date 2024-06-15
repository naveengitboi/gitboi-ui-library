import React, { ReactElement, useState } from "react";

import {
  MdClose,
} from "react-icons/md";


import {
  SidebarContainer,
  SidebarWrapper,
  SidebarHeader,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarButton,
  SidebarClose,
  SidebarLinkLabel,
  SidebarLogo,
  SidebarSvg,
} from "../../../UtilStyles";

import { DiRuby ,DiJsBadge, DiReact, DiMongodb, DiSizzlejs,DiStackoverflow} from "react-icons/di";
interface elementProps{
    svg: ReactElement,
    label: string,
    url: string
}

const elements:elementProps[] = [
    {
        svg: <DiJsBadge />,
        label: "JavaScript",
        url: "#"
    },
    {
        svg: <DiRuby />,
        label: "Ruby",
        url: "#"
    },
     {
        svg: <DiMongodb />,
        label: "Home",
        url: "#"
    },
    {
        svg: <DiReact />,
        label: "React Js",
        url: "#"
    },
]

const btns:elementProps[] = [
    {
        svg: <DiSizzlejs />,
        label: "SizzleJs",
        url: "#"
    },
]

const SideNav = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <SidebarContainer openBar={openSidebar}>
      <SidebarWrapper openBar={openSidebar}>
        <div>
            <SidebarHeader>
          <SidebarLogo onClick={() => setOpenSidebar(!openSidebar)}>
            <DiStackoverflow />
          </SidebarLogo>

          <SidebarClose onClick={() => setOpenSidebar(false)} openBar={openSidebar} >
            <MdClose />
          </SidebarClose>
        </SidebarHeader>
        <SidebarMenu>
          {
            elements.map((element, index) => {
                    return(
                        <LinkItem key={index} LinkSvg={element.svg} openBar={openSidebar}>
                            {element.label}
                        </LinkItem>
                    )
                })
          }
        </SidebarMenu>
        </div>
        <SideBtnWrap>
          {
            btns.map((element, index) => {
                    return(
                        <LinkItem key={index} LinkSvg={element.svg} openBar={openSidebar}>
                            {element.label}
                        </LinkItem>
                    )
                })
          }
        </SideBtnWrap>
        
      </SidebarWrapper>
    </SidebarContainer>
  );
};


const LinkItem = ({children, LinkSvg, openBar} : {
    
    children: React.ReactNode,
    LinkSvg: React.ReactNode,
    openBar: boolean
    }) => {
    return(
        <SidebarLink href="#" >
            <SidebarSvg>
              {LinkSvg}
            </SidebarSvg>
            <SidebarLinkLabel openBar={openBar}>{children}</SidebarLinkLabel>
        </SidebarLink>
    )
}

export default SideNav;
