import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import styled from 'styled-components';
import contentData from '../data.json';
import ContentModule from './ContentModule';
import TrendingModule from './TrendingModule';


const StyledPageContent = styled.section`
  width: 95%;
  margin: 0 auto;
  padding: 1% 2.5% 5% 2.5%;
  padding-top: clamp(1rem, 1%, 1%);

  section + section {
    margin-top: 2rem;
  }

  ${props => props.screenSize === 'large' && `
      margin-left: 145px;
  `}
`

const PageContent = ({ activeModules, screenSize }) => {
  const [contentList, setContentList] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setContentList(contentData);
  }, [])

  const isMovie = (media) => media.category === 'Movie';

  const filterContent = (moduleName) => {
    if (moduleName === 'Trending') {
      return contentList.filter((media) => media.isTrending);
    }
    if (moduleName === 'Recommended') {
      return contentList.filter((media) => media.isRecommended);
    }
    if (moduleName.includes('Bookmarked')) {
      let type = moduleName.split(' ')[1];
      if (type === 'Movies') type = 'Movie';
      return contentList.filter((media) => media.isBookmarked && media.category === type)
    }
    if (moduleName === 'Movies') {
      return contentList.filter((media) => isMovie(media));
    }
    return contentList.filter((media) => media.category === 'TV');
  }

  const filterBySearch = () => {
    let filteredList = contentList.filter((media) => media.title.toLowerCase().includes(searchValue.toLowerCase()))
    if (activeModules.includes('Bookmarked Movies')) return filteredList.filter((media) => media.isBookmarked);
    if (activeModules.includes('Movies')) return filteredList.filter((media) => media.category === 'Movie');
    if (activeModules.includes('TV')) return filteredList.filter((media) => media.category === 'TV');
    return filteredList;
  }

  return (
    <StyledPageContent screenSize={screenSize}>
      <SearchBar categories={activeModules} value={searchValue} setValue={setSearchValue} />
      {searchValue !== "" && <ContentModule searchValue={searchValue} contentList={filterBySearch()} screenSize={screenSize} setContentList={setContentList} />}
      {searchValue === "" && activeModules.map((module) => {
        return module === 'Trending'
          ? <TrendingModule name={module} contentList={filterContent(module)} key={module} screenSize={screenSize} setContentList={setContentList} />
          : <ContentModule name={module} contentList={filterContent(module)} key={module} screenSize={screenSize} setContentList={setContentList} />
      })}
    </StyledPageContent>
  )
}

export default PageContent