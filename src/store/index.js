import {createStore} from "redux";
import {reducerActiveBranch} from "./reducerActiveBranch";


export const store = createStore(reducerActiveBranch)