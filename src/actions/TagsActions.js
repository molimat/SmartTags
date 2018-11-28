export const addTag = device => ({
    type: "ADD_TAG",
    payload: {device}
  });

export const removeTag = id => ({
    type: "REMOVE_TAG",
    payload: id
});

export const renameTag = (id, text) => ({
    type: "RENAME_TAG",
    payload: {id, text}
  });

