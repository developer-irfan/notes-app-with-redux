export const add_note = (note, noteDescriptioin) => {
  return {
    type: "ADD",
    payload: {
      id: Math.floor(Math.random() * 10),
      note: note,
      noteDescription: noteDescriptioin,
    },
  };
};

export const delete_note = (id) => {
  return {
    type: "DELETE",
    id,
  };
};

export const showAddNotesForm = () => {
  return {
    type: "DISPLAYFORM",
  };
};

export const userLogin = () => {
  return {
    type: "USERLOGIN",
  };
};

export const userLogout = () => {
  return {
    type: "USERLOGOUT",
  };
};
