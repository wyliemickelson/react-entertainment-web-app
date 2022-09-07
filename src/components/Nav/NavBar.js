import React from 'react'
import avatar from './image-avatar.png'
import styled from 'styled-components';
import {ReactComponent as HomeIcon} from './icon-nav-home.svg'
import {ReactComponent as MoviesIcon} from './icon-nav-movies.svg'
import {ReactComponent as TvIcon} from './icon-nav-tv-series.svg'
import {ReactComponent as BookmarkIcon} from './icon-nav-bookmark.svg'
import {ReactComponent as SiteLogo} from './logo.svg'

const icons = [<HomeIcon />, <MoviesIcon />, <TvIcon />, <BookmarkIcon />]

const StyledNav = styled.nav`
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${props => props.theme.darkBlue};

  ${props => `#${props.activePage}`} {
    path {
      fill: white;
    }
  }

  svg {
    overflow: visible;

    &:hover {
      path {
        fill: ${props => props.theme.red};
      }
      cursor: pointer;
    }
  }

   > img {
    width: 2.5rem;
    max-width: 25%;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    width: 45%;
  }

  .avatar {
    border: 2px solid white;
    border-radius: 50%;
  }
`

const NavBar = ({ activePage, handlePageChange }) => {

  return (
    <StyledNav activePage={activePage}>
      <SiteLogo />
      <ul>
        <HomeIcon id='home' onClick={(e) => handlePageChange(e.currentTarget.id)}/>
        <MoviesIcon id='movies'onClick={(e) => handlePageChange(e.currentTarget.id)}/>
        <TvIcon id='tv' onClick={(e) => handlePageChange(e.currentTarget.id)}/>
        <BookmarkIcon id='bookmarks' onClick={(e) => handlePageChange(e.currentTarget.id)}/>
      </ul>
      <img src={avatar} alt='avatar' className='avatar' />
    </StyledNav>
  )
}

export default NavBar