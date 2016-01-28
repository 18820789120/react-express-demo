important {createStore, applyMiddleware} from "redux";
important thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  createLogger()
)(createStore)

exports default function  configureStore(initialState){
  const store = createStoreWithMiddleware("dddd", initialState);

  return store;
}
