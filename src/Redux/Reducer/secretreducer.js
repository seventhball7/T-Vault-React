import types from "../Actions/type";

const returninitial = (id) => {
  return {
    id: id,
    list: [],
  };
};
const SecretReducer = (secrets = [], action) => {
  console.log(action, "Actions");

  switch (action.type) {
    case types.CREATESAFEINFOL:
      console.log(action.payload, "actionpayload");
      return [...secrets, returninitial(action.payload.id)];

    case types.ADDFOLDER:

    case types.DELETESAFEINFOL:

    default:
      return secrets;
  }
};
export default SecretReducer;
