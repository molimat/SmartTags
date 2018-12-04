const initialState = [];



export default function tags(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TAG':
      return [...state, action.payload]

    case 'REMOVE_TAG':
      return state.filter(tag => tag.address !== action.payload);
    
    case 'SET_LOCATION':
      return state.map(tag => {
        if (tag.address === action.payload.address) {
          return {...tag, latitude: action.payload.latitude, longitude: action.payload.longitude}
        };
        return tag;
      });

    case 'GET_BLUETOOTH_LIST':
      return state.map(tag => {
        if (tag.address === action.payload.address) {
          return {...tag, lastSeen: action.payload.updatedAt, latitude: action.payload.latitude, longitude: action.payload.longitude}
          };
          return tag; 
        });  

    case 'RENAME_TAG':
      return state.map(tag => {
        if (tag.address === action.payload.address) {
          return {...tag, name: action.payload.name}
        };
        return tag;
      });


    default:
      return state;
  }

}


