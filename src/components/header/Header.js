import { MenuModal } from "components/slideoutmenu/MenuModal";
import React, { useState } from "react"
import { Link } from "react-router-dom"


import { 
    JesIcon,
    MenuIcon,
    HeaderContainer,
    Button,
} from './styles_header'

const linkStyle = {
    textDecoration: "none",
  };


export const Header = () => {
const [showModal, setShowModal] = useState(false)

const openModal = () => {
    setShowModal(prev => !prev)
}


    return (
        <>
        {showModal ? (
            <>
            {/* <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
            /> */}
           <MenuModal showModal={showModal} setShowModal={setShowModal}/> 
           </>
        ):(
            <HeaderContainer>
            <Link to='/' style={linkStyle}>
                <JesIcon>Jes.</JesIcon>
            </Link>
            <Button onClick={openModal}>
                <MenuIcon src="../images/menuicon.svg" alt="menuicon" />
            </Button>
            </HeaderContainer> )}


        </>
    )
}