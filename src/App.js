import Navegacion from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home';
import Pokemones from './views/Pokemones';
import Detalle from './views/Detalle';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navegacion />
      <Routes>
      <Route path='/pokeapi/detalles/:name' element={<Detalle />} />  
      <Route path='/pokeapi/pokemones' element={<Pokemones />} />
      <Route path='/pokeapi/' element={<Home />} />
      <Route path='/' element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
