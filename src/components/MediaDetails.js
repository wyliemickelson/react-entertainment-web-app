import React from 'react'
import { ReactComponent as DotIcon } from './assets/dot-svgrepo-com.svg'
import { ReactComponent as TVIcon } from './assets/icon-category-tv.svg'
import { ReactComponent as MovieIcon } from './assets/icon-category-movie.svg'
import styled from 'styled-components';

const StyledMediaDetails = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 0.7rem;
  }

  svg path {
    fill: white;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

const MediaDetails = ({ mediaData}) => {
  return (
    <StyledMediaDetails>
      <p>{mediaData.year}</p>
      <DotIcon />
      <div>
        {mediaData.category === 'Movie' ? <MovieIcon /> : <TVIcon />}
        <p>{mediaData.category}</p>
      </div>
      <DotIcon />
      <p>{mediaData.rating}</p>
    </StyledMediaDetails>
  )
}

export default MediaDetails