import ComboBox from './components/Comboxbox';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <div className='main-page d-flex justify-content-center align-items-center flex-column'>
        <SearchBar />
        <ComboBox />
      </div>
    </div>
  );
}

export default App;
