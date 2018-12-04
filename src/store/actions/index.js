export const addTag = (tag)=> ({
    type: "ADD_TAG",
    payload: tag
  });

export const removeTag = address => ({
    type: "REMOVE_TAG",
    payload: address
});

export const renameTag = (address, text) => ({
    type: "RENAME_TAG",
    payload: (address, text)
  });

export const setLocation = (address) => ({
  type: "ASYNC_SET_LOCATION",
  payload: {
    addres: address
  }
});

export const getBluetoothDevicesList = () => ({
  type: "ASYNC_GET_LIST",
  payload: null
});
  