import React from 'react'
import styled from 'styled-components';
import MediaInstance from './MediaInstance';
import ScrollContainer from 'react-indiana-drag-scroll';
import 'animate.css';

const StyledTrendingModule = styled.section`
  h1 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .indiana-scroll-container {
    white-space: nowrap;
    overflow: auto;
    /* ===== Scrollbar CSS ===== */
  /* Firefox */
    scrollbar-width: 4px;
    scrollbar-color: #5a698f #161d2f;

  /* Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #161d2f;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #5a698f;
    border-radius: 10px;
    border: 3px none #ffffff;
  }

    > button {
      display: inline-block;
    }

    > button + * {
      margin-left: 1rem;
    }
  }
`

const TrendingModule = ({ name, contentList, screenSize, setContentList }) => {

  return (
    <StyledTrendingModule className={['animate__animated', 'animate__fadeInDown']}>
      <h1>{name}</h1>
      <ul>
        <ScrollContainer className='scroll-container' hideScrollbars={false}>
          {contentList.map((media) => <MediaInstance mediaData={media} key={media.title} isTrending={true} screenSize={screenSize} setContentList={setContentList} />)}
        </ScrollContainer>
      </ul>
    </StyledTrendingModule>
  )
}

export default TrendingModule