import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export function SearchBar() {
  return (
      <div className='search-bar m-3'>
        <TextField label="City"/>
      </div>
  );
}

