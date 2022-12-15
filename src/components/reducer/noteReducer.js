const initialState = {
  list: [],
};
const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      const { id, note, noteDescription } = action.payload;
      //   console.log({ list: [...state.list, { note }] });
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            note: note,
            noteDescription: noteDescription,
          },
        ],
      };

    case "DELETE":
      const updatedItem = state.list.filter((note) => note.id != action.id);
      return {
        ...state,
        list: updatedItem,
      };

    default:
      return state;
  }
};

export default noteReducer;
