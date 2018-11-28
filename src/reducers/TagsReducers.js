
export default function tagsFunctions (state = {}, action) {
  switch (action.type) {
    case 'ADD_TAG':
      return [...state, action.device]
    
    case 'REMOVE_TAG':
      return 1
      
    case 'RENAME_TAG':
      return 
    default:
      return state;
  }

}


