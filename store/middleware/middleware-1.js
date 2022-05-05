// ES5 Version
export default function exampleMiddleware(storeAPI) {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      console.log("M1");

      // invokes the next middleware or-
      // the original dispatch if there is no next middleware
      next(action);

      // accesses the state
      storeAPI.getState();

      // u can also do a dispatch!
      // storeAPI.dispatch(anAction);

      // Not Mandatory.
      // This would be the returned value by the-
      // original dispatch if this is the First Middleware!
      return "I am returned from the dispatch!";
    };
  };
}

// ES6 Version
// export default (storeAPI) => (next) => (action) => {}
