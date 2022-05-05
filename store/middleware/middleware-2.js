export default (storeAPI) => (next) => (action) => {
  setTimeout(() => {
    next(action);
  }, 1000);
};
