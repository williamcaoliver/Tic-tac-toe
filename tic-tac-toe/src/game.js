import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { jumpTo } from "./redux/slices/gamelogic";
import  calculateWinner  from "./calculateWinner"
import Board from "./board"
import "./index.css"

export default function Game() {
    const dispatch = useDispatch();
    
    const { history } = useSelector( state => state.gameLogic);
    const { step } = useSelector( state => state.gameLogic);
    
    const current = history[step];
    const winner = calculateWinner(current.squares);
  
    /* //Below
    const moves = history.map((move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => dispatch(jumpTo(move))}>{desc}</button>
        </li>
      );
    }); */

    const moves = useSelector((state) => {
      return state.gameLogic.history.map((state, move) => {
        const desc = move ? "Go to move #" + move : "Go to game start";
        return (
          <li key={move}>
            <button onClick={() => dispatch(jumpTo(move))}>{desc}</button>
          </li>
        ) 
      })
    })
  
    const status = useSelector((state) => {
      return winner ? "Winner" + winner: "Next player: " + (state.gameLogic.xIsNext ? "X" : "O");
    })
  
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }

//   const obj = {
//     name: "dan",
//     age: 8,
//   }

// const {age} = true