import type { InferGetStaticPropsType, GetStaticProps, NextPage } from "next";

// components
import Post from "../components/Post/index";

// ts type
type Post = {
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
}

export const getStaticProps: GetStaticProps = async () => {
  const proxy = process.env.HOST;
  const res = await fetch(`${proxy}/api/posts`);
  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    }
  };
}

const Home: NextPage<Post[]> = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      {posts && posts.map((post: Post) => (
        <Post post={post} key={post._id} />
      ))}
    </>
  );
};

export default Home;
