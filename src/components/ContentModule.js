import React from 'react'
import MediaInstance from './MediaInstance'
import styled from 'styled-components';

const StyledContentModule = styled.section`
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
    grid-row-gap: 1.25rem;
  }

  h1 {
    font-size: 20px;
    margin-bottom: 1rem;
  }
`

const ContentModule = ({ name, contentList }) => {
  return (
    <StyledContentModule>
      <h1>{name}</h1>
      <ul>
        {contentList.map((media) => <MediaInstance mediaData={media} key={media.title} /> )}
      </ul>
    </StyledContentModule>
  )
}

export default ContentModule