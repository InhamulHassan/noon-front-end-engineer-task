import type { AppProps } from 'next/app'
// context
import { LikedPostsProvider } from "../context/likedPosts";

// layout
import Layout from "../components/Layout";

// global styles
import GlobalStyles from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GlobalStyles />
      <LikedPostsProvider>
        <Component {...pageProps} />
      </LikedPostsProvider>
    </Layout>
  );
}

export default MyApp
