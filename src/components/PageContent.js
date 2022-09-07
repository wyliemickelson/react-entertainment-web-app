import React, {useState} from 'react'
import SearchBar from './SearchBar'
import TrendingTab from './TrendingTab'
import RecommendedTab from './RecommendedTab'
import styled from 'styled-components';
import ContentModule from './ContentModule';

const StyledPageContent = styled.section`
  padding: 1rem;
`

const PageContent = ({ searchCategories, activeModules }) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <StyledPageContent>
      <SearchBar categories={searchCategories} value={searchValue} setValue={setSearchValue} />
      {activeModules.map((type) => <ContentModule type={type} />)}
    </StyledPageContent>
  )
}

export default PageContent