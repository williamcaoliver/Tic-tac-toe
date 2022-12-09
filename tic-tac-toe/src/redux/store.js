import { configureStore } from "@reduxjs/toolkit";
import GameLogicReducer from "./slices/gamelogic"

export default configureStore({
  reducer: {
    gameLogic: GameLogicReducer,
  },
});