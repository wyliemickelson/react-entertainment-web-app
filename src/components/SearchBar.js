import {ReactComponent as SearchIcon} from './assets/icon-search.svg'
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

  const getPlaceholder = () => {
    if (categories.some((cat) => cat.includes('Bookmarked'))) return 'Bookmarked Shows';
    if (categories.includes('Trending')) return 'Movies or TV';
    return categories;
  }

  return (
    <StyledSearchBar>
      <button><SearchIcon /></button>
      <input type='text' placeholder={`Search for ${getPlaceholder()}`} value={value} onChange={handleChange} />
    </StyledSearchBar>
  )
}

export default SearchBar