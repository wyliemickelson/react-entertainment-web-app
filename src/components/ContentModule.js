import React from 'react'
import MediaInstance from './MediaInstance'
import styled from 'styled-components';

const StyledContentModule = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 4%;
  }

  h1 {
    margin-bottom: 1rem;
  }
`

const ContentModule = ({ type, filteredContent }) => {
  return (
    <StyledContentModule>
      <h1>{type}</h1>
      <ul>
        {filteredContent.map((media) => <MediaInstance data={media} key={media.title} />)}
      </ul>
    </StyledContentModule>
  )
}

export default ContentModule