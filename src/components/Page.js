import React, {useState} from 'react'
import NavBar from './Nav/NavBar'
import styled from 'styled-components';
import PageContent from './PageContent'

const StyledPage = styled.section`

`

const modules = {
  home: ['trending', 'recommended'],
  movies: ['movies'],
  tv: ['tv'],
  bookmarks: ['bookmarked movies', 'bookmarked tv'],
}

const Page = () => {
  const [activePage, setActivePage] = useState('home');
  const [activeModules, setActiveModules] = useState(['trending', 'recommended']);

  const handlePageChange = (pageName) => {
    setActivePage(pageName);
    setActiveModules(modules[pageName]);
  }

  return (
    <StyledPage>
      <NavBar activePage={activePage} handlePageChange={handlePageChange} />
      <PageContent activeModules={activeModules} searchCategories={modules[activePage]}>
      </PageContent>
    </StyledPage>
  )
}

export default Page