import styled from "styled-components";

// SlideOut Menu //

export const MenuWrap = styled.section `
    position: fixed;
    top: 0;
    right: 0;
    z-index; 1;




    @media (min-width: 767px) and (max-width: 991px) {
         
        }

    @media (min-width: 992px) {

    }
    
`

// export const InputToggler = styled.input `
//     position: absolute;
//     top: 1rem;
//     right: 1rem;
//     z-index: 2;
//     cursor: pointer;
//     height: 48px;
//     width: 48px;
//     opacity: 0;

//     &:checked {
//         transform: rotate(180deg);
//     }
// `


export const Menu = styled.div `
    position: fixed;
    top: 0;
    right: 0;
    width: 30%;
    height: 100%;
    // visibility: hidden;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: right;
    background: #fff;
    // transform: scale(0);
    transition: all 0.4s ease;
`

export const MenuItems = styled.ul `
    list-style: none;
    color: #333;
    font-size: 3rem;

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
                        color: #aaa;
                    }
                }
            } 
`

export const MenuIcon = styled.img `
    height: 24px;
    width: auto;
    padding: 1.5rem;
    background-color: #EBFE0E;
    position: fixed;
    top: 16px;
    right: 16px;
    z-index: 1;
    cursor: pointer;
    transition: all 0.4s ease;

    &:hover {
        transform: rotate(180deg);
    }

    // @media (min-width: 992px) {
    //     transform: scale;
    //     transition-property: all;
    //     transition-duration: 0.4s;

    //     &:hover {
    //         transform: scale(1.1);
    //         cursor: pointer;
    //     }
    }
`


// export const MenuItems = styled.ul `
//     background: #F5F4F0;
//     @include vertical-align(absolute);
//     font-weight: 100;

// 		li
// 		{
// 				padding-bottom: 30px;
// 				list-style-type: none;

// 				a
// 				{
// 					display: block;
// 					text-decoration: none;
// 					color: inherit;
// 					@include all-transition(0.3s);

// 					&:hover
// 					{
// 						color: #aaa;
// 					}
// 				}
// 		}
// 	}
// }
// `