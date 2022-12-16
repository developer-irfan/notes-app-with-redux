const initialState = false;
const showOrHideNewNoteForm = (state = initialState, action) => {
  if (action.type === "DISPLAYFORM") {
    return (state = true);
  }
  return state;
};
export default showOrHideNewNoteForm;
