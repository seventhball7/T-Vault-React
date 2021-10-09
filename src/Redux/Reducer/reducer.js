import types from "../Actions/type";

const SafeReducer = (state = [], action) => {
  console.log(action, "Actions");
  switch (action.type) {
    case types.CREATESAFE:
      console.log(action.payload, "actionpayload");
      return [...state, { ...action.payload }];

    case types.EDITSAFE:
      return state.map((element) => {
        if (element.id === action.payload.id) {
          return {
            ...element,
            ...action.payload,
          };
        } else {
          return element;
        }
      });
    case types.SELECTED_SAFE:
      return state.map((enableState) =>
        enableState.id === action.payload.id
          ? { ...enableState, enable: true }
          : enableState
      );

    case types.DELETE_SAFE:
      return state.filter((element) => element.id !== action.payload);

    case types.ADDFOLDER:
      console.log(action.payload, "actionpayload");
      return [state.secret, { ...action.payload }];
    default:
      return state;
  }
};
export default SafeReducer;
