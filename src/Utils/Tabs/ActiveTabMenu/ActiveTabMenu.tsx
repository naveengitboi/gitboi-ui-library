import React, { ReactNode, useState, useRef, RefObject } from "react";
import { MenuWrapper, MenuItem , CursorElement} from "../../../UtilStyles";


interface PositionProps {
  left: number;
  width: number;
  opacity: number;
}


const ActiveTabMenu = () => {
  const [position, setPosition] = useState({
    width:100,
    opacity:0,
    left: 200
  });

  return (
    <MenuWrapper onMouseLeave={() => {
        setPosition((prev) => ({
            ...prev,
            opacity:0
        }))
    }}>
      <Tab setPos={setPosition}>Home</Tab>
      <Tab setPos={setPosition}>Pricing</Tab>
      <Tab setPos={setPosition}>Features</Tab>
      <Tab setPos={setPosition}>Docs</Tab>
      <Tab setPos={setPosition}>Blog</Tab>
      <Cursor pos={position}/>
    </MenuWrapper>
  );
};




const Tab = ({ children, setPos }: {
    children:ReactNode,
    setPos: (pos: PositionProps) => void,
}) => {
    const liref = useRef<HTMLLIElement>(null)
  return (
    <MenuItem
    ref={liref}
    onMouseEnter={() => {
        if(!liref.current) return;
        const rect = liref?.current?.getBoundingClientRect()
        const {width} = rect
        setPos({
            width,
            opacity:1,
            left: liref.current.offsetLeft
        })
    }}
    onClick={() => {
        console.log("clicked")
    }}
    >
      {children}
    </MenuItem>
  );
};


const Cursor = ({ pos }: { pos: PositionProps }) => {
  return <CursorElement animate={pos} transition={{duration:0.07, ease:"linear"}} />;
};

export default ActiveTabMenu;
