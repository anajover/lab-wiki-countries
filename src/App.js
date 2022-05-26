import { Route, Routes } from 'react-router-dom';

import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="container">
        <CountriesList />
        <Routes>
          <Route path="/:id" element={<CountryDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
