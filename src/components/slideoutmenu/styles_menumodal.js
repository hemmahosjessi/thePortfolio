import styled from "styled-components";
import { MdClose } from 'react-icons/md';


export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  z-index: 10;
  border-radius: 1rem;
  margin-bottom: 4rem;
`;

export const Background = styled.div`
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.9)
position: fixed;
display: flex;
justify-content: center;
align-items: center;
`

export const ModalImg = styled.img`
  width: 160px;
  height: 160px;
`;

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--yellow);
    padding: 4rem;
    `;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding: 0;
  z-index: 10;
  color: #333333;
  right: 0;
  top: 0;
  position: absolute;
  padding: 3rem 6rem;
`;


export const MenuItems = styled.ul `
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: #333;
    font-size: 1.125rem;
    padding: 4rem;
    margin: auto;

        li
            {
                padding-bottom: 30px;
                list-style-type: none;

                a
                {
                    display: block;
                    text-decoration: none;
                    color: inherit;
                    @include all-transition(0.3s);

                    &:hover
                    {
                        color: var(--text-secondary);
                    }
                }
            } 
`

export const FindMeHere = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
`

export const SocialIcons = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 1rem;
    gap: 1rem;
`

export const SocialIcon = styled.img`
    display: flex;
    height: 32px;

        &:hover {
            transform: scale(1.1);
            cursor: pointer;
        }
    }
`