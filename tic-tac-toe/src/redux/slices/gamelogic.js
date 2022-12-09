import { createSlice } from "@reduxjs/toolkit";
import calculateWinner from "../../calculateWinner"

const initialState = {
  xIsNext: true,
  step: 0,  
  history: [{squares: Array(9).fill(null)}],
};

export const gameLogicSlice = createSlice({
  name: "gameLogic",
  initialState,
  reducers: {
   
    handleClick: (state, action) => {
      const history = state.history.slice(0, state.step + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      const winner = calculateWinner(current.squares);
      if (winner || squares[action.payload]) {
        return;
      }
      squares[action.payload] = state.xIsNext ? "X" : "O";
  
      state.history = (history.concat([{ squares: squares }]));
      state.xIsNext = (!state.xIsNext);
      state.step = (history.length);
    },
  
    jumpTo: (state, action) => {
      state.step = action.payload;
      state.xIsNext = (action.payload % 2 === 0);
    },
  }})  

// Action creators are generated for each case reducer function
export const { handleClick, jumpTo } = gameLogicSlice.actions;

export default gameLogicSlice.reducer;