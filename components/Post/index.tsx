import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

// context
import { useLikedPostsState, useLikedPostsDispatch } from "../../context/likedPosts";

// sub components
import Hashtags from './Hashtags';

// ts interface
interface IProps {
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
    },
    // handleLike: (postId: number) => Promise<void>
}

// styled components
const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    margin: 15px 0;
    border-bottom: 1px solid var(--light-gray);

    /* on screens smaller than 640px (mobiles/mini tablets) */
    @media only screen and (max-width: 640px) {
        /* reduce the vertical margins a bit so the mobile feed looks seamless */
        margin: 5px 0;
    }
`;

const PostAuthorContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 5px 10px;
    margin: 5px 0;
`;

const AuthorAvatar = styled.img`
    display: block;
    width: 32px;
    height: 32px;
    border: 1px solid transparent;
    border-radius: 50%;
    margin-right: 5px;
`;

const AuthorName = styled.a`
    display: block;
    margin: 0 5px;
    font-size: 0.8rem;
    font-weight: 600;
    line-height: 1rem;
    text-decoration: none;
`;

const PostImageContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    border-radius: var(--radius);
    overflow: hidden;

    /* on screens smaller than 640px (mobiles/mini tablets) */
    @media only screen and (max-width: 640px) {
        /* remove the border radius, so the image sits flush with the screen */
        border-radius: 0; 
    }
`;

const PostImage = styled.img`
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
    background: var(--background);
`;

const PostImageContent = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px 15px;
    width: 100%;
    height: auto;
    min-height: 40px;
    max-height: 120px;
    bottom: 0;
    left: 0;
    background: linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%);
`;

const PostTitle = styled.div`
    position: relative;
    display: block;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.6rem;
    width: auto;
    max-width: 75%;
    color: var(--light);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const PostLikesIcon = styled.svg`
   cursor: pointer;
   fill: var(--dark-gray);
   stroke: var(--light);
   stroke-width: 2px;
   transition: fill 100ms ease-in, stroke 100ms ease-in;

   &:hover {
       fill: var(--liked);
       stroke: var(--liked);
    }

    /* if the post is liked */
    &.liked {
        fill: var(--liked);
        stroke: var(--liked);
    }
`;

const PostDescriptionContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    padding: 5px 15px;
`;

const PostLikesCount = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 5px 0;
`;

const PostLikesLink = styled.a`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    cursor: pointer;
    opacity: 1;
    transition: opacity 100ms ease-in;

    &:hover {
        opacity: 0.75;
    } 
`;

// A new component based on PostLikesIcon, but with some color overrides
const PostLikesIconCount = styled(PostLikesIcon)`
    /* change fill color */
    fill: var(--link);
    cursor: pointer;
    /* icon alignment offset */ 
    margin-top: 1px;
    margin-right: 5px;

    &:hover {
        fill: var(--link);
        stroke: var(--link);
    }
`;

const PostLikes = styled.div`
    position: relative;
    display: block;
    color: var(--link);
    font-size: 0.8rem;
    font-weight: 700;
    line-height: 1.4rem;
`;

const PostDescription = styled.p`
    position: relative;
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1rem;
    color: var(--text);
`;

const PostCommentsLink = styled.a`
    position: relative;
    font-size: 0.8rem;
    font-weight: 600;
    line-height: 1rem;
    margin: 5px 5px 5px 0;
    color: var(--text);
    text-decoration: none;
    padding: 5px 0;
    cursor: pointer;
    opacity: 1;
    transition: color 100ms ease-in;

    &:hover {
        color: var(--text);
        opacity: 0.75;
    }
