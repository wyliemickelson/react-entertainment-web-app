import React, {useState} from 'react'
import NavBar from './Nav/NavBar'
import styled from 'styled-components';
import PageContent from './PageContent'

const StyledPage = styled.section`

`

const modules = {
  home: {
    categories: ['Trending', 'Recommended'],
    contentTypes: ['Movie', 'TV Series'],
  },
  movies: {
    categories: ['Movies'],
    contentTypes: ['Movie'],
  },
  tv: {
    categories: ['TV'],
    contentTypes: ['TV Series'],
  },
  bookmarks: {
    categories: ['Bookmarked Movies', 'Bookmarked TV'],
    contentTypes: ['Bookmarked', 'Movie', 'TV Series']
  },
}

const Page = () => {
  const [activePage, setActivePage] = useState('home');

  const handlePageChange = (pageName) => {
    setActivePage(pageName);
  }

  return (
    <StyledPage>
      <NavBar activePage={activePage} handlePageChange={handlePageChange} />
      <PageContent activeCategories={modules[activePage].contentTypes} searchCategories={modules[activePage].categories}>
      </PageContent>
    </StyledPage>
  )
}

export default Page