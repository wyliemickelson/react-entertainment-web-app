import React from 'react'
import styled from 'styled-components';
import MediaInstanceDetails from './MediaInstanceDetails';

const StyledMediaInstance = styled.div`
  width: 48%;
  font-size: 13px;
  margin-bottom: 1.5rem;

  > img {
    border-radius: 1rem;
  }
`

const MediaInstance = ({ data }) => {
  return (
    <StyledMediaInstance>
      <img src={require(`${data.thumbnail.regular.small}`)} alt='media' />
      <MediaInstanceDetails year={data.year} category={data.category} rating={data.rating} />
      <h2>{data.title}</h2>
    </StyledMediaInstance>
  )
}
export default MediaInstance