import React from 'react'
import styled from 'styled-components'

// ts interface
interface IProps {
    hashTags: Array<string> | undefined
}

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

export const Post: React.FC<IProps> = ({ hashTags }) => {
    return (
        <PostHashtagsList>
            {hashTags?.map((singleTag, index) => (
                <PostHashtagsItem href="#" key={index}>{`#${singleTag}`}</PostHashtagsItem>
            ))}
        </PostHashtagsList>
    )
}

export default Post