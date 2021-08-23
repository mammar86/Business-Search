import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

function SearchBar() {
  return (
      <div className='search-bar m-3'>
        <TextField label="City"/>
      </div>
  );
}

export default SearchBar;

// const SearchBarWrapper = styled.div`
// `