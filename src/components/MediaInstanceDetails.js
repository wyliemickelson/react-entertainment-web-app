import { computeHeadingLevel } from '@testing-library/react';
import React from 'react'
import styled from 'styled-components';
import movieIcon from './icon-category-movie.svg'
import tvIcon from './icon-category-tv.svg'
import { ReactComponent as DotIcon } from './dot-svgrepo-com.svg'

const StyledMediaInstanceDetails = styled.div`
  display: flex;
  align-items: center;

  svg path {
    fill: white;
  }

  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`

const MediaInstanceDetails = ({ year, category, rating }) => {
  return (
    <StyledMediaInstanceDetails>
      <p>{year}</p>
      <DotIcon />
      <div>
        <img src={category === 'Movie' ? movieIcon : tvIcon} />
        <p>{category}</p>
      </div>
      <DotIcon />
      <p>{rating}</p>
    </StyledMediaInstanceDetails>
  )
}

export default MediaInstanceDetails