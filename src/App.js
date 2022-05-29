import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Footer from './components/Footer/Footer'
import Home from './Pages/Home/home';
import CharSheet from './Pages/CharSheet/charSheet';
import { RaceSelection } from './Pages/CharQuiz/Races';
import { SubRaces } from './Pages/CharQuiz/SubRaces';

function App() {

  return (
    <BrowserRouter>
      <div className="app" >
        <Header />
        <Routes>
          <Route path='/' element={<Home />}>
          </Route>
          <Route path="/charSheet" element={<CharSheet />} />
          <Route path="/RaceSelect" element={<RaceSelection />} />
          <Route path="/SubRaceSelect" element={<SubRaces />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter >
  );
}

export default App;
