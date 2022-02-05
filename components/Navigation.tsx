import React from 'react'
import Link from "next/link";
import styled from 'styled-components'
import { useRouter } from 'next/router'

// styled components
const NavContainer = styled.nav`
    position: fixed;
    top: 0;
    /* spans the full viewport width */
    width: 100vw;
    z-index: 50;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 5px 15px;
    background: var(--light);
    border-bottom: 1px solid var(--light-gray);
    box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.1);

    /* on screens smaller than 640px (mobiles/mini tablets) */
    @media only screen and (max-width: 640px) {
        /* reset the top value */
        top: auto;
        bottom: 0;
        background: var(--light);
        border-top: 1px solid var(--light-gray);
        border-bottom: none;
        /* change the shadow a bit */
        box-shadow: 0px -2px 4px 2px rgba(0,0,0,0.1);
    }
`;

const NavInnerContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: var(--lg-width);
`;

const NavLogo = styled.img`
    position: relative;
    height: 40px;
    width: auto;
    margin: 5px 15px 5px 0;
    object-fit: contain;

    /* on screens smaller than 640px (mobiles/mini tablets) */
    @media only screen and (max-width: 640px) {
        /* hide logo on smaller screens */
        display: none;
    }
`;

const NavLinkList = styled.ul`
    position: relative;
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    /* on screens smaller than 640px (mobiles/mini tablets) */
    @media only screen and (max-width: 640px) {
        /* increase the list width */
        min-width: 100%;
    }
`;

const NavLinkItem = styled.li`
    position: relative;
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    /* on screens smaller than 640px (mobiles/mini tablets) */
    @media only screen and (max-width: 640px) {
        /* increase button size height (to support touch devices) */
        min-height: 50px;
        min-width: 45%;
    }
`;

const NavLinkElement = styled.a`
    position: relative;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 40px;
    width: auto;
    margin: 0 15px;
    opacity: 1;
    text-decoration: none;
    transition: opacity 100ms ease-in;
    color: var(--dark-gray);
    cursor: pointer;

    &:hover > svg,
    &:hover > span {
        color: var(--dark-gray);
        opacity: 0.75;
    }

    /* on route selected state */
    &.selected > svg {
        /* using filters is one of easiest ways to manipulate colors of an embedded SVG */
        fill: var(--secondary);
    }

    &.selected > span {
        color: var(--secondary);
    }
`;

const NavLinkIconHome = styled.svg`
    cursor: pointer;
    transition: opacity 100ms ease-in;
`;

const NavLinkIconLike = styled.svg`
    cursor: pointer;
    transition: opacity 100ms ease-in;
`;

const NavLinkTitle = styled.span`
    position: relative;
    margin-top: 5px;
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1rem;
    color: currentColor;
    transition: color 100ms ease-in;
`;

export const Navigation: React.FC = () => {
    // get the current route from the useRouter hook and assign the styling accordingly
    const router = useRouter();
    const route = router.asPath;

    return (
        <NavContainer>
            <NavInnerContainer>
                <NavLogo src='/assets/ideaa-logotype.png'></NavLogo>
                <NavLinkList>
                    <NavLinkItem>
                        <Link href='/' passHref>
                            <NavLinkElement className={route == '/' ? 'selected' : ''}>

                                <NavLinkIconHome viewBox="0 0 24 24" width="24" height="24">
                                    <path fillRule="evenodd" d="M11.03 2.59a1.5 1.5 0 011.94 0l7.5 6.363a1.5 1.5 0 01.53 1.144V19.5a1.5 1.5 0 01-1.5 1.5h-5.75a.75.75 0 01-.75-.75V14h-2v6.25a.75.75 0 01-.75.75H4.5A1.5 1.5 0 013 19.5v-9.403c0-.44.194-.859.53-1.144l7.5-6.363zM12 3.734l-7.5 6.363V19.5h5v-6.25a.75.75 0 01.75-.75h3.5a.75.75 0 01.75.75v6.25h5v-9.403L12 3.734z"></path>
                                </NavLinkIconHome>
                                <NavLinkTitle>Home</NavLinkTitle>
                            </NavLinkElement>
                        </Link>
                    </NavLinkItem>
                    <NavLinkItem>
                        <Link href='/likes' passHref>
                            <NavLinkElement className={route == '/likes' ? 'selected' : ''}>
                                <NavLinkIconLike viewBox="0 0 24 24" width="24" height="24">
                                    <path fillRule="evenodd" d="M6.736 4C4.657 4 2.5 5.88 2.5 8.514c0 3.107 2.324 5.96 4.861 8.12a29.66 29.66 0 004.566 3.175l.073.041.073-.04c.271-.153.661-.38 1.13-.674.94-.588 2.19-1.441 3.436-2.502 2.537-2.16 4.861-5.013 4.861-8.12C21.5 5.88 19.343 4 17.264 4c-2.106 0-3.801 1.389-4.553 3.643a.75.75 0 01-1.422 0C10.537 5.389 8.841 4 6.736 4zM12 20.703l.343.667a.75.75 0 01-.686 0l.343-.667zM1 8.513C1 5.053 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262a31.146 31.146 0 01-5.233 3.576l-.025.013-.007.003-.002.001-.344-.666-.343.667-.003-.002-.007-.003-.025-.013A29.308 29.308 0 0110 20.408a31.147 31.147 0 01-3.611-2.632C3.8 15.573 1 12.332 1 8.514z"></path>
                                </NavLinkIconLike>
                                <NavLinkTitle>Likes</NavLinkTitle>
                            </NavLinkElement>
                        </Link>
                    </NavLinkItem>
                </NavLinkList>
            </NavInnerContainer>
        </NavContainer >
    )
}

export default Navigation