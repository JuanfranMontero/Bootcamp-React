
import './App.css';
import Mensaje from './Mensaje.js';

const Description = () => {

  return <p>Esta es la app del Bootcamp de React</p>
}

function App() {

  return (
    <div className="App">
      <Mensaje color = 'red' message = 'Esto sirve para hacer un componente reutilizable' />
      <Description />
    </div>
  );
}

export default App;
