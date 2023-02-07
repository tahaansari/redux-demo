const redux = require("redux");
const reduxLogger = require("redux-logger");

function buyCake() {
  return {
    type: "BUY_CAKE",
  };
}

function buyIceCream() {
  return {
    type: "BUY_ICECREAM",
  };
}

const cakeReducer = (
  state = {
    numOfCakes: 10,
  },
  action
) => {
  switch (action.type) {
    case "BUY_CAKE":
      return { ...state, numOfCakes: state.numOfCakes - 1 };

    default:
      return state;
  }
};

const iceCreamReducer = (
  state = {
    numOfIceCream: 20,
  },
  action
) => {
  switch (action.type) {
    case "BUY_ICECREAM":
      return { ...state, numOfIceCream: state.numOfIceCream - 1 };
    default:
      return state;
  }
};

const rootReducer = redux.combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware(logger);

const store = redux.createStore(rootReducer, applyMiddleware);
const unsubscribe = store.subscribe(() => {});

console.log("initial state ", store.getState());

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