`;

// converts a number to a human-friendly string  
const numberFormatter = (number: number): string => {
    if (!number) return '';
    return number.toLocaleString('en-US');
}

export const Post: React.FC<IProps> = ({ post }) => {
    const [postLiked, setPostLiked] = useState(false);
    const [postLikeCount, setPostLikeCount] = useState(post.likeCount);
    // context hooks
    const { likedPosts } = useLikedPostsState();
    const { setLikedPosts } = useLikedPostsDispatch();

    // trigger this when likedPosts context object changes
    useEffect(() => {
        // check if the current post is liked or not (i.e. it exists in the context)
        let isPostLiked = likedPosts.includes(post._id);

        // trigger post's like state change along with the like count on mount
        setPostLiked(isPostLiked);
        setPostLikeCount(prevCount => {
            // the like count should be incremented by 1 when the post is liked, or else default to previous value
            return isPostLiked ? prevCount + 1 : prevCount;
        });
    }, [likedPosts]);

    const handlePostLike = (postId: number) => {
        // assign the context to a temporary variable
        let likedPostsArray = likedPosts;

        // check if context object is populated, if it is check if the post exists in th context object's array
        if (likedPostsArray.length > 0) {
            // if it exists, filter the postId from the list (if not, push it to the list)
            likedPostsArray = likedPostsArray.includes(postId) ? likedPostsArray.filter((id: number) => id !== postId) : likedPostsArray.concat(postId);
        } else {
            // if the list is not populated, add it to the list
            likedPostsArray.push(postId);
        }

        let isPostLiked = likedPostsArray.includes(post._id);
        // update the local component state to reflect the postLiked state
        setPostLiked(isPostLiked);
        // the like count should be incremented/decremented by 1 when the post is liked/unliked (make sure to take into account the prev. state of value)
        setPostLikeCount(prevCount => {
            return isPostLiked ? prevCount + 1 : prevCount - 1;
        });

        // then set the array to the localStorage
        localStorage.setItem('ideaa-liked-posts', JSON.stringify(likedPostsArray));
        // and also update the context to reflect the changes globally
        setLikedPosts({ likedPosts: likedPostsArray });
    }

    return (
        <PostContainer>
            <PostAuthorContainer>
                <AuthorAvatar src={post.authorAvatarSrc} alt={post.author}></AuthorAvatar>
                <AuthorName href="#">{post.author}</AuthorName>
            </PostAuthorContainer>
            <PostImageContainer>
                <PostImage src={post.imgSrc} alt={post.imgAltText}></PostImage>
                <PostImageContent>
                    <PostTitle>{post.title}</PostTitle>
                    <PostLikesIcon className={postLiked ? 'liked' : ''} onClick={() => handlePostLike(post._id)} viewBox="0 0 24 24" width="24" height="24">
                        <path d="M14 20.408c-.492.308-.903.546-1.192.709-.153.086-.308.17-.463.252h-.002a.75.75 0 01-.686 0 16.709 16.709 0 01-.465-.252 31.147 31.147 0 01-4.803-3.34C3.8 15.572 1 12.331 1 8.513 1 5.052 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262A31.146 31.146 0 0114 20.408z"></path>
                    </PostLikesIcon>
                </PostImageContent>
            </PostImageContainer>
            <PostDescriptionContainer>
                <PostLikesCount>
                    <PostLikesLink href="#">
                        <PostLikesIconCount viewBox="0 0 24 24" width="18" height="18">
                            <path d="M14 20.408c-.492.308-.903.546-1.192.709-.153.086-.308.17-.463.252h-.002a.75.75 0 01-.686 0 16.709 16.709 0 01-.465-.252 31.147 31.147 0 01-4.803-3.34C3.8 15.572 1 12.331 1 8.513 1 5.052 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262A31.146 31.146 0 0114 20.408z"></path>
                        </PostLikesIconCount>
                        <PostLikes>{numberFormatter(postLikeCount)} {postLikeCount == 1 ? `like` : `likes`}</PostLikes>
                    </PostLikesLink>
                </PostLikesCount>
                <PostDescription>{post.description}</PostDescription>
                <Hashtags hashTags={post.tags}></Hashtags>
                <PostCommentsLink href='#'>View {numberFormatter(post.commentsCount)} {post.commentsCount == 1 ? `comment` : `comments`}</PostCommentsLink>
            </PostDescriptionContainer>
        </PostContainer>
    )
}

export default Post