const initialState = false;
const loginReducer = (state = initialState, action) => {
  if (action.type === "USERLOGIN") {
    return (state = true);
  }
  return state;
};
export default loginReducer;
