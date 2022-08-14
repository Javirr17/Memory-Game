import './App.css';
import PantallaJuego from './componentes/PantallaJuego';
import Boton from './componentes/Boton';

function App() {

  const IDarray = ["1", "1", "2", "2", "3", "3", "4", "4", "5", "5"];
  IDarray.sort(() => {
    return Math.random() - 0.5;
  });

  const buttonHandler = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <h1>MEMORY GAME</h1>
      <PantallaJuego IDarray={IDarray}/>
      <Boton buttonHandler={buttonHandler}/>
    </div>
  );
}

export default App;
