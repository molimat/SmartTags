export const addTag = device => ({
    type: "ADD_TAG",
    payload: device
  });

export const removeTag = id => ({
    type: "REMOVE_TAG",
    payload: id
});

export const renameTag = (device, text) => ({
    type: "RENAME_TAG",
    payload: (device, text)
  });

  export const addTagFake = text => (
    console.log("ADDTAGFAKE CHAMADA COM PROPS" + text) ,
    {
    type: "ASYNC_ADD_TAG_FAKE",
    payload: text
  });