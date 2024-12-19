import Game from '../Game';
import Header from '../Header/Header'
import ShowGuess from '../ShowGuess/ShowGuess';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <ShowGuess />
      <div className="game-wrapper">
        <Game />
      </div>
    </div>
  );
}

export default App;
