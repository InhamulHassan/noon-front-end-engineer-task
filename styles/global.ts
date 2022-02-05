import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --primary: #feee00;
        --secondary: #f5a523;
        --light: #ffffff;
        --dark: #000000;
        --background: #fff25375;
        --link: #3866df;
        --link-hover: #3866df75;
        --text: #555555;
        --dark-gray: #3c3b39;
        --light-gray: #d3d3d3;
        --liked: #dd2e44;
        --radius: 5px;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        display: block;
        background: var(--background);
        color: var(--light);
    }
    body{
        background-color: var(--light);
        min-height: 100vh;
        padding: 0;
        height: 100%;
        max-width: 640px;
        margin: 0 auto;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; 
    }
    a {
        color: var(--link);
        transition: color 100ms ease-in;
    }
    a:hover {
        color: var(--link-hover);
    }
`;
