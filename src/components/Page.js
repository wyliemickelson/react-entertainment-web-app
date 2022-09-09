import React, {useState} from 'react'
import NavBar from './Nav/NavBar'
import styled from 'styled-components';
import PageContent from './PageContent'
import SearchBar from './SearchBar';

const StyledPage = styled.section`
  
`

const modules = {
  home: ['Trending', 'Recommended'],
  movies: ['Movies'],
  tv: ['TV'],
  bookmarks: ['Bookmarked Movies', 'Bookmarked TV'],
}

const Page = () => {
  const [activePage, setActivePage] = useState('home');

  const handlePageChange = (pageName) => {
    setActivePage(pageName);
  }

  return (
    <StyledPage>
      <NavBar activePage={activePage} handlePageChange={handlePageChange} />
      <PageContent activeModules={modules[activePage]}>
      </PageContent>
    </StyledPage>
  )
}

export default Page