const safeReducer = (state = [], action) => {
  switch (action.type) {
    case "addSafe":
      return state + action.payload;
    default:
      return state;
  }
};
export default safeReducer;
