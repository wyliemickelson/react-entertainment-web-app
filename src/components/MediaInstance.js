import React from 'react'
import MediaDetails from './MediaDetails'
import styled from 'styled-components';
import Bookmark from './Bookmark';

const StyledMediaInstance = styled.div`
  position: relative;
  max-width: 560px;

  ${props => props.isTrending && `
      width: 70%;
  `}

  img {
    border-radius: 8px;
  }

  h2 {
    font-size: 1rem;
  }

  > div {
    ${props => props.isTrending && `
        position: absolute;
        left: 5%;
        bottom: 5%;
    `}
  }
`

const MediaInstance = ({ mediaData, isTrending, screenSize, setContentList }) => {

  let trendingscreenSize = screenSize;
  if (screenSize === 'medium') trendingscreenSize = 'large'
  const imagePath = isTrending ? mediaData.thumbnail.trending[trendingscreenSize] : mediaData.thumbnail.regular[screenSize];

  const handleBookmarkClick = () => {
    setContentList(prevState => (
      prevState.map(media => media.title === mediaData.title ?
        {...media, isBookmarked: !media.isBookmarked} : media)
    ))
  }

  return (
    <StyledMediaInstance isTrending={isTrending}>
      <img src={require(`${imagePath}`)} alt='media' />
      <Bookmark isMarked={mediaData.isBookmarked} onClick={handleBookmarkClick} />
      <div>
        <MediaDetails mediaData={mediaData} />
        <h2>{mediaData.title}</h2>
      </div>
    </StyledMediaInstance>
  )
}

export default MediaInstance