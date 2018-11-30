const initialState = [];



export default function tags(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TAG':
      return [...state, action.payload]

    case 'ADD_TAG_FAKE':
      return [...state, {id: Math.random(), name: action.payload}]
    
    case 'REMOVE_TAG':
      return 1
      
    case 'RENAME_TAG':
      return 
    default:
      return state;
  }

}


