import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

// components
import Post from "../components/Post";

interface IState {
  post: {
    _id: number,
    author: string,
    authorAvatarSrc: string,
    imgSrc: string,
    imgAltText?: string,
    title: string,
    description: string,
    tags?: Array<string>,
    likeCount: number,
    commentsCount: number
  }[]
}

const Home: NextPage = () => {

  const [posts, setPosts] = useState<IState["post"]>([
    {
      _id: 1,
      title: "My Spicy Life",
      author: "hossein.azar.bad",
      authorAvatarSrc: "https://images.unsplash.com/photo-1626586066636-a1523dd2141b?h=250&w=250&ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=60",
      imgSrc: "https://images.unsplash.com/photo-1547332226-395d746d139a?crop=entropy&fit=crop&fm=jpg&h=300&w=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0Mzk3NjcxMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source",
      imgAltText: "Bowl of spices",
      description: "Preparing the spices for today's dinner. Can you guess what is for dinner?",
      tags: ["spice", "spiceLife", "spices", "spices4life", "food", "foodie"],
      likeCount: 48,
      commentsCount: 8
    },
    {
      _id: 2,
      title: "The Journey of a thousand miles begins with a single step",
      author: "quotes_by_tzu",
      authorAvatarSrc: "https://images.unsplash.com/photo-1546638008-efbe0b62c730?h=250&w=250&ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=60",
      imgSrc: "https://images.unsplash.com/photo-1617251137884-f135eccf6942?crop=entropy&fit=crop&fm=jpg&h=700&w=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0Mzk3NjcxMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source",
      imgAltText: "The Journey of a thousand miles begins with a single step",
      description: "The Journey of a thousand miles begins with a single step - Lao Tzu",
      tags: ["quotes", "Quotes", "motivational", "Motivational", "MotivationalQuotes", "QuotesByTzu", "LaoTzu", "Lao", "Tzu", "lao_tzu"],
      likeCount: 1241,
      commentsCount: 980
    },
    {
      _id: 3,
      title: "On my trip to Firenze",
      author: "heart.of.feelings",
      authorAvatarSrc: "https://images.unsplash.com/photo-1571172964533-d2d13d88ce7e?h=250&w=250&ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=60  ",
      imgSrc: "https://images.unsplash.com/photo-1516967124798-10656f7dca28?crop=entropy&fit=crop&fm=jpg&h=700&w=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0Mzk3NjcxMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source",
      imgAltText: "On my trip to Firenze",
      description: "On holiday in Florence (Firenze), Tuscany, Italy, where there was a lot of street art and graffiti, however most of it was extremely good, including this simple one that, to me, tells a powerful and strong story.",
      tags: ["heart", "hart", "heart2heart", "feelings", "grafitti", "art", "florence", "italy"],
      likeCount: 1,
      commentsCount: 12
    }
  ])


  return (
    <div>
      <Head>
        <title>NoonGram | Home</title>
        <meta
          name="description"
          content="Create an account or log in to NoonGram - A simple, fun & creative way to capture, edit & share photos, videos & messages with friends & family."
        />
        <meta
          name="viewport"
          content="width=device-width,height=device-height,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </main>

      <footer>
        v1.0.1
      </footer>
    </div>
  );
};

export default Home;
