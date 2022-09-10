import React, {useState} from 'react'
import { ReactComponent as BookmarkFull } from './assets/icon-bookmark-full.svg'
import { ReactComponent as BookmarkEmpty } from './assets/icon-bookmark-empty.svg'
import styled from 'styled-components';

const StyledBookmark = styled.label`
  padding: 1rem;
  border-radius: 50%;
  background-color: ${props => props.theme.darkBlueClear };
  position: absolute;
  right: 5%;
  top: 5%;

  svg {
    position: absolute;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  &:active {
    transform: scale(1.05);
  }

  ${props => props.mouseIsHovered && `
    background-color: ${props.theme.blue};
    cursor: pointer;
    }
  `}
`

const Bookmark = ({ isMarked, onClick }) => {
  const [mouseIsHovered, setMouseIsHovered] = useState(false);

  const handleMouseOver = () => setMouseIsHovered(true);
  const handleMouseOut = () => setMouseIsHovered(false);

  return (
      <StyledBookmark id='bookmark' onClick={onClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
      mouseIsHovered={mouseIsHovered}>
        {isMarked ? <BookmarkFull /> : <BookmarkEmpty />}
      </StyledBookmark>
  )
}

export default Bookmark