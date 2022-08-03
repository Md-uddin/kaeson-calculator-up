import { combineReducers } from "redux";
import calculadoraReducer from "./calculadoraReducer";
import errorMessageReducer from "./errorMessage";

const rootReducer = combineReducers({
  errorMessage: errorMessageReducer,
  calculadora: calculadoraReducer,
});

export default rootReducer;
