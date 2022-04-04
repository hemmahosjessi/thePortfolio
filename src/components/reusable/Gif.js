import React from "react";
import styled from "styled-components";


export const Gif = () => {

    return (
        <ImgContainer>        
            <ImgWide src="../images/Screen Recording 2022-04-04 at 15.36.27.gif"/>
        </ImgContainer>


    )
}


export const ImgWide = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

export const ImgContainer = styled.div`
    padding: 4rem 6rem;
`