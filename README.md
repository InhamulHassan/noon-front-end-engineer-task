# Noon Front-End Engineer Task (ReactJS/NextJS with TypeScript)

[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://github.com/facebook/react) &nbsp;
[![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)](https://github.com/vercel/next.js) &nbsp;
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://github.com/microsoft/TypeScript) &nbsp;
[![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://github.com/styled-components/styled-components) &nbsp;

![Noon Front-End Engineer Task](https://raw.githubusercontent.com/InhamulHassan/noon-front-end-engineer-task/main/final-device-mockups.gif)

## Tech Stack

- [React](https://reactjs.org/): A free and open-source front-end JavaScript library for building user interfaces based on UI components, usually used as a base in the development of single-page applications.
- [Next.js](https://nextjs.org/): An open-source development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites.
- [TypeScript](https://www.typescriptlang.org/): TypeScript is a language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS.
- [Styled Components](https://styled-components.com/): Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components.
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction): Next.js has support for API Routes, which let you easily create an API endpoint as a Node.js serverless function.

## Installation

Requires [Node.js 12.22.0](https://nodejs.org/) or later to run.

```sh
$ cd noon-front-end-engineer-task
$ npm install
$ npm run dev
```

## Viewing the application

Navigate to [http://localhost:3001](http://localhost:3001) on your browser to open the development server and view the application.

## Breakdown

1. On loading the home page, we fetch all the posts from the `/posts` mock API (which in turn gets the data from the `data/posts.js` static file).
2. When a user likes/unliked a post, we use the ContextAPI to store the liked posts state (we also make use of the `localStorage` to persist the liked state on page refresh).
3. When the user navigates to the likes page, we fetch all the posts from the `/posts` mock API, and then filter the posts based on the liked posts array from the ContextAPI.
