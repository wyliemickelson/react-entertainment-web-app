import React from 'react'
import MediaDetails from './MediaDetails'
import styled from 'styled-components';
import Bookmark from './Bookmark';

const StyledMediaInstance = styled.div`
  position: relative;

  img {
    border-radius: 8px;
  }

  h2 {
    font-size: 17px;
  }
`

const MediaInstance = ({ mediaData }) => {
  return (
    <StyledMediaInstance>
      <img src={require(`${mediaData.thumbnail.regular.small}`)} />
      <Bookmark isMarked={mediaData.isBookmarked} />
      <MediaDetails mediaData={mediaData} />
      <h2>{mediaData.title}</h2>
    </StyledMediaInstance>
  )
}

export default MediaInstance