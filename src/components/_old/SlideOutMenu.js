import React, { useState } from "react";
import SlideOut from "@ijsto/react-slideout"
import {
    MenuWrap,
    Hamburger,
    Menu,
    MenuItems,
    MenuIcon,
} from './styles_slideoutmenu'


export const SlideOutMenu = () => {
    const [slideOutIsOpen, setSlideOutIsOpen] = useState(false)

    const openSlideOut = () => {
        setSlideOutIsOpen(true)
      };
    
      const closeSlideOut = () => {
        setSlideOutIsOpen(false)
      };

    //   toggleSlideOut = e => {
    //       isModalOpen: !isModalOpen
    //     }
    //   }

    return (
        <>
        <MenuWrap>
            <Menu>
                <div>
                    <div>
                        <MenuItems>
                            <li><a href="#">About me</a></li>
                            <li><a href="#">UI Work</a></li>
                            <li><a href="#">FE Work</a></li>
                            <li><a href="#">Resources</a></li>
                            <li><a href="#">Contact</a></li>
                        </MenuItems>
                    </div>
                </div>
            </Menu>
        </MenuWrap>



        </>
    )
}



{/* <MenuIcon src="../images/menuicon.svg" alt="menuicon"/>
<MenuItems>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Work</a></li>
    <li><a href="#">Resources</a></li>
    <li><a href="#">Contact</a></li>
</MenuItems> */}