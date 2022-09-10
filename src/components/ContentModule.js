import React from 'react'
import MediaInstance from './MediaInstance'
import styled from 'styled-components';
import 'animate.css';

const StyledContentModule = styled.section`
  ul {
    display: grid;
    grid-template-columns: repeat(${props => props.columns}, 1fr);
    grid-column-gap: clamp(1rem, 2%, 2%);
    grid-row-gap: clamp(1.25rem, 1%, 1%);
  }

  h1 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

`

const ContentModule = ({ name, contentList, screenSize, searchValue, setContentList }) => {

  const moduleColumns = screenSize === 'large' ? 4 : screenSize === 'medium' ? 3 : 2;
  const animationClasses = ['animate__animated', 'animate__fadeIn'];

  return (
    <StyledContentModule columns={moduleColumns} className={animationClasses}>
      <h1>{searchValue ? `Found ${contentList.length} results for '${searchValue}'` : name }</h1>
      <ul>
        {contentList.map((media) => <MediaInstance mediaData={media} key={media.title} screenSize={screenSize} setContentList={setContentList}/>)}
      </ul>
    </StyledContentModule>
  )
}

export default ContentModule