import { createStore } from "redux";
import demReducer from "./reducers";
const store=createStore(demReducer);
export default store;