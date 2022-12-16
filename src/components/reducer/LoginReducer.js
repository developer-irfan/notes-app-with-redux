const initialState = false;
const loginReducer = (state = initialState, action) => {
  if (action.type === "USERLOGIN") {
    return (state = true);
  }
  if (action.type === "USERLOGOUT") {
    return (state = false);
  }
  return state;
};
export default loginReducer;
