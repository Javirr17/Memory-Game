import './App.css';
import PantallaJuego from './componentes/PantallaJuego';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const IDarray = ["1", "1", "2", "2", "3", "3", "4", "4", "5", "5"];
  IDarray.sort(() => {
    return Math.random() - 0.5;
  });

  return (
    <Router>
      <div className="App">
        <h1>MEMORY GAME</h1>
        <Routes>

          <Route path="/" element={<PantallaJuego IDarray={IDarray}/>}>
          </Route>
        
        </Routes>
        </div>
    </Router>
  );
}

export default App;
