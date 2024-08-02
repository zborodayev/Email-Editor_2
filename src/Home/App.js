import {Board} from './components/Board';
import './App.css';

export const App = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  )
}