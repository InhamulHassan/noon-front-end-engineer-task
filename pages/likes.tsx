import { useState, useEffect } from "react";
import type { InferGetStaticPropsType, GetStaticProps, NextPage } from "next";
import styled from 'styled-components';

// context
import { useLikedPostsState, useLikedPostsDispatch } from "../context/likedPosts";

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

const NoResultsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    padding: 15px 30px;
    margin: 15px auto;
`;

const Likes: NextPage<Post[]> = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [filteredLikedPosts, setFilteredLikedPostsList] = useState(posts);
  // context hooks
  const { likedPosts } = useLikedPostsState();
  const { setLikedPosts } = useLikedPostsDispatch();

  // only run this side effect on mount (so the initial list of posts are filtere by favourites)
  useEffect(() => {
    let likedPostsArray = localStorage.getItem('ideaa-liked-posts') ? JSON.parse(localStorage.getItem('ideaa-liked-posts') || '{}') : [];

    // set the liked posts lists in the local state on initial mount
    setFilteredLikedPostsList(posts.filter((x: Post) => likedPostsArray.includes(x._id)));
    // set the liked posts id array to the context api on the initial mount
    setLikedPosts({ likedPosts: likedPostsArray });
  }, []);

  // run this side effect everytime the likedPosts context is updated (so the likedPosts list re-renders)
  useEffect(() => {
    // update the filtered liked posts' local state
    setFilteredLikedPostsList(posts.filter((x: Post) => likedPosts.includes(x._id)));
  }, [likedPosts])

  // if there are liked posts, display them
  if (filteredLikedPosts && filteredLikedPosts.length > 0) {
    return (
      filteredLikedPosts.map((post: Post) => (
        <Post post={post} key={post._id} />
      ))
    );
  } else {
    // if not show an empty message
    return (
      <NoResultsContainer>It looks like you have not liked any posts so far</NoResultsContainer>
    );
  }


};

export default Likes;
