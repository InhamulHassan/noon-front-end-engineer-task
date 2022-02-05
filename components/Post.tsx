import React from 'react'
import styled from 'styled-components'

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
    }
}

// styled components
const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    margin: 30px 15px;
    border-bottom: 1px solid var(--light-gray);
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const PostLikesIcon = styled.i`
    &,
    &::after,
    &::before {
        cursor: pointer;
        border-color: var(--dark-gray);
        background-color: transparent;
        transition: border-color 100ms ease-in, background-color 100ms ease-in;
    }
    &:hover,
    &:hover::after,
    &:hover::before {
        border-color: var(--liked);
        background-color: var(--liked);
    }
    &,
    &::after {
        border: 2px solid;
        border-top-left-radius: 100px;
        border-top-right-radius: 100px;
        width: 10px;
        height: 8px;
        border-bottom: 0;
    }
    & {
        box-sizing: border-box;
        position: relative;
        transform: translate(calc(-10px / 2 * var(--ggs, 1)), calc(-6px / 2 * var(--ggs, 1)))
        rotate(-45deg) scale(var(--ggs, 1));
        display: block;
    }
    &::after,
    &::before {
        content: '';
        display: block;
        box-sizing: border-box;
        position: absolute;
    }
    &::after {
        right: -9px;
        transform: rotate(90deg);
        top: 5px;
    }
    &::before {
        width: 11px;
        height: 11px;
        border-left: 2px solid;
        border-bottom: 2px solid;
        left: -2px;
        top: 3px;
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

// A new component based on PostLikesIcon, but with some color overrides
const PostLikesIconCount = styled(PostLikesIcon)`
    margin-left: 5px;
    &,
    &::after,
    &::before {
        border-color: var(--link);
        background-color: var(--link);
        transition: border-color 100ms ease-in, background-color 100ms ease-in;
    }
    &:hover,
    &:hover::after,
    &:hover::before {
        border-color: var(--liked);
        background-color: var(--liked);
    }
`;

const PostLikes = styled.div`
    position: relative;
    display: block;
    color: var(--link);
    font-size: 0.8rem;
    font-weight: 700;
    line-height: 1.4rem;
    margin-left: 15px;
`;

const PostDescription = styled.p`
    position: relative;
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1rem;
    color: var(--text);
`;

const PostHashtagsList = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
`;

const PostHashtagsItem = styled.a`
    position: relative;
    font-size: 0.8rem;
    font-weight: 300;
    line-height: 1rem;
    margin: 5px 5px 5px 0;
    text-decoration: none;
`;

const PostCommentsCount = styled.a`
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
    return number.toLocaleString('en-US');
}

export const Post: React.FC<IProps> = ({ post }) => {
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
                    <PostLikesIcon></PostLikesIcon>
                </PostImageContent>
            </PostImageContainer>
            <PostDescriptionContainer>
                <PostLikesCount>
                    <PostLikesIconCount></PostLikesIconCount>
                    <PostLikes>{numberFormatter(post.likeCount)} {post.likeCount == 1 ? `like` : `likes`}</PostLikes>
                </PostLikesCount>
                <PostDescription>{post.description}</PostDescription>
                <PostHashtagsList>
                    {post.tags?.map((singleTag, index) => (
                        <PostHashtagsItem href="#" key={index}>{`#${singleTag}`}</PostHashtagsItem>
                    ))}
                </PostHashtagsList>
                <PostCommentsCount>View {numberFormatter(post.commentsCount)} {post.commentsCount == 1 ? `comment` : `comments`}</PostCommentsCount>
            </PostDescriptionContainer>
        </PostContainer>
    )
}

export default Post