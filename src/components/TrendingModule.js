import React from 'react'
import styled from 'styled-components';
import MediaInstance from './MediaInstance';
import ScrollContainer from 'react-indiana-drag-scroll';

const StyledTrendingModule = styled.section`
  h1 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .scroll-container {
    white-space: nowrap;
    overflow: auto;

    > div {
      display: inline-block;
    }

    > div + * {
      margin-left: 1rem;
    }
  }
`

const TrendingModule = ({ name, contentList, screenSize, setContentList }) => {

  return (
    <StyledTrendingModule>
      <h1>{name}</h1>
      <ul>
        <ScrollContainer className='scroll-container'>
          {contentList.map((media) => <MediaInstance mediaData={media} key={media.title} isTrending={true} screenSize={screenSize} setContentList={setContentList} />)}
        </ScrollContainer>
      </ul>
    </StyledTrendingModule>
  )
}

export default TrendingModule