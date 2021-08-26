import React from 'react';
import { ComboBox } from '../widgets/ComboBox';
import { SearchBar } from '../widgets/SearchBar';

export function Main() {
  return (
    <div className="main-page d-flex justify-content-center align-items-center flex-column">
      <SearchBar />
      <ComboBox />
    </div>
  );
}
