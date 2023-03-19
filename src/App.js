import './App.css';
import Navegacion from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home';
import Pokemones from './views/Pokemones';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navegacion />
      <Routes>
      <Route path='/pokeapi/pokemones' element={<Pokemones />} />
      <Route path='/pokeapi/' element={<Home />} />
      <Route path='/' element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
