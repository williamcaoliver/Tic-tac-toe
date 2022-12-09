import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleClick } from "./redux/slices/gamelogic";
import "./index.css";

export default function Square(props) {
  const value = useSelector((state) => {
    //console.log("State: " + state.gameLogic.history[state.gameLogic.step][props.index])
    const history = state.gameLogic.history[state.gameLogic.step];
    const square = history.squares[props.index];
    return square;
  });
  const dispatch = useDispatch();

  console.log(value);
  return (
    <button
      className="square"
      onClick={() => dispatch(handleClick(props.index))}
    >
      {value}
    </button>
  );
}
