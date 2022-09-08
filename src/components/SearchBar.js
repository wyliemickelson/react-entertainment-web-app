import React, {useState} from 'react'
import {ReactComponent as SearchIcon} from './icon-search.svg'
import styled from 'styled-components';

const StyledSearchBar = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;

  input {
    width: 100%;
    outline: none;
    padding: 0.75rem 0;

    &:focus {
      border-bottom: 1px solid ${props => props.theme.blue};
    }
  }
`

const SearchBar = ({ categories, value, setValue }) => {

  const handleChange = (e) => setValue(e.target.value);

  return (
    <StyledSearchBar onChange={handleChange}>
      <button><SearchIcon /></button>
      <input type='text' placeholder={`Search for ${categories}`} value={value} />
    </StyledSearchBar>
  )
}

export default SearchBar