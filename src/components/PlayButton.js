import React from 'react'
import styled from 'styled-components';
import {ReactComponent as IconPlay} from './assets/icon-play.svg'

const StyledPlayButton = styled.div`
  z-index: 5;
  pointer-events: none;
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -75%);

  align-items: center;
  gap: 0.5rem;
  background-color: red;
  padding: 0.4rem;
  padding-right: 0.8rem;
  border-radius: 50px;
  max-width: fit-content;
  max-height: fit-content;
  background-color: ${props => props.theme.blueClear};

  p {
    font-size: 0.8rem;
  }
`

const PlayButton = () => {
  return (
    <StyledPlayButton>
      <IconPlay />
      <p>Play</p>
    </StyledPlayButton>
  )
}

export default PlayButton