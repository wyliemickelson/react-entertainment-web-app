import React, { useState, useEffect } from 'react'
import NavBar from './Nav/NavBar'
import styled from 'styled-components';
import PageContent from './PageContent'

const StyledPage = styled.section`
  ${props => props.screenSize === 'large' && `
      display: flex;
      margin-top: 2.5vh;
  `}

  
`

const modules = {
  home: ['Trending', 'Recommended'],
  movies: ['Movies'],
  tv: ['TV'],
  bookmarks: ['Bookmarked Movies', 'Bookmarked TV'],
}

const Page = () => {
  const [activePage, setActivePage] = useState('home');
  const [screenSize, setscreenSize] = useState('small');

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    handleWindowResize();

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, [])

  const handleWindowResize = () => {
    const windowWidth = window.innerWidth;
    let size = windowWidth >= 1000 ? 'large' : windowWidth >= 650 ? 'medium' : 'small';
    setscreenSize(size);
  }

  const handlePageChange = (pageName) => {
    setActivePage(pageName);
    window.scrollTop = document.documentElement.scrollTop = 0;
  }


  return (
    <StyledPage screenSize={screenSize}>
      <NavBar activePage={activePage} handlePageChange={handlePageChange} screenSize={screenSize} />
      <PageContent activeModules={modules[activePage]} screenSize={screenSize} />
    </StyledPage>
  )
}

export default Page