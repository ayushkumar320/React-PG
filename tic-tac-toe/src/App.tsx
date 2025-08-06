import React from "react";
import {useState} from "react";
import "./App.css";
import Block from "./components/Block";

function App() {
  const [state, setState] = useState(Array(9).fill(null));

  const [currentTurn, setCurrentTurn] = useState("X");

  const checkWinner = () => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        alert(`Player ${state[a]} wins!`);
        setState(Array(9).fill(null)); // Reset the game
        return;
      }
    }
  };

  const checkWinnerWithState = (
    currentState: (string | null)[],
    currentPlayer: string
  ) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (
        currentState[a] !== null &&
        currentState[a] === currentState[b] &&
        currentState[a] === currentState[c]
      ) {
        alert(`Player ${currentPlayer} wins!`);
        setState(Array(9).fill(null)); // Reset the game
        setCurrentTurn("X"); // Reset to X
        return true; // Game ended
      }
    }

    // Check for draw
    if (!currentState.includes(null)) {
      alert("It's a draw!");
      setState(Array(9).fill(null)); // Reset the game
      setCurrentTurn("X"); // Reset to X
      return true; // Game ended
    }

    return false; // Game continues
  };

  const handleBlockClick = (index: number) => {
    if (state[index] || state.includes(null) === false) {
      return; // Block already filled or game over
    }
    const stateCopy = Array.from(state);
    stateCopy[index] = currentTurn;
    setState(stateCopy);

    // Check if someone won with the new state
    const gameEnded = checkWinnerWithState(stateCopy, currentTurn);

    // Only switch turns if the game continues
    if (!gameEnded) {
      setCurrentTurn(currentTurn === "X" ? "O" : "X");
    }
  };

  return (
    <div className="board">
      <div className="row">
        <Block onClick={() => handleBlockClick(0)} value={state[0]} />
        <Block onClick={() => handleBlockClick(1)} value={state[1]} />
        <Block onClick={() => handleBlockClick(2)} value={state[2]} />
      </div>
      <div className="row">
        <Block onClick={() => handleBlockClick(3)} value={state[3]} />
        <Block onClick={() => handleBlockClick(4)} value={state[4]} />
        <Block onClick={() => handleBlockClick(5)} value={state[5]} />
      </div>
      <div className="row">
        <Block onClick={() => handleBlockClick(6)} value={state[6]} />
        <Block onClick={() => handleBlockClick(7)} value={state[7]} />
        <Block onClick={() => handleBlockClick(8)} value={state[8]} />
      </div>
    </div>
  );
}

export default App;
