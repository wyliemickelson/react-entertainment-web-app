import React from 'react'
import MediaDetails from './MediaDetails'
import styled from 'styled-components';
import Bookmark from './Bookmark';

const StyledMediaInstance = styled.div`
  position: relative;
  ${props => props.isTrending && `
      width: 200px;
  `}

  img {
    border-radius: 8px;
  }

  h2 {
    font-size: 17px;
  }

  > div {
    ${props => props.isTrending && `
        position: absolute;
        left: 5%;
        bottom: 5%;
    `}
  }
`

const MediaInstance = ({ mediaData, isTrending }) => {

  const imagePath = isTrending ? mediaData.thumbnail.trending.small : mediaData.thumbnail.regular.small;

  return (
    <StyledMediaInstance isTrending={isTrending}>
      <img src={require(`${imagePath}`)} />
      <Bookmark isMarked={mediaData.isBookmarked} />
      <div>
        <MediaDetails mediaData={mediaData} />
        <h2>{mediaData.title}</h2>
      </div>
    </StyledMediaInstance>
  )
}

export default MediaInstance