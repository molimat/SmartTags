const initialState = [];



export default function tags(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TAG':
      return [...state, action.payload]

    case 'ADD_TAG_FAKE':
      return [...state, {id: Math.random(), name: action.payload}]
    
    case 'SET_LOCATION':
      const list = state;
      list.map(
        (tag) => 
          {if(tag.address === action.payload.address )
            {  
              tag.location.latitude = action.payload.latitude;
              tag.location.longitude = action.payload.longitude
            }
        }
      )
      return list
      
    case 'RENAME_TAG':
      return 
    default:
      return state;
  }

}


