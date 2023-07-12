
import './App.css';
import ContainerHome from './componentes/ContainerHome';
import Menu from './componentes/Menu';

function App() {
  return (
  <div>
    <header>
      <h1 className='titleMenuHome'>Hello world</h1>
      <Menu/>
    </header>
    <main>
      <ContainerHome/>
    </main>
  </div>
  );
}

export default App;
