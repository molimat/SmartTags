export const addTag = (tag)=> ({
    type: "ADD_TAG",
    payload: tag
  });

export const removeTag = id => ({
    type: "REMOVE_TAG",
    payload: id
});

export const renameTag = (device, text) => ({
    type: "RENAME_TAG",
    payload: (device, text)
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
  