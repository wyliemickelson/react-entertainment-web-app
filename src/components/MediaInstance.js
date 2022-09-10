import React, {useState} from 'react'
import MediaDetails from './MediaDetails'
import styled from 'styled-components';
import Bookmark from './Bookmark';
import PlayButton from './PlayButton';

const StyledMediaInstance = styled.button`
  position: relative;
  max-width: 560px;
  border-radius: 8px;
  overflow: hidden;

  img {
    border-radius: 8px;
  }

  img:hover {
    opacity: 50%;
  }

  ${props => props.isTrending && `
      width: 70%;
  `}

  h2 {
    font-size: 1rem;
  }

  > section {
    ${props => props.isTrending && `
        position: absolute;
        left: 5%;
        bottom: 5%;
    `}
  }
`

const MediaInstance = ({ mediaData, isTrending, screenSize, setContentList }) => {
  const [mouseIsHovered, setMouseIsHovered] = useState(false);

  let trendingscreenSize = screenSize;
  if (screenSize === 'medium') trendingscreenSize = 'large'
  const imagePath = isTrending ? mediaData.thumbnail.trending[trendingscreenSize] : mediaData.thumbnail.regular[screenSize];

  const handleBookmarkClick = () => {
    setContentList(prevState => (
      prevState.map(media => media.title === mediaData.title ?
        {...media, isBookmarked: !media.isBookmarked} : media)
    ))
  }

  const handleMouseOver = () => setMouseIsHovered(true);
  const handleMouseOut = () => setMouseIsHovered(false);

  return (
    <StyledMediaInstance isTrending={isTrending} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} 
    bookmarkIsHovered={true} imagePath={imagePath}>
      {mouseIsHovered && <PlayButton />}
      <img src={require(`${imagePath}`)} alt='media' />
      <Bookmark isMarked={mediaData.isBookmarked} onClick={handleBookmarkClick} />
      <section>
        <MediaDetails mediaData={mediaData} />
        <h2>{mediaData.title}</h2>
      </section>
    </StyledMediaInstance>
  )
}

export default MediaInstance