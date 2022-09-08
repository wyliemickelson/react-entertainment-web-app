import React, {useState, useEffect} from 'react'
import SearchBar from './SearchBar'
import styled from 'styled-components';
import ContentModule from './ContentModule';
import contentData from '../data.json';

const StyledPageContent = styled.section`
  padding: 1rem;
`

const PageContent = ({ searchCategories, activeCategories }) => {
  const [contentList, setContentList] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setContentList(contentData);
  }, [])

  const filterContentList = (type) => {
    return contentList.filter((media) => media.category === type);
  }

  return (
    <StyledPageContent>
      <SearchBar categories={searchCategories} value={searchValue} setValue={setSearchValue} />
      {activeCategories.map((type) => <ContentModule type={type} key={type} filteredContent={filterContentList(type)} />)}
    </StyledPageContent>
  )
}

export default PageContent