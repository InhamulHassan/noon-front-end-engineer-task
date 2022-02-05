import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from 'next/router'
import styled from 'styled-components'

// components
import Navigation from "../components/Navigation";

// styled components
const MainContainer = styled.main`
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: stretch;
    justify-content: flex-start;
    /* add a 40px margin on top to offset the fixed header */
    margin: 40px auto 20px;
    max-width: var(--lg-width);
    padding: 5px 15px;
    background: var(--light);

    /* on screens smaller than 640px (mobiles/mini tablets) */
    @media only screen and (max-width: 640px) {
      /* add a 80px margin on bottom to offset the fixed bottom header */
      margin: 0px auto 80px;
      /* remove the vertical/horizontal padding, so the posts sit flush with the screen */
      padding: 0;
    }
`;

const FooterContainer = styled.footer`
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 5px 15px;
    background: var(--light);
    color: var(--light-gray);
`;

const Layout: NextPage = ({ children }) => {
    // get the current route from the useRouter hook and assign the page title accordingly
    const router = useRouter();
    const route = router.asPath;

    // since we only have two routes, use a basic ternary operator to get a nice looking page title
    const routeName = route == '/' ? 'Home' : 'Likes';

    return (
        <>
            <Head>
                <title>ideaa | {routeName}</title>
                <meta
                    name="description"
                    content="Create an account or log in to ideaa - A simple, fun & creative way to capture, edit & share photos, videos & messages with friends & family."
                />
                <meta
                    name="viewport"
                    content="width=device-width,height=device-height,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation></Navigation>
            <MainContainer>
                {children}
            </MainContainer>
            <FooterContainer>
                v1.0.1
            </FooterContainer>
        </>
    );
};

export default Layout;
