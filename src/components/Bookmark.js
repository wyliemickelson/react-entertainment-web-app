import React from 'react'
import { ReactComponent as BookmarkFull } from './assets/icon-bookmark-full.svg'
import { ReactComponent as BookmarkEmpty } from './assets/icon-bookmark-empty.svg'
import styled from 'styled-components';

const StyledBookmark = styled.button`
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
`

const Bookmark = ({ isMarked, onClick }) => {

  return (
    <StyledBookmark onClick={onClick}>
      {isMarked ? <BookmarkFull /> : <BookmarkEmpty />}
    </StyledBookmark>
  )
}

export default Bookmark