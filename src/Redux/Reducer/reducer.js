import types from "../Actions/type";

const INITIAL_STATE = [
  {
    safeName: "ascasca",
    owner: "acascsa",
    Description: "acasca",
    Catagory: "personal",
    id: 0.30141334696963806,
  },
];
const SafeReducer = (state = INITIAL_STATE, action) => {
  console.log(action, "Actions");
  switch (action.type) {
    case types.CREATESAFE:
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
    case types.DELETE_SAFE:
      return state.filter((element) => element.id !== action.payload);
    default:
      return state;
  }
};
export default SafeReducer;
