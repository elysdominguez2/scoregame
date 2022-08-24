
import './App.scss';
import Scoreboard from './components/Scoreboard';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <header><Title/></header>
      <main>
        <Scoreboard/>
       
      </main>
    </div>
  );
}

export default App;
